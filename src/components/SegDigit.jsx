import React from 'react';
import '../styles/SegDigit.scss';


export default React.createClass({
    getDefaultProps: function(){
        return {
            digitClass: 'seven-seg-digit',
            onClass: 'seven-seg-on',
            width: 75,
            height: 150
        };
    },
    render: function() {
        var isOn = (pos)=>{
            return this.props.value & pos ? this.props.onClass : undefined;
        };
        
        var digitWrapperStyle = {
            width: this.props.width+'px',
            height: this.props.height+'px'
        };
        
        return (
            <div className="seven-seg-digit-wrapper" style={digitWrapperStyle}>
                <svg className={this.props.digitClass} viewBox="0 0 57 80" version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" focusable="false">
                    
                    <defs>
                        <polyline id="h-part" points="11 0, 37 0, 42 5, 37 10, 11 10, 6 5"></polyline>
                        <polyline id="v-part" points="0 11, 5 6, 10 11, 10 34, 5 39, 0 34"></polyline>
                    </defs>
                    
                    <g>
                        <use xlinkHref="#h-part" x="0" y="0"
                            className={isOn(1)}></use>
                        
                        <use xlinkHref="#v-part" x="-48" y="0" transform="scale(-1,1)" 
                            className={isOn(2)}></use>
                        
                        <use xlinkHref="#v-part" x="-48" y="-80" transform="scale(-1,-1)" 
                            className={isOn(4)}></use>
                        
                        <use xlinkHref="#h-part" x="0" y="70" 
                            className={isOn(8)}></use>
                        
                        <use xlinkHref="#v-part" x="0" y="-80" transform="scale(1,-1)"  
                            className={isOn(16)}></use>
                            
                        <use xlinkHref="#v-part" x="0" y="0"  
                            className={isOn(32)}></use>
                        
                        <use xlinkHref="#h-part" x="0" y="35"  
                            className={isOn(64)}></use>
                        
                        <circle cx="52" cy="75" r="5"  
                            className={isOn(128)}></circle>
                    </g>
                </svg>
            </div>
        );
    }
});