import React from  'react' ;
import Emoji from './Changemoji' ;


function Icon(props){
   
   
    if(props.x === props.y && props.y === props.z) 
    { return (
    <>
    <div className='machine'>
    <h1> {props.x}{props.y}{props.z} </h1>

    <h1>This is Matched</h1>
    <hr/>
    </div>
    </>)
     }

     else{
        return(
        <>
        <h2>{props.x}{props.y}{props.z}</h2>
        <h1>This is not Matched</h1>
        <hr/>
        </>)
     }
       
}
export default Icon ;