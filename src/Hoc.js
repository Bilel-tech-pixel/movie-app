import React from 'react'
import SpinnerComponent from './SpinnerComponent'

const Hoc = WrappedComponent => {
    return props  =>{
        return(
            props.isloading ? <SpinnerComponent/>:<WrappedComponent {...props} />
        )
    }
}

export default Hoc;