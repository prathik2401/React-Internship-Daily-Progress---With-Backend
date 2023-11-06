import { useState } from 'react'
import Card from './Card'

function FormObject() {

    const [place, setplace] = useState(
        {
            name: "Vivan",
            city: "Bangalore",
            url: "https://th.bing.com/th?id=OSK.HERO4TP4tprdR2kMaUOC-0PkPDO2qtiP3b8PxtRP9D8zIiY&w=280&h=165&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM"
        }
    )

  return (
    <div>
        <div>
            <input type="text" placeholder='Name' value={place.name} onChange={(e) => setplace({...place, name: e.target.value})}/>
            <input type="text" placeholder='City' value={place.city} onChange={(e) => setplace({...place, city: e.target.value})}/>
            <input type="text" placeholder='Image URL' value={place.url} onChange={(e) => setplace({...place, url: e.target.value})}/>
        </div>
        <Card place={place} />
    </div>
  )
}

export default FormObject