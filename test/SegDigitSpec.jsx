import React            from 'react';
import ReactDOM         from 'react-dom';
import TestUtils        from 'react-addons-test-utils';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import SegDigit         from '../src/components/SegDigit';
import Perf             from 'react-addons-perf';
import SegUtil          from '../src/SegUtil';


describe('SegDigit Component', function(){
    it('should have a "seven-seg-digit-wrapper" class.', function(){
        var renderer = TestUtils.renderIntoDocument(<SegDigit value={1234} />);
        
        var node = $(ReactDOM.findDOMNode(renderer));
        
        expect(node).to.have.class('seven-seg-digit-wrapper');
    });
    
    
    it('should have a default width and height if seg-digit-options not provided.', function(){
        var renderer = TestUtils.renderIntoDocument(<SegDigit value={1234} />);
        
        var node = $(ReactDOM.findDOMNode(renderer));
        
        expect(node).to.have.attr('style');
    });
    
    
    it('should have children in element and detect a change of value.', function(){
        var Test = React.createClass({
            mixins: [LinkedStateMixin],
            getInitialState: function() {
                return {
                    value: 0
                }
            },
            handle: function(e) {
                this.setState({value: parseInt(e.target.value)})
            },
            render: function() {
                
                return (
                    <div>
                        <input value={this.state.value} onChange={this.handle} ref="input" />
                        <SegDigit value={this.state.value} ref="group"/>
                    </div>
                );
            }
        });
        
        var renderer = TestUtils.renderIntoDocument(<Test/>);
        var input = renderer.refs.input;
        var group = renderer.refs.group;
        
        for(var i = 0 ; i < 255 ; i++) {
            input.value = i;
            
            TestUtils.Simulate.change(input);
            TestUtils.Simulate.keyDown(input, {key: "Enter", keyCode: 13, which: 13});
            
            var node = $(ReactDOM.findDOMNode(renderer.refs.group)).find('g');
            
            expect(node.children()).to.have.length(8);
            
            var arr = SegUtil.segNumToArr(i);
            
            for(var j = 0 ; j < 8 ; j++) {
                if( arr[j] === void 0 ) arr[j] = false;
            }
            
            
            var hasClasses = $.map(node.children(), function(child){
                var className = $(child).attr('class');
                
                if(className === void 0) return false;
                
                return className.indexOf('seven-seg-on') !== -1;
            });
            
            expect(arr).to.deep.equal(hasClasses);
        }
    });
});