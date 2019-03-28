import React, { Component } from 'react'
import SongTile from '../components/SongTile'

class SonglistContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectId: null
    }
    this.selectNewSong = this.selectNewSong.bind(this)
  }

  selectNewSong(songId) {
    if(this.state.selectId === songId) {
      this.setState({
        selectId: null
      })
    } else {
      this.setState({
        selectId: songId
      })
    }
  }

  render() {
    let songs = this.props.songlist.map(song => {
      let highlighted;
      if (this.state.selectId === song.id) {
        highlighted = "selected"
      }

      let selectSong = () => {
        this.selectNewSong(song.id)
      }
      return(
        <SongTile
          key={song.id}
          song={song}
          clickChange={selectSong}
          displayClass={highlighted}
        />
      )
    })

    return(
      <div>
        {songs}
      </div>
    )
  }
}


export default SonglistContainer
