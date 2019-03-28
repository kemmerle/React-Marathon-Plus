import React from 'react'

const SongTile = props => {
  return(
    <p className={props.displayClass} onClick={props.clickChange}>{props.song.name}</p>
  )
}

export default SongTile
