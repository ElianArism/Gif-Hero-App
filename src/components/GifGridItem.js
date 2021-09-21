import React from "react"

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__pulse">
      <picture>
        <img src={url} alt={title} />
      </picture>
      <p>{title}</p>
    </div>
  )
}
