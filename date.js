//jshint= esversion 6

exports.getDate = function () {
    
    const today= new Date();
        
    const options = {
            weekday:"long",
            day:"numeric",
            month:"long"
    };
    
    const date=today.toLocaleDateString("es-AR", options);
    var firstCharacter = date.substring(0, 1).toUpperCase();
    var restString = date.substring(1); 
    return day= firstCharacter+ restString;
}

exports.getDay = function () {
    
    const today= new Date();
        
    const options = {
            weekday:"long",
    };
    
    const date=today.toLocaleDateString("es-AR", options);
    var firstCharacter = date.substring(0, 1).toUpperCase();
    var restString = date.substring(1); 
    return day= firstCharacter+ restString;
    
}