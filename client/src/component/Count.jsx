import { useEffect, useState } from "react";

function Count ({targetNumber , title}){

    const [count, setCount] = useState (0);

    useEffect(()=>{
        let start  = 0;
        const time = 1000;
        const timeing = Math.floor(time/targetNumber);


        const counter = setInterval(()=>{
            start +=1;
            setCount(start);

            if(start === targetNumber)clearInterval(counter);


          
        },timeing
    );

    return()=>clearInterval(counter);
    },[targetNumber]);

    const style ={
        card:{
         borderRadius: "13px"
        }
    }

    return(
        <>
       <div style={style.card} className="bg-black  justify-content-center h-100 pt-3  align-items-center text-center d-flex card">
        <h2 className="text-white">{count}</h2>
        <p className="text-white">{title}</p>
       </div>

        </>
    )
}
export default Count;
