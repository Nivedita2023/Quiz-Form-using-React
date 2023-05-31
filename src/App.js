import React from "react"


export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
        }
    )
    
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
    
    return (
        <form onSubmit={handleSubmit}>
            <div class="Detail-container">
            <h3>QUIZ QUESTIONS RELATED TO JS AND REACT, ENJOY!!😃😃</h3>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <br/>
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <br />
            </div>
            
            <div class="fieldset-container">
            
            <fieldset>
                <h3>Which type of JavaScript language is ___</h3>
                
                <input 
                    type="radio"
                    id="answera"
                    name="Question1Answers"
                    value="answera"
                    checked={formData.Question1Answers === "answera"}
                    onChange={handleChange}
                />
                <label htmlFor="answera">Object-Oriented</label>
                <br />
                
                <input 
                    type="radio"
                    id="answerb"
                    name="Question1Answers"
                    value="answerb"
                    checked={formData.Question1Answers === "answerb"}
                    onChange={handleChange}
                />
                <label htmlFor="answerb">Object-Based</label>
                <br />
                
                <input 
                    type="radio"
                    id="answerc"
                    name="Question1Answers"
                    value="answerc"
                    checked={formData.Question1Answers === "answerc"}
                    onChange={handleChange}
                />
                <label htmlFor="answerc">Assembly-language</label>
                <br />
            </fieldset>
            <fieldset>
                <h3>Which one of the following also known as Conditional Expression:</h3>
                <input 
                type="radio"
                id="1answera"
                name="Question2Answers"
                value="1answera"
                checked={formData.Question2Answers === "1answera"}
                onChange={handleChange}
                />
                <label htmlFor="1answera">Alternative to if-else</label><br/>

                <input 
                type="radio"
                id="1answerb"
                name="Question2Answers"
                value="1answerb"
                checked={formData.Question2Answers === "1answerb"}
                onChange={handleChange}
                />
                <label htmlFor="1answerb">If-then-else statement</label><br/>

                <input 
                type="radio"
                id="1answerc"
                name="Question2Answers"
                value="1answerc"
                checked={formData.Question2Answers === "1answerc"}
                onChange={handleChange}
                />
                <label htmlFor="1answerc">immediate if</label><br/>

            </fieldset>

            <fieldset>
                <h3>In JavaScript, what is a block of statement?</h3>
                <input 
                type="radio"
                id="2answera"
                name="Question3Answers"
                value="2answera"
                checked={formData.Question3Answers === "2answera"}
                onChange={handleChange}
                />
                <label htmlFor="2answera">block that combines a number of statements into a single compound statement</label><br/>

                <input 
                type="radio"
                id="2answerb"
                name="Question3Answers"
                value="2answerb"
                checked={formData.Question3Answers === "2answerb"}
                onChange={handleChange}
                />
                <label htmlFor="2answerb">Conditional block</label><br/>

                <input 
                type="radio"
                id="2answerc"
                name="Question3Answers"
                value="2answerc"
                checked={formData.Question3Answers === "2answerc"}
                onChange={handleChange}
                />
                <label htmlFor="2answerc">block that contains a single statement</label><br/>

            </fieldset>

            <fieldset>
                <h3>Which of the following command is used to install create-react-app?</h3>
                <input 
                type="radio"
                id="3answera"
                name="Question4Answers"
                value="3answera"
                checked={formData.Question4Answers === "3answera"}
                onChange={handleChange}
                />
                <label htmlFor="3answera">npm install -g create-react-app</label><br/>

                <input 
                type="radio"
                id="3answerb"
                name="Question4Answers"
                value="3answerb"
                checked={formData.Question4Answers === "3answerb"}
                onChange={handleChange}
                />
                <label htmlFor="3answerb">npm install create-react-app</label><br/>

                <input 
                type="radio"
                id="3answerc"
                name="Question4Answers"
                value="3answerc"
                checked={formData.Question4Answers === "3answerc"}
                onChange={handleChange}
                />
                <label htmlFor="3answerc">npm install -f create-react-app</label><br/>

            </fieldset>

            <fieldset>
                <h3>What of the following is used in React.js to increase performance?</h3>
                <input 
                type="radio"
                id="4answera"
                name="Question5Answers"
                value="4answera"
                checked={formData.Question5Answers === "4answera"}
                onChange={handleChange}
                />
                <label htmlFor="4answera">Original DOM</label><br/>

                <input 
                type="radio"
                id="4answerb"
                name="Question5Answers"
                value="4answerb"
                checked={formData.Question5Answers === "4answerb"}
                onChange={handleChange}
                />
                <label htmlFor="4answerb">Virtual DOM</label><br/>

                <input 
                type="radio"
                id="4answerc"
                name="Question5Answers"
                value="4answerc"
                checked={formData.Question5Answers === "4answerc"}
                onChange={handleChange}
                />
                <label htmlFor="4answerc">Both A and B.</label><br/>

            </fieldset>
            </div>
            <br />

            <button>Submit</button>
        </form>
    )
}



