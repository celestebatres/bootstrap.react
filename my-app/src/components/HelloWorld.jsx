import React from 'react'
import { Fragment } from 'react'

function HelloWorld(props) {
    const hello = <h1>Hello {props.name}</h1>
    return (
        <Fragment>
            {hello}
        </Fragment>
    )
}

export default HelloWorld
