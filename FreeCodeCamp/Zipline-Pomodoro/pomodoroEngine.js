//PomodoroTimer "library"
function PomodoroTimer(WorkMin, BreakMin) {
  this.ms = 0;
  this.s = 0;
  this.m = WorkMin;
  this.WorkMinutes = WorkMin;
  this.BreakMinutes = BreakMin;
  this.isBreak = false;
  this.isPaused = true;
  this.uniqueId = "#PomodoroTimer";
  this.msOffset = 0;
  this.msinterval = 1000;
  this.audiolink = "http://oringz.com/oringz-uploads/sounds-1070-teleporter.mp3";

  //getters

  this.GetIsBreak = function() {
    return this.isBreak;
  }

  this.GetWorkMinutes = function() {
    return this.WorkMinutes;
  };

  this.GetBreakMinutes = function() {
    return this.BreakMinutes;
  };
  this.GetMinutes = function() {
    return this.m;
  };
  this.GetSeconds = function() {
    return this.s;
  };

  //setters
  this.SetUniqueId = function(val) {
    if (typeof(val) === "string") {
      val = val.replace(/#/, "");
      this.uniqueId = "#" + val;
    }
  }
  this.SetWorkMinutes = function(val) {
    if (!val.isNaN && val > 0)
      this.WorkMinutes = val;
  }
  this.SetBreakMinutes = function(val) {
    if (!val.isNaN && val > 0)
      this.BreakMinutes = val;
  }

}

//Reset Time
PomodoroTimer.prototype.ResetTime = function() {
  this.ms = 0;
  this.s = 0;
  if (this.isBreak)
    this.m = this.BreakMinutes;
  else
    this.m = this.WorkMinutes;
  this.RemoveMS(this.msOffset);
  this.msOffset = 0;
}

//Reset
PomodoroTimer.prototype.Reset = function() {
  this.isBreak = false;
  clearTimeout(this.timer);
  this.msOffset = 0;
  this.ResetTime();
  this.isPaused = true;
};

//Make Default
PomodoroTimer.prototype.MakeDefault = function() {
  this.BreakMinutes = 5;
  this.WorkMinutes = 25;
  this.msOffset = 0;
  this.uniqueId = "#PomodoroTimer";
  this.Reset();
}
PomodoroTimer.prototype.MakeTest = function() {
  this.BreakMinutes = 1;
  this.WorkMinutes = 1;
  this.m = 0;
  this.s = 10;
  this.uniqueId = "#PomodoroTimer";
  this.Reset();
}

//Switch Break
PomodoroTimer.prototype.SwitchBreak = function(val) {
  this.isBreak = this.isBreak ? false : true;
  this.ResetTime();
  var audio = new Audio(this.audiolink);
  audio.play();
};

//Remove Minutes
PomodoroTimer.prototype.RemoveMinutes = function(val) {
  if (isNaN(val))
    return;
  this.m -= val;
  if (this.m < 0 || this.m == 0 && this.s == 0) {
    {
      this.SwitchBreak();
    }
  }
};

//Remove seconds
PomodoroTimer.prototype.RemoveSeconds = function(val) {
  if (isNaN(val))
    return;
  this.s -= val;
  while (this.s < 0) {
    this.s += 60;
    this.RemoveMinutes(1);
  }
};

//Remove MilliSeconds
PomodoroTimer.prototype.RemoveMS = function(val) {
  if (isNaN(val))
    return;
  this.ms -= val;
  while (this.ms < 0) {
    this.msOffset = this.ms * -1;
    this.ms += 1000;
    this.RemoveSeconds(1);
  }
}

//toString
PomodoroTimer.prototype.toString = function() {
  var string = "" + " <br />uniqueId: " + this.uniqueId + " <br />IsPaused: " + (this.isPaused ? "Yes" : "No") + " <br />Work Minutes: " + this.WorkMinutes + " <br />Break Minutes: " + this.BreakMinutes + " <br />Minutes Left: " + this.m + " <br />Seconds Left: " + this.s + " <br />MS: " + this.ms + " <br />IsBreak: " + (this.isBreak ? "Yes" : "No");
  return string;
}

//PAUSE
PomodoroTimer.prototype.pause = function() {
  this.isPaused = this.isPaused ? false : true;
};

//START
PomodoroTimer.prototype.start = function() {
  var self = this;
  clearTimeout(this.timer);

  this.timer = setInterval(function() {

    if (!self.isPaused) {
      self.RemoveMS(self.msinterval);
    }

  }, self.msinterval);
}

PomodoroTimer.prototype.GetFormattedMinutes = function() {
  var str = ""
  if (this.m < 10)
    str += "0";
  str += this.m + ":";

  if (this.s < 10)
    str += "0";
  str += this.s;

  return str;
}
