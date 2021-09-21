import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  })

  // Se utiliza para ejecutar codigo siguiendo ciertas condiciones
  // Al dejarlo las dependencias como un arr vacio
  // se esta estableciendo que esas lineas solo pueden ejecutarse una vez
  useEffect(() => {
    ;(async () => {
      setstate({
        data: await getGifs(category),
        loading: false,
      })
    })()
  }, [category]) // si la categoria cambia vuelve a ejecutar el effect

  return state
}
