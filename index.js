import React from "react";
import  ReactDom from "react-dom";

const App = () => {
    console.log('开始', Date.now());
    return (
        <div>this is app</div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))