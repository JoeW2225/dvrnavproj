import { useState } from 'react';

export function MessageForm() {
    const [formValues, setFormValues] = useState ({
        name: "",
        favouriteColour: "",
        favouriteAnimal: "",
    }) //inital values


    function handleSubmit(event) {
        event.preventDefault();
        console.log("The form values are", formValues)
    }

    function handleInputChange(event) {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type='text'
                id='name'
                name='name'
                placeholder='Your name here'
                value={formValues.name}
                onChange={handleInputChange}
            />
            <label htmlFor='favouriteColour'>Favourite Colour</label>
            <input
                type='text'
                id='favouriteColour'
                name='favouriteColour'
                placeholder='Enter you colour'
                value={formValues.favouriteColour}
                onChange={handleInputChange}
            />
            <label htmlFor='favouriteAnimal'>Favourite Animal</label>
            <input
                type='text'
                id='favouriteAnimal'
                name='favouriteAnimal'
                placeholder='Enter Animal name'
                value={formValues.favouriteAnimal}
                onChange={handleInputChange}
            />
            <p>Current value is: {formValues.name}</p>
            <p>Current value is: {formValues.favouriteColour}</p>
            <p>Current value is: {formValues.favouriteAnimal}</p>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default MessageForm;