import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [category, setCategory] = useState( [] )

  const addNewCategory = ( value ) => {
    if (category.includes(value)) return;
    setCategory( [value, ...category] )
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <h3>Welcome to my app, go ahead and search something you are interested in and the app will fetch data from Giphy and show you the result!</h3>
      <AddCategory addCategory = { addNewCategory }/>

        { category.map( category => {
            return <GifGrid key = {category} category = {category}/>
          })
        }
    </>


  )
}