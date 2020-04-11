import React from 'react';
import './Card.css'
export const Card = (props) =>{
return(
<div >
        <img alt = 'monster' src ={`https://robohash.org/${props.monster.id}?set=set2&size =10*10`}/>
         <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>

)

}