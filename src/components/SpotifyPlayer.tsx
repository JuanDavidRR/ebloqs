import { Spotify } from 'react-spotify-embed';

const SpotifyPlayer = () => {

  return (
    <div className='fixed right-0 bottom-2 z-50'>
      <Spotify wide link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />
    </div>
  )
}

export default SpotifyPlayer;
