exports.arrToSegNum = function(arr) {
    var pos = 1, ret = 0;
    
    for(var i = 0, len = 8 ; i < len ; pos<<=1, i++) {
        if( !!arr[i] && arr[i] != '0') ret |= pos;
    }
    
    return ret;
};

exports.segNumToArr = function(val, oldVal) {
    var pos = 1;
    val = val || 0;
    
    var xor = oldVal == void 0 ? val : (val ^ oldVal);
    
    var array = [];
    for(var i = 0 ; i < 8 ; pos <<= 1, i++) {
        if( pos & xor ) {
            array[i] = !!(pos & val);
        }
    }
    
    return array;
};