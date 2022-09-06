import React, { useState } from "react";

const FehCel = () =>{
    const[cel,setCel] = useState(0);
    const[feh,setFeh] = useState(32);
    const[seletedValue, setSeletedValue] = useState('')
    let c = 0;
    let f = 32;

    const valueChange = (e) =>{
        if(e.target.name==='cel'){
            c=e.target.value
            setCel(e.target.value)
            setSeletedValue('C')
        }
        else{
            f=e.target.value
            setFeh(e.target.value)
            setSeletedValue('F')
        }
        if(seletedValue==='C'){
             f = (cel * 1.8) + 32
        }
        if(seletedValue==='F'){
             c = [(feh-32)*5]/9

        }
    }

    return(
        <div>
            <label>Enter Celsius value: </label>
            <input type='text' name='cel' value={c} onChange={(e)=>{valueChange(e)}}/>
            <label>Enter Fahrenheit value: </label>
            <input type='text' name='feh' value={f} onChange={(e)=>{valueChange(e)}}/>
        </div>
    )
}

export default FehCel