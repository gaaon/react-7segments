window['DotsEg'] = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            value: '.1..1 ..'
        }
    },
    render: function() {
        return (
            <Card cardTitle='Dots Example'>
                <SegGroup value={this.state.value} />
                
                <div className="input-group">
                    <span className="input-group-addon">value</span>
                    <input type="text" className="form-control" 
                        valueLink={this.linkState('value')}disabled />
                </div>
            </Card>
        );
    }
});