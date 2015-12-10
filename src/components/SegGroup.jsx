import React from 'react';
import '../styles/SegGroup.scss';
import SegMap from '../SegMap';
import SegDigit from './SegDigit';

export default React.createClass({
    getDefaultProps: function(){
        return {
            value: '12345'
        };
    },
    render: function(){
        var value = this.props.value;
        
        var digits = [];
        
        for(var i = 0 ; i < value.length ; i++) {
            digits[i] = <SegDigit value={SegMap[value[i]]} key={i} />;
        }
        
        return (
            <div>{digits}</div>
        );
    }
})