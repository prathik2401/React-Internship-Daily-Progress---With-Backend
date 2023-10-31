import React from 'react'
import Header from './header'
import CenterComponent from './centerComponent'
import Footer from './footer'
function LayoutExport() {
  return (
    <div>
        <Header></Header>
        <CenterComponent></CenterComponent>
        <Footer></Footer>
    </div>
  )
}

export default LayoutExport