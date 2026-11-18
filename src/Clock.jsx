
import { useState , useEffect } from "react";


function Clock() {
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    const [show,setShow]=useState(true);
    useEffect(()=>{
        if(!show)
            return;
        const intervalId=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
            console.log("Time updated");
        },1000); 
        return () =>{ 
            clearInterval(intervalId);
    }

    },[show]);

  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",borderInlineColor:"black",borderBlockColor:"black",borderStyle:"solid",borderWidth:"5px",width:"100"}}>
         <button onClick={()=>setShow(!show)} style={{ padding: '10px', margin: '10px',height:"50px",width:"100px",borderRadius:"40%" }}> {show ? "Hide" : "Show"} Time</button>
    <h1 style={{ fontSize: '2em',fontStyle: 'italic' }}>Current Time: {time}</h1>
    </div>
   
    </>
    
  );
}

export default Clock;