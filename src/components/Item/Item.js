import React  from 'react';
import './Item.css'

const Item = (props)=>{
    const {items , deletItem }= props ;
    let length = items.length
    const listItems= length ? (items.map(item => {
        return(
            <div key={item.id}>
               <span className="name">{item.name}</span>
               <span className="age">{item.age }</span>
               <span className="action icon" onClick={() => deletItem(item.id)}>&times;</span>
            </div>
        )
    })) : (<p> There Is No Thing To Show </p>)
return(
    <div className="listItem">

        <div >
            <span className="name title" >Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
        </div>
    <div>{listItems}</div>

    </div>
)

}

export default Item