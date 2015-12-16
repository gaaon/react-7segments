window['Card'] = React.createClass({
    render: function() {
        return (
            <div className="card">
                <div className="card-header bg-corn text-white"> 
                    {this.props.cardTitle}
                </div>
                
                
                <div className="card-block bg-grey">
                    {this.props.children}
                </div>
            </div>
        );
    }
});