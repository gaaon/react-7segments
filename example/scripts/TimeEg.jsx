window['TimeEg'] = React.createClass({
    hhmmss: function(date) {
        var h = date.getHours()+'';
        var m = date.getMinutes()+'';
        var s = date.getSeconds()+'';
        
        h = h[1] ? h : '0'+h;
        m = m[1] ? m : '0'+m;
        s = s[1] ? s : '0'+s;
        
        return h+'-'+m+'-'+s;
    },
    getInitialState: function(){
        return {
            date: new Date()
        }
    },
    componentDidMount: function() {
        setInterval(()=>{
            this.setState({date: new Date()});
        }, 500);
    },
    render: function() {
        return (
            <Card cardTitle={"Time Example"}>
                <SegGroup value={this.hhmmss(this.state.date)} />
            </Card>
        );
    }
});