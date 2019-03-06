import React from 'react'
import './Control.css'
const Control = (props) => {
    return (
        <>
            <button onClick={props.prev} disabled={props.Textdetails.indexOf(props.det) === 0}>
                Prev
        </button>
            <button onClick={props.next} disabled={props.Textdetails.indexOf(props.det) === props.Textdetails.length - 1}>
                Next
        </button>
        </>
    )
}
export default Control;