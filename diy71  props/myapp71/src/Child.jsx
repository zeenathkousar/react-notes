import React from "react";

class Child extends React.Component{
    render()
    {
        return(
            // <h2>this is child component</h2>
            <p>Name :  {this.props.FN} {this.props.LN}</p>
        )
    }
}

export default Child