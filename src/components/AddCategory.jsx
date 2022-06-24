import { useState } from 'react'

export const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const inputChange = ( event ) => {
        setInputValue( event.target.value )
    }

    const inputSubmit = ( event ) => {
        event.preventDefault()
        if(inputValue.trim().length < 1 ) return;
        addCategory( inputValue )
        setInputValue("")
    }

    return(
        <form onSubmit={inputSubmit}>
            <input 
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ inputChange }
            />
        </form>
            
       
    )
}