import React from 'react'

const AlertMessage = (props:any) => {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}

export default AlertMessage
