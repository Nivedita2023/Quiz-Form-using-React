import React from "react";


export default function Template(props){
    const [formData, setFormData] = React.useState("")

        function handleChange(event) {
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            })
        }
        function handleSubmit(event) {
            event.preventDefault()
        }
        return(
            <form onSubmit={handleSubmit}>
            <div class="fieldset-container">
            <fieldset>                
                <h3>{props.Question}</h3>
                    
                <input 
                    type="radio"
                    id="answera"
                    name="Question1Answers"
                    value="answera"
                    checked={formData.Question1Answers === "answera"}
                    onChange={handleChange}
                />
                <label htmlFor="answera">{props.optionA}</label>
                <br />
                    
                <input 
                    type="radio"
                    id="answerb"
                    name="Question1Answers"
                    value="answerb"
                    checked={formData.Question1Answers === "answerb"}
                    onChange={handleChange}
                />
                <label htmlFor="answerb">{props.optionB}</label>
                <br />
                    
                <input 
                    type="radio"
                    id="answerc"
                    name="Question1Answers"
                    value="answerc"
                    checked={formData.Question1Answers === "answerc"}
                    onChange={handleChange}
                />
                <label htmlFor="answerc">{props.optionC}</label>
                <br />
            </fieldset>
            </div>
           
            </form> 
    )     
}