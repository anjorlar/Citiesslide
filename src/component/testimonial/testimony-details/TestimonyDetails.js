import React from 'react';
import Control from './control/Control.jsx'

const TestimonyDetails = (props) => {
    return (
        <>
            <h1> {props.det.name}</h1>
            <h3> {props.det.role}</h3>
            <p> {props.det.testimony}</p>
            <div>
                <Control
                    next={props.next}
                    prev={props.prev}
                    currentIndex={props.currentIndex}
                    Textdetails={props.Textdetails}
                    det={props.det}
                />
            </div>

        </>
    )
}

export default TestimonyDetails;