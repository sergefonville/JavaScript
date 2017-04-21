var JSON = {
    parse: function(string) {
        return (new Function ('return ' + string))()
    },
    stringify: function(object) {
        if(object instanceof Array) {
            var jsonArrayArray = [];
            for(var i = 0; i < object.length; i++)
                jsonArrayArray.push(this.stringify(object[i]));
            return '[' + jsonArrayArray.join(',') + ']'; 
        }
        if(object instanceof Object) {
            var jsonObjectArray = [];
            for(var property in object)
                jsonObjectArray.push('"' + property + '":' + this.stringify(object[property]));
            return '{' + jsonObjectArray.join(',') + '}';
        }
        if(typeof object === 'string')
            return '"' + object + '"';
        else
            return object;
    }
}