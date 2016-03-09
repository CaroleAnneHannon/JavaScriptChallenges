////ADAPTER
/*
weatherDisplay "library"
The idea is to make an adapter so if I have to make a change, 
I can change the function it calls without having to worry what the underlying weather API's format is
or which units it provides its data in*/
var weatherDisplay = function(lat, long, zip, city) {
  //private members
  var temperatures = {};
  var defaultUnits = {};
  var status = [];
  var windSpeeds = {};
  var pressures = {};
  var location = {};
  var windDirectionDegree;
  var windDirectionCardinal;
  var humidity;
  this.isUpdated = true;

  // conversion helper functions
  var convertHPAtoIN = function(val) {
    return Math.round(val * 0.02952998751 * 100) / 100;
  };
  var convertINtoHPA = function(val) {
    return Math.round(val / 0.02952998751 * 100) / 100;
  };

  var convertDegreeToCardinal = function(val) {
    if (val < 11.25) return "N";
    if (val < 33.75) return "NNE";
    if (val < 56.25) return "NE";
    if (val < 78.75) return "ENE";
    if (val < 101.25) return "E";
    if (val < 123.75) return "E";
    if (val < 146.25) return "ESE";
    if (val < 168.76) return "SE";
    if (val < 191.25) return "SSE";
    if (val < 213.75) return "S";
    if (val < 236.25) return "SSW";
    if (val < 258.75) return "SW";
    if (val < 281.25) return "WSW";
    if (val < 303.75) return "W";
    if (val < 326.25) return "WNW";
    if (val < 348.75) return "NNW";
    return "N";
  };

  //functional adapter methods
  this.weatherDisplayAdapter = function(func, lat, long, zip, city) {
    func(this, lat, long, zip, city);
    this.isUpdated = true;
  };
  this.displayHTML = function(func, tempUnit, windSpeedUnit, pressureUnit) {
    this.isUpdated = false;
    return func(this,tempUnit,windSpeedUnit,pressureUnit);
  };

  //Temperature methods
  this.getDefaultTemperatureUnit = function() {
    return defaultUnits.temperature;
  };
  this.getTemperature = function(val) {
    return val ? temperatures[val] : temperatures[this.getDefaultTemperatureUnit()];
  };

  this.setTemperature = function(val, unit, defaultunit) {
    var u = unit[0].toUpperCase();
    temperatures = {};
    temperatures[u] = Math.round((val) * 100) / 100;
    switch (u) {
      case "K":
        temperatures.F = Math.round((val * 9 / 5 - 459.67) * 100) / 100;
        temperatures.C = Math.round((val - 273.15) * 100) / 100;
        break;
      case "C":
        temperatures.F = Math.round((val * 9 / 5 + 32) * 100) / 100;
        temperatures.K = Math.round((val + 273.15, 2) * 100) / 100;
        break;
      case "F":
        temperatures.C = Math.round(((val - 32) * 5 / 9) * 100) / 100;
        temperatures.K = Math.round(((val + 459.67) * 5 / 9) * 100) / 100;
        break;
    }

    defaultUnits.temperature = defaultunit ? defaultunit : unit;
  };

  //Status methods
  this.getWeatherImage = function() {
    return status[1] ? status[1] : "#";
  };

  this.getWeatherStatus = function() {
    return status[0];
  };
  this.setStatus = function(desc, img) {
    status = [];
    status[0] = desc;
    status[1] = img;
  };

  //Humidity Methods
  this.getHumidityInPct = function() {
    return humidity;
  };
  this.setHumidityInPct = function(val) {
    humidity = val;
  };

  //Wind Methods
  this.getDefaultWindSpeedUnit = function() {
    return defaultUnits.windSpeed;
  };
  this.getWindSpeed = function(val) {
    return val ? windSpeeds[val][0] : windSpeeds[this.getDefaultWindSpeedUnit()][0];
  };
  this.getGustSpeed = function(val) {
    return val ? windSpeeds[val][1] : windSpeeds[this.getDefaultWindSpeedUnit()][1];
  };
  this.getWindDirection = function() {
    return windDirectionCardinal;
  };
  this.setWinds = function(windSpeed, degreeDirection, CardinalDirection, gusts, speedUnit, defaultunit) {
    windSpeeds = {};
    var su = speedUnit.toLowerCase();
    windSpeeds[su] = [windSpeed, gusts];

    if (su === "mph")
      windSpeeds.mps = [Math.round(windSpeed * 0.44704 * 100) / 100, Math.round(gusts * 0.44704 * 100) / 100];
    else if (su === "mps")
      windSpeeds.mph = [Math.round(windSpeed / 0.44704 * 100) / 100, Math.round(gusts / 0.44704 * 100) / 100];
    if (su !== "kph")
      windSpeeds.kph = [Math.round(windSpeeds.mps[0] * 3.6 * 100) / 100, Math.round(windSpeeds.mps[1] * 3.6 * 100) / 100];

    windDirectionDegree = degreeDirection;
    windDirectionCardinal = CardinalDirection;
    if (!windDirectionCardinal)
      windDirectionCardinal = convertDegreeToCardinal(degreeDirection);
    defaultUnits.windSpeed = defaultunit ? defaultunit : speedUnit;
  };

  //Pressure Methods
  this.getDefaultPressureUnit = function() {
    return defaultUnits.pressure;
  };
  this.getPressure = function(val) {
    return val ? pressures[val] : pressures[this.getDefaultPressureUnit()];
  };
  this.setPressure = function(val, unit, defaultunit) {
    pressures = {};
    pressures[unit.toLowerCase()] = val;
    if (unit.toLowerCase() === "hpa")
      pressures.in = convertHPAtoIN(val);
    else if (unit.toLowerCase() === "in")
      pressures.hpa = convertINtoHPA(val);
    defaultUnits.pressure = defaultunit ? defaultunit : unit;
  };

  //Location Methods
  this.getCity = function() {
    return location.city;
  }
  this.getZip = function() {
    return location.zip;
  }
  this.getCountry = function() {
    return location.country;
  }
  this.getLatitude = function() {
    return location.lat;
  }
  this.getLongitude = function() {
    return location.long;
  }
  this.setLocation = function(city, zip, country, lat, long) {
    location = {};
    location.city = city;
    location.zip = zip;
    location.country = country;
    location.lat = lat;
    location.long = long;
  };

  this.toString = function() {
    var string = JSON.stringify(temperatures);
    string += "\n" + JSON.stringify(defaultUnits);
    string += "\n" + status;
    string += "\n" + JSON.stringify(windSpeeds);
    string += "\n" + windDirectionDegree;
    string += "\n" + windDirectionCardinal;
    string += "\n" + JSON.stringify(pressures);
    string += "\n" + humidity;
    string += "\n" + JSON.stringify(location);
    string += "\n" + this.isUpdated;
    return string;
  };
};
