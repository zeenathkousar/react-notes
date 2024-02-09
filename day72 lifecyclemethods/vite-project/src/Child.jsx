import React from "react";

class Child extends React.Component{
    constructor(){
        super()
        this.state={
            email:'zee@gmail.com'
        }
    }
    render(){
        console.log('render method',this.state.email)
        return(
            <div>
                {/* <h2>child Component {this.props.name}</h2> */}
                <h2>
                    child Component {this.state.email}
                    <button onClick={()=>this.setState({email:'kousar@gmail.com'})}> update email</button>
                </h2>
            </div>
        )
    }
}

export default Child