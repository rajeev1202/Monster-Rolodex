import React from 'react';
import './CardListComponent.css';
import {Card} from '../card/Card'

export const CardListComponent = props =>{
    return(
       <div className='flex-container'>
          {
        props.monsters.map(monster =>(
           <Card key = {monster.id} monster = {monster}/>
        
        )
        )
      }
           </div>
    )

}


