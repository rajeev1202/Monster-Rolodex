import React, { Component } from 'react';
import './App.css';
import {CardListComponent} from './components/cardList/CardListComponent';
import {SearchBoxComponent} from './components/searchBox/SearchBoxComponent';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchField : ''
    } 
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(user => this.setState({monsters:user}));
   }
   handleOnChange =(e) => this.setState({searchField:e.target.value})

   render()
 { 
   const {monsters,searchField} = this.state;
   const filterMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(searchField.toLowerCase())
     );
   return (
     <div>
    <h1>Monster Rolodex</h1>
      <SearchBoxComponent
      placeholder = 'Search Monsters'
      handleOnChange = {this.handleOnChange}
      />
      <CardListComponent monsters ={filterMonsters}/>
    </div>
   )}
}
export default App;
