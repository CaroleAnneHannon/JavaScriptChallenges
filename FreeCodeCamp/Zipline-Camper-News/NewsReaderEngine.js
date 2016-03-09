var FCCLink = function(object){
    this.object = object;
    
    this.getTitle = function(size){
        if(!Boolean(size))
            return this.object.headline;
        if(size < this.object.headline.length)
            return this.object.headline.slice(0,size-3)+'...';
        return this.object.headline.slice(0,size);
             
    };
    
    this.getUpvotes = function(){
        return this.object.rank;
    };
    
    this.getURL = function(){
        return this.object.link;
    };
    
    this.getFCCURL = function(){
        return "http://www.freecodecamp.com/news/"+this.object.storyLink.replace(/\s/g,'-');
    };
    
    this.getDescription = function(){
        return this.object.metaDescription;
    };
    
    this.toString = function(){
        return this.object;
    };
};

var FCCNews = function(array){
    this.news = [];
    for(var i = 0; i < array.length; i++){
        this.news.push(new FCCLink(array[i]));
    }
};
