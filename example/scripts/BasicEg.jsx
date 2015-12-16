window['BasicEg'] = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            value: "7SEG-1.23"
        };
    },
    render: function() {
        
        return (
            <Card cardTitle={"Basic Example"}> 
                <SegGroup value={this.state.value}/>
                
                <div className="input-group">
                    <span className="input-group-addon">value</span>
                    <input type="text" className="form-control" 
                        valueLink={this.linkState('value')} />
                </div>
            </Card>
        );
    }
});