import React from 'react'

const PlaylistTile = props => {


  return(
    <div>
      <p onClick={props.clickChange}>{props.title}</p>
    </div>
  )
}

export default PlaylistTile
