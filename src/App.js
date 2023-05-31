import React from "react"
import data from "./data"
import Template from "./template"

export default function App(){
    const Section = data.map(item => {
    return(
            <Template 
            key = {item.id}
            {...item}    
            />
        )
     })

     return (
        <div>
            <section>
                {Section}
            </section>
        </div>
     )
}


