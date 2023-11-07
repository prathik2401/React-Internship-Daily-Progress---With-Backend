import React from 'react'
import Sample2child from './Sample2child'


function Sample2() {
  return (
    <div>
    <div>Sample2</div>
        <Sample2child title="Image1" width={200} height={200}/>
        <Sample2child title="Image2" width={200} height={200}/>
        
    </div>
  )
}

export default Sample2