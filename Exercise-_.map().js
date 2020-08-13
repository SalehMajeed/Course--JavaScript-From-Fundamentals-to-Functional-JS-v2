const _ = {}

_.map = function(list, callback){
    var storage = []

    _.each(list, function (v, i, list) {
        storage.push(callback(v, i, list))
    })

    return storage
}

_.map([1, 2, 3], function (val){return val + 1})

_.each = function(list, callback){
    if (Array.isArray(list)){
        for(var i = 0; i < list.length; i++){
            callback(list[i], i, list)
        }
    }
    else{
        for (var key in list){
            callback(list[key], key, list)
        }
    }
}