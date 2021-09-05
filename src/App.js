import React, { Component } from 'react';
import Item from './components/Item/Item';
import AddItem from './components/Form/AddItem';
class App extends Component{
    state = {
        items:[
            {id:1 , name: 'ahmed', age:' 34'},
            {id:2 , name: 'Ali', age:' 24'},
            {id:3 , name: 'sala', age:' 20'}

        ]
    }

    deletItem = (id)=>{
         let items = this.state.items.filter(item => {
             return item.id !== id })
              this.setState({items})
            } 
            
            AddItem = (item)=>{
            item.id= Math.random();
            let items = this.state.items;
            items.push(item);
            
           this.setState({items})
     
            }
          
    render(){
        return(
            <div className="container">
                <h1 className="text-center">TO DO List</h1>
                <Item items={this.state.items} deletItem={this.deletItem}/>
                <AddItem  AddItem = {this.AddItem}/>
            </div>
        )
    }
}

export default App;