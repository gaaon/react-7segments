import React            from 'react';
import ReactDOM         from 'react-dom';
import TestUtils        from 'react-addons-test-utils';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import SegGroup         from '../src/components/SegGroup';
import Perf             from 'react-addons-perf';
import SegUtil          from '../src/SegUtil';


describe('segGroup Component', function(){
    it('should have children with number of "size" props.', function(){
        var size = 10;
        
        var renderer = TestUtils.renderIntoDocument(<SegGroup value={'1234'} size={size} />);
        
        var node = $(ReactDOM.findDOMNode(renderer)).find('g');

        expect(node).to.have.length(size);
        
    });
    
    
    it('should have childen with number of "value" prop\'s length if size prop is not given.', function(){
        var value = '123456';
        var renderer = TestUtils.renderIntoDocument(<SegGroup value={value} />);
        
        var node = $(ReactDOM.findDOMNode(renderer)).find('g');
    
        expect(node).to.have.length(value.length);
        
    })
});