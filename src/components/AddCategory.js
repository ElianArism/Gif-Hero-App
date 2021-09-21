import { useState } from "react"
import PropTypes from "prop-types"

const AddCategory = ({ setCategories, categories }) => {
  // se define un state para el input
  const [inputVal, setInputVal] = useState("")

  // esta funcion setea el valor del input cada vez que es llamada
  const handleInputWhenChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputVal.trim().length > 2) {
      setCategories((oldCategories) => [inputVal, ...oldCategories])
      setInputVal("")
    }
  }

  return (
    <form className="form-add-category" onSubmit={handleSubmit}>
      {/* 
        value={inputVal} renderiza el valor de esa variable 
        onChange={ fn } es obligatorio colocarlo para manejar el estado del input y obtener su inf
      */}
      <input
        type="text"
        placeholder="Add category..."
        value={inputVal}
        onChange={handleInputWhenChange}
      />
      <button>Agregar</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory
