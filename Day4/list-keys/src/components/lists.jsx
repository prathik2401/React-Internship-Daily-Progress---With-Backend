import React from 'react'




function Lists() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole in the Arctic Area',
        imageId: 'mynHUSa'
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];
      
      let printData = people.map((e) => (
        <div key={e.id}>
            <h1>{e.name}</h1>
            <p>{e.profession}</p>
        </div>
      )) 
  return (
    <div>
        {printData}
    </div>
  )
}

export default Lists