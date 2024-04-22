import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loader = useLoaderData()

    const handleUpdate = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        console.log(email,name)
        const updatedUser = {name,email}

        fetch(`http://localhost:5000/users/${loader._id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
              },
              body: JSON.stringify(updatedUser)
        })
        .then(res=> res.json())
        .then(data => {
            
            console.log(data)
            if(data.modifiedCount>0){
                alert('update successful')
            }
        } )
     }

    return (
        <div>
           <h2>{loader.name}</h2> 
           <form onSubmit={handleUpdate} action="card">
       <div>
       <input type="name" name='name' defaultValue={loader?.name} placeholder='Name'   />
       <br />
        <input type="email" name='email' defaultValue={loader?.email}  placeholder='email'   />
        <br />
        <button className=''>Update</button>
       </div>
       </form>
        </div>
    );
};

export default Update;