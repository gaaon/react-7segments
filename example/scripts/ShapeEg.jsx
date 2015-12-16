var customPoints = SegPoints.slice();

customPoints[1] = "38 11, 43 6, 48 11, 48 39, 43 39, 38 34";
customPoints[2] = "38 46, 43 41, 48 41, 48 69, 43 74, 38 69";
    
customPoints[4] = "0 41, 5 41, 10 46, 10 69, 5 74, 0 69";
customPoints[5] = "0 11, 5 6, 10 11, 10 34, 5 39, 0 39";

var digitOptions = {
    points: customPoints,
    width: 150,
    height: 300
};

window['ShapeEg'] = React.createClass({
    render: function() {
        return (
            <Card cardTitle={'Custom Shape'}>
                <SegGroup value="1234" digitOptions={digitOptions} />
            </Card>
        );
    }
})