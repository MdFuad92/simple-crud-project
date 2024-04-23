import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const useLoader = useLoaderData()
    const [user,setUser] = useState(useLoader)

    const handleDelete = (_id)=>{
        console.log('deleted',_id)
        fetch(`http://localhost:5000/users/${_id}`,{

        method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0  ){
             
                const remaining = user.filter(use => use._id !== _id)
                setUser(remaining)

               
            }
          
         
        }
            
      
         
    )

    }
    return (
        <div>
            <h1>user: {user.length}</h1>
            <div>
                {
                    user.map(u=> <div key={u._id}>
                           <p > {u.name}: {u.email} {u._id} 
                           <Link to={`/update/${u._id}`}>
                            <button>Update</button>
                           </Link>
                           <button onClick={()=>handleDelete(u._id)} >Delete</button></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default User;