import React from "react";
import ReactDOM from "react-dom";

import image from '/Users/joshuacox/Desktop/big ben test.jpg';

function FirstComponent() {
    return ( < img src = {image} />
    )


};

ReactDOM.render( < FirstComponent / > , document.getElementById("root"));