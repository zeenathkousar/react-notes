import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  
  const [e,setE] = useState()

  const [out, setOut] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then((resp )=> {
        // console.log("result",resp)
        setData(resp)
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])

  // console.log(data)



 function filteration(){
  let arr;
  if(e!=''){
    arr=data.filter(item => item.id == Number(e))
  }
  else{
    arr=data;
  }
  setOut(arr)
  console.log('arr is');
  console.log(out)
  }

  
  return (
    <>

    <input type="text" placeholder='Enter id' onChange={(ev)=>setE(ev.target.value)} />
    <button onClick={()=>{
        let arr;
        if(e!=''){
          arr=data.filter(item => item.id == Number(e))
        }
        else{
          arr=data;
        }
        setOut(arr)
        console.log('arr is');
        console.log(out)
      
    }}>Submit</button>
    
    {out.map((item)=>{
      return  <div>
        <h4>{`${item.id} - ${item.title}`}</h4>
        <div>{item.body}</div>
      </div>
    })}
  
    
    
    
      
    </>
  )
}

export default App
