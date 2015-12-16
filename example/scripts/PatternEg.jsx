var customPatterns = {
    'r' : SegUtil.arrToSegNum([0, 0, 0, 0, 1, 0, 1]),
    'o' : SegUtil.arrToSegNum([0, 0, 1, 1, 1, 0, 1]),
    'b' : SegUtil.arrToSegNum([0, 0, 1 ,1 ,1, 1, 1]),
    
};

var customMap = _.assign({}, SegMap, customPatterns);
window['PatternEg'] = React.createClass({
    render: function() {
        return (
            <Card cardTitle={"Custom Pattern"}>
                <SegGroup map={customMap} value="bro"/>
            </Card>
        );
    }
})