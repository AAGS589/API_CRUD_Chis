import React from 'react'
import Header from '../components/Header'
import Cuenta from "../components/Cuenta";
class MiCuenta extends React.Component{


    componentDidMount() {
            if(!window.localStorage.getItem("token")){
                this.props.history.push('/main')
            }
    }
  render(){
      return(
          <>
<Header/>
<Cuenta/>


          </>

      )
  }
}
export default MiCuenta;