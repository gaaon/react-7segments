import React from 'react';
import '../styles/SegGroup.scss';
import SegMap from '../SegMap';
import SegDigit from './SegDigit';


export default React.createClass({
    getDefaultProps: function(){
        return {
            size: 9,
            align: true,
            value: '-.1.2.345'
        };
    },
    
    isDot : function(item) {
        return item === '.' || item === SegMap['.'];
    },
    
    componentWillReceiveProps: function(nextProps){
        //console.log(nextProps);
    },
    
    getSegArray: function(value) {
        var newArr = [], cnt = 0;
        var size = this.props.size === void 0 ? value.length : this.props.size, i = 0;
        
        for(var len = value.length ; i < len && cnt < size; cnt++, i++) {
            var item = value[i] || 0;
            
            if( this.isDot(item) ){ // when item is dot
                var prev = value[i-1];
                
                if( prev === void 0 || this.isDot(prev) ) newArr[cnt] = SegMap['.'];
                else newArr[--cnt] |= SegMap['.'];
            }
            
            else if( typeof(item) === 'string' ) {
                newArr[cnt] = SegMap[item];
            }
            
            else if( typeof(item) === 'number' ) {
                newArr[cnt] = item;
            }
        }
        
        if( this.isDot(value[i]) ) newArr[cnt-1] |= SegMap['.'];
        
        size = this.props.size === void 0 ? cnt : this.props.size;
        
        if(this.props.align === void 0 || this.props.align === 'right') return (new Array(size-cnt)).concat(newArr);
        else return newArr.concat(new Array(size-cnt));
    },
    
    getSegDigits: function(arr) {
        var digits = [];
        
        for(var i = 0 ; i < arr.length ; i++) {
            digits[i] = <SegDigit value={arr[i]} key={i} />;
        }
        
        return digits;
    },
    
    render: function(){
        var results = this.getSegDigits(this.getSegArray(this.props.value));
        return (
            <div className="seven-seg-group">
                {results} 
            </div>
        );
    }
})