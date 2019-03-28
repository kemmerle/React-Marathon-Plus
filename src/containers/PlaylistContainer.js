import React, { Component } from "react"
import PlaylistTile from "../components/PlaylistTile"

class PlaylistContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let playlists = this.props.playlists.map(playlist => {

      let highlighted;
      // if (this.state.selectId === playlist.id) {
      //   highlighted = "selected"
      // }

      let clickChange = () => {
        this.props.handleClickChange(playlist.id)
      }
      return (
        <PlaylistTile
          key={playlist.id}
          id={playlist.id}
          title={playlist.name}
          song={playlist.songs}
          clickChange={clickChange}
          displayClass={highlighted}
        />
      )
    })

    return (
      <div>{playlists}</div>
    )
  }
}

export default PlaylistContainer
