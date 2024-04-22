import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const handleCard =(e)=>{
  e.preventDefault()
  const form = e.target
  const email = form.email.value
  const name = form.name.value
  const user = {email,name}
  console.log(user)

  fetch('http://localhost:5000/users',{
    method:'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {console.log(data) 
      if(data.insertedId){
           alert('data added successfully')
           
      }
})
}
  <form onSubmit={handleCard} action="card">
       <div>
       <input type="name" name='name' placeholder='Name'   />
       <br />
        <input type="email" name='email' placeholder='email'   />
        <br />
        <button className=''>Add acc</button>
       </div>
       </form>
  return (
    <>
     
    </>
  )
}

export default App
