import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  const [category, setCategory] = useState( [] )

  const addNewCategory = ( value ) => {
    if (category.includes(value)) return;
    setCategory( [value, ...category])
  }

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory addCategory = { addNewCategory }/>

        { category.map( category => {
            return <GifGrid key = {category} category = {category}/>
          })
        }
    </>


  )
}