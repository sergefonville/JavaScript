var JSON = {};
JSON['stringifyArray'] = function(array) {
    var jsonData = '[';
    for(var i = 0; i < array.length; i++) {
        if(array[i] instanceof Array)
            jsonData += JSON['stringifyArray'](array[i])
        else if(array[i] instanceof Object)
            jsonData += JSON['stringifyObject'](array[i]);
        else if(typeof array[i] == 'string')
            jsonData += '"' + array[i] + '"';
        else 
            jsonData += array[i];
        jsonData += ',';
    }
    jsonData = jsonData.replace(/,$/g, '');
    jsonData += ']';
    return jsonData;
};
JSON['stringifyObject'] = function(object) {
    var jsonData = '{';
    for(var property in object) {
        jsonData += '"' + property +'":';
        if(object[property] instanceof Array)
            jsonData += JSON['stringifyArray'](object[property])
        else if(object[property] instanceof Object)
            jsonData += JSON['stringifyObject'](object[property])
        else if(typeof object[property] == 'string')
            jsonData += '"' + object[property] + '"';
        else 
            jsonData += object[property];
        jsonData += ',';
    }
    jsonData = jsonData.replace(/,$/g, '');
    jsonData += '}';
    return jsonData;
};
JSON["parse"] = function(string) {
	return (new Function ('return ' + string))()
};

JSON['stringify'] = function(object) {
    if(object instanceof Array)
        return JSON['stringifyArray'](object)
    if(object instanceof Object)
        return JSON['stringifyObject'](object);
    if(typeof object == 'string')
        return '"' + object + '"';
    return object;    
};