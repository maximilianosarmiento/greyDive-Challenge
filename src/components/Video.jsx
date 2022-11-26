import React from 'react'

export default function Video({video, idVideo}) {
  return (
    <div>
      <iframe title={idVideo} src={video} frameBorder="0"></iframe>
    </div>
  )
}
