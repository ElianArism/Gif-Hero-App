import React, { useState } from "react"
import AddCategory from "./AddCategory"
import GifGrid from "./GifGrid"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Messi"])

  return (
    <>
      <h1 className="animate__animated animate__bounceInLeft">
        <i>Gif Expert App</i>
      </h1>
      <AddCategory
        // Pueden pasarse funciones como props
        setCategories={setCategories}
      />

      <ul>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ul>
    </>
  )
}
