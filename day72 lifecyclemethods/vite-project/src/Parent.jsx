import React, { useState } from "react";
import Child from "./Child";

// class Parent extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h2>Parent Component</h2>
//                 <Child/>
//             </div>
//         )
//     }
// }

function Parent(){
    const [name,setName]=useState('zeenath');
    return(
        <div>
            <h1>parent component</h1>
            {/* <Child name={name}/> */}
            <Child />
            {/* <button onClick={()=>setName('kousar')}>update</button> */}
        </div>

    )
}

export default Parent