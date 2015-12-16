window['StyleEg'] = React.createClass({
    render: function(){
        var config = {
            digitOptions : {
                onClass: 'custom-segment-on',
                digitClass: 'custom-segment-digit'
            },
            size: 10,
            value: '12345678'
        };
        
        return (
            <Card cardTitle={'Custom Style'} >
                <SegGroup {...config}/>
            </Card>
        );
    }
})