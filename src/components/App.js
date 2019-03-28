import React from 'react';
import PlaylistContainer from '../containers/PlaylistContainer'
import SonglistContainer from '../containers/SonglistContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app row callout">
        <h2 className="title">React Music Player</h2>
        <div className="columns small-6">
          <h3>Playlists</h3>
          <PlaylistContainer
            playlists={this.props.data.playlists}
          />
        </div>
        <div className="columns small-6">
        Songs <br/>
        <SonglistContainer
          songlist={this.props.data.songs}
        />
        </div>
      </div>
    );
  }
}

export default App;
