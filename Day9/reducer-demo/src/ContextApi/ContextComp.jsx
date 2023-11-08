import React, { createContext, useContext } from 'react'

let theme = createContext(null);
// let title = createContext(null);

function ContextComp() {
    let customTheme = useContext(theme);
    let customClass = 'body-'+customTheme;
  return (
    <div className={customClass}>
        <theme.Provider value="dark">
        <Form/>
        </theme.Provider>
    </div>
  )
}

export default ContextComp

function Form() {
    return(
            <Panel>
                <Button>Button 1</Button>
                 <Button>Button 2</Button>
             </Panel>
    )
}

function Panel({children}) {
    let customTheme = useContext(theme);
    let customClass = 'panel-'+customTheme;
    return(
        <div className={customClass}>
            <h1> 
                Hello
            </h1>
            {children}
        </div>
    )
}

function Button({children}) {
    let customTheme = useContext(theme);
    let customClass = 'button-'+customTheme;
    return(
        <div>
            <button className={customClass}>{children}</button>
        </div>
    )
}