window['OptionsEg'] = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            value: '-_.123SEG',
            size: 12,
            align: 'right'
        }
    },
    handleAlign: function(e) {
        this.setState({align: e.target.value});
    },
    render: function(){
        return (
            <Card cardTitle='Options Example'>
                <SegGroup {...this.state}/>

                <div className="input-group">
                    <span className="input-group-addon"> value </span>
                    <input type="text" className="form-control" 
                        valueLink={this.linkState('value')}/>
                </div>
                
                <div className="input-group">
                    <span className="input-group-addon"> size </span>
                    <input type="number" className="form-control" 
                        valueLink={this.linkState('size')}/>
                </div>
                
                <div className="input-group">
                    <span className="input-group-addon"> align </span>
                    <div className="form-control">
                        <div className="radio-inline">
                            <label>
                                <input type="radio" name="align" 
                                    checked={this.state.align === 'right'}
                                    onChange={this.handleAlign}
                                    value='right' /> right
                            </label>
                        </div>
                        
                        <div className="radio-inline">
                            <label>
                                <input type="radio" name="align"
                                    checked={this.state.align === 'left'}
                                    onChange={this.handleAlign}
                                    value='left' /> left
                            </label>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
});