import { useState } from "react";
import "../App.css";
import { usePizzaContext } from "../context/PizzaContext";


export default function InputPizza(){
    const { searchUsers , users,  clearUser} = usePizzaContext()
      
    const getTotalPeople=(e)=>{
        setTotalPeople( e.target.value)
    }

    const getPerPersonSlice=(e)=>{
       setPerPersonSlice( e.target.value);
    }

    const getTotalSlice=(e)=>{
        setTotalSlice(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(totalPeople === ' ' || perPersonSlice === ' ' || totalSlice===' '){

        }else {
             let result = Math.round((perPersonSlice  *  totalPeople ) / totalSlice);
             setPizza(result);
             setPerPersonSlice('')
             setTotalPeople('')
             setTotalSlice("")
            
        }  
    }
    return (
        <div className="container-inputs">
                    <form onSubmit={handleSubmit}>
            <h1>{pizza} pizza Needed</h1>
            <div className='inputs'>  <label > Number of People</label>
            <input type='number' required= "true"  value = {totalPeople} onChange={getTotalPeople} placeholder='Number of Pizza'/></div>
           <div className='inputs'>
           <label > Slices per Person(will eat)</label>
            <input type='number' required= "true" value = {perPersonSlice}  onChange={getPerPersonSlice} placeholder='Slices per Person'/>
           </div>
         <div className='inputs'>
         <label > Total Slices of Pizza(slice per pizza)</label>
            <input type='number' required= "true"  value = {totalSlice} onChange={getTotalSlice} placeholder='Total Slices of Pizza'/>
         </div>
         <div className="inputs">
             <button type="submit" className="des">See the Result</button>
         </div>
         </form>
         </div>
    )
}