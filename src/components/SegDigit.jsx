import React        from 'react';
import SegPoints    from '../collections/SegPoints';

import '../styles/SegDigit.scss';

export default React.createClass({
    getDefaultProps: function(){
        return {
            digitClass: 'seven-seg-digit',
            onClass: 'seven-seg-on',
            points: SegPoints,
            width: 75,
            height: 150
        };
    },
    shouldComponentUpdate: function(nextProps) {
        return this.props.value !== nextProps.value;
    },
    
    isOn: function(pos) {
        return this.props.value & pos ? this.props.onClass : undefined;
    },
    
    render: function() {
        
        var digitWrapperStyle = {
            width: this.props.width+'px',
            height: this.props.height+'px'
        };
        
        var polylines = [];
        
        for(var i = 0 ; i < 7 ; i++) {
            polylines[i] = <polyline points={this.props.points[i]} className={this.isOn(1<<i)} key={i} />;
        }
        
        return (
            <div className="seven-seg-digit-wrapper" style={digitWrapperStyle}>
                <svg className={this.props.digitClass} viewBox="0 0 57 80" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <g>
                        {polylines}
                        <circle cx="52" cy="75" r="5" className={this.isOn(128)}></circle>
                    </g>
                </svg>
            </div>
        );
    }
});