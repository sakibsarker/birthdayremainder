import React from 'react'
import './App.css';
const List=({people})=> {
  return (
    <>
    {people.map((person)=>{
        const{id,name,age,image}=person;
        return(
            <article key={id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h2>Name: {name}</h2>
                    <h2>Age: {age} years</h2>
                </div>
            </article>
            
        )

    })}
    </> 
  )
}

export default List