import React from 'react';
import PlaylistContainer from '../containers/PlaylistContainer'
import SonglistContainer from '../containers/SonglistContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaylistId: null
    }
    this.handleClickChange = this.handleClickChange.bind(this)
  }

  handleClickChange(id) {
    this.setState({
      selectedPlaylistId: id
    })
  }

  render() {
    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="columns small-6">
          <h3>Playlists</h3>
          <PlaylistContainer
            playlists={this.props.data.playlists}
            handleClickChange={this.handleClickChange}
          />
        </div>
        <div className="columns small-6">
        <h3> Songs </h3>
        <SonglistContainer
          songlist={this.props.data.songs}
        />
        </div>
      </div>
    );
  }
}

export default App;
