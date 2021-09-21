export const getGifs = (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=8rj1Z0ObHhAAc1swK451kQkAp5lPUqLx`

  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await (await fetch(url)).json()

      const gifs = data.map(({ id, title, images }) => {
        return {
          id,
          title,
          url: images?.downsized_medium.url,
        }
      })

      resolve(gifs)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
