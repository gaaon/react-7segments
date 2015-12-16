# react-7segments
[![Build Status](https://travis-ci.org/Wooooo/react-7segments.svg?branch=master)](https://travis-ci.org/Wooooo/react-7segments)
[![Coverage Status](https://coveralls.io/repos/Wooooo/react-7segments/badge.svg?branch=master&service=github)](https://coveralls.io/github/Wooooo/react-7segments?branch=master)
[![Npm Version](https://img.shields.io/npm/v/react-7segments.svg)](https://npmjs.org/wooooo/react-7segments)
[![Npm License](https://img.shields.io/npm/l/react-7segments.svg)](https://npmjs.org/wooooo/react-7segments)

React component for seven segments

<a name="usage"></a>
## Usage
npm
```
npm install react-7segments --save
```

bower
```
bower install react-7segments --save
```

browser
```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    
    <body>
        ...
        
        <div id="demo"></div>
        
        <script src="//fb.me/react-with-addons-0.14.3.min.js"></script>
        <script src="//fb.me/react-dom-0.14.3.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
        
        <script src="bower_components/react-7segments/react-7segments.js"></script>
        
        <script type="text/babel">
            var SegGroup = React7Seg.Group; // can access by global variable 'React7Seg'
            
            ReactDOM.render(
                <SegGroup value="1234" />, // [1][2][3][4]
                document.getElementById('demo')
            );
            
        </script>
    </body>
</html>
```

nodejs

```javascript
import React7Seg from 'react-7segments';
import React from 'react';

const SegGroup = React7Seg.Group;
//or import SegGroup from 'react-7segments/src/components/SegGroup.jsx';

export default React.createClass({
    render: function(){
        return(
            <SegGroup value="1234" />            
        );
    };
});
```


<a name="example"></a>

## Example
Live [example](http://wooooo.github.io/react-7segments)

### Basic
```jsx
var BasicEg = React.createClass({
    render: function() {
        return (
            <SegGroup value="0123456789" />
            // [0][1][2][3][4][5][6][7][8][9]
            // [ ] means one distinct 7segments-digit
        );
    }
});
```

### Dot
- Dot has some exceptions because try to reflect real seven digits.
- Basically, dot doesn't reside in one distinct digit.
    - eg) 12.34 --> [1][2.][3][4]

- However, under the below conditions, it holds one digit.
    - Dot is the first character.
        - eg) .1234 --> [.][1][2][3][4]
    
    - Dot's left character is a dot.
        - eg) 1... --> [1.][.][.]
    
    - Dot's left character is a space.
        - eg) 12 .45 --> [1][2][.][4][5]

### Supported characters
- number
- alphabet: 'SEG' ( It has a relation with module name :) )
- special character: hyphen(-), lodash(_), dot(.), space( )

### Options
```jsx
var OptionsEg = React.createClass({
    render: function() {
        var options = {
            size: 10,
            align: 'left'
        };
        return (
            <SegGroup {...options} value="12345" />
            // [1][2][3][4][5][ ][ ][ ][ ][ ]
        );
    }
});
```

### Custom style
```css
.custom-on-class {
    fill: black;
}

.custom-digit-class {
    fill: #ddd;
    background-color: white;
}
```
```jsx
var StyleEg = React.createClass({
    render: function() {
        var digitOptions = {
            onClass: 'custom-on-class',
            digitClass: 'custom-digit-class'
        };
        
        return (
            <SegGroup digitOptions={digitOptions} value="12345" />
            // [1][2][3][4][5]
            // background color is white and light-on part color is black -->
        );
    }
});
```

### Custom pattern
Allow to add custom segment pattern by passing it into options
```jsx
const SegMap = React7Seg.Map;
const SegUtil = React7Seg.Util;

var PatternEg = React.createClass({
    render: function() {
        var customPatterns = {
        'r' : SegUtil.arrToSegNum([0, 0, 0, 0, 1, 0, 1]);
        'o' : SegUtil.arrToSegNum([0, 0, 1, 1, 1, 0, 1]);
        'b' : SegUtil.arrToSegNum([0, 0, 1 ,1 ,1, 1, 1]);
        
        var customMap = _.assign({}, SegMap, customPatterns); // use lodash.assign
        
        return (
            <SegGroup map={customMap} value="bro" />
            // [b][r][o]
            // These are not provided basically
        );
    }
});
```

### Custom shape 
```jsx
const SegPoints = React7Seg.Points;

var ShapeEg = React.createClass({
    render: function() {
        var customPoints = SegPoints.slice(); //will clone SegPoints
        
        customPoints[1] = "38 11, 43 6, 48 11, 48 39, 43 39, 38 34";
        customPoints[2] = "38 46, 43 41, 48 41, 48 69, 43 74, 38 69";
            
        customPoints[4] = "0 41, 5 41, 10 46, 10 69, 5 74, 0 69";
        customPoints[5] = "0 11, 5 6, 10 11, 10 34, 5 39, 0 39";
        
        var digitOptions = {
            points: customPoints
        };
        
        return (
            <SegGroup digitOptions={digitOptions} value="1234" />
            //It has right angle at middle part
        );
    }
});
```
<a name="license"> </a>
## LICENSE
[MIT](LICENSE)