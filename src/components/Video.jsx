import React from 'react'

export default function Video({video, idVideo}) {
  return (
    <div className='videoContainer container'>
      <iframe className='video' title={idVideo} src={video} frameBorder="0"></iframe>
    </div>
  )
}
