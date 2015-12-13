import React        from 'react';
import ReactDOM     from 'react-dom';
import TestUtils    from 'react-addons-test-utils';
import SegGroup     from '../src/components/SegGroup';
import Perf         from 'react-addons-perf';


describe('SegGroup Component', function(){
    it('should detect change and re-render.', function(){
        var TestDir = React.createClass({
            getInitialState: function(){
                return {
                    value: 0
                };
            },
            handleChange: function(event){
                this.setState({value: event.target.value});
            },
            render: function(){
                return (
                    <div>
                        <input value={this.state.value} ref="input" type="text" onChange={this.handleChange} />
                        <SegGroup value={this.state.value}/>
                    </div>
                );
            }
        });
        
        
        var renderer = TestUtils.renderIntoDocument(<TestDir/>);
        
        var node = renderer.refs.input;
        
        Perf.start();
        for(var i = 1 ; i < 256 ; i++) {
            
            node.value = i;
            TestUtils.Simulate.change(node);
            TestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
        }
        Perf.stop();
        
        Perf.printInclusive(Perf.getLastMeasurements());
    });
});