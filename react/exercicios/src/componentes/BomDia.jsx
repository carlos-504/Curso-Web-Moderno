import React, { Fragment } from 'react'

export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

/*
obs: Jeito mais usual
export default props =>
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>
*/ 