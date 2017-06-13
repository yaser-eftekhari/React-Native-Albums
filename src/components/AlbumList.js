import React, { Component } from 'react';
import { View } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(responseJson => this.setState({ albums: responseJson }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;
