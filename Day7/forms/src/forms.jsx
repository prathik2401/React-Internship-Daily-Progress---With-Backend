import React from 'react'
import { useState } from 'react'

function Forms() {

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setdata] = useState([]);

    console.log(data);
    function submitHandler(e) {
        e.preventDefault();
        setdata({
            first_name: firstName, last_name: lastName
        })
        alert("You have submitted the form successfully!")
    }

  return (
    <div>
        <form onSubmit={
            (submitHandler)
        }><h1>
            Welcome {data.first_name} {data.last_name}
        </h1>
            <input type="text" placeholder='First Name' onChange= {
                (event) => setfirstName(event.target.value)
            }/>
            <input type="text" placeholder='Last Name' onChange= {
                (e) => setLastName(e.target.value)
            }/>
            <button type='Submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms