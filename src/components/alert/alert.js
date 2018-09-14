import React from 'react'

const Alert = (props) => {
    if (!props.show) {
        return null;
    }
    const classes=`alert ${props.type} alert-dismissible fade show my-2`
    return (
        <div className={classes} role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert
