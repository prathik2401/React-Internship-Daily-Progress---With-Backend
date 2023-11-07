import React from 'react'

function Profile(props) {
      let  person = {
    city: 'Bangalore',
    occupation: 'Developer',
  }
    return(
            <div>
              <h1>{props.name}</h1>
              <div>
                <h4>{person.city} . {person.occupation}</h4>
                </div>
                <img src={props.url} alt=''></img>
            </div>
          )
}

export default Profile