import React from 'react'

const Title  = ({header, body}) =>(
    <div className="Places-Advantures">
        <div className="services">
            <h2>{header}</h2>
            <hr className="border secondary" />
            <h4>{body} </h4>
        </div>
    </div>
)
        export default Title;