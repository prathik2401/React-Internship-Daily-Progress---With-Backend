import React from 'react'

export let name = React.createContext(null);

function Context({children}) {
  return (
    <name.Provider value="Hello">
        {children}
    </name.Provider>
  )
}

export default Context