import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface AlbumsProps {}

export interface Album {
  id: number;
  title: string;
  artist: string;
  image: string;
  _created: Date;
}

const Albums: React.FC<AlbumsProps> = props => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const getAlbums = async () => {
    let r = await fetch("api/albums");
    let albums = await r.json();
    setAlbums(albums);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <section>
      <p>Album List:</p>
      <ul>
        {albums.map(album => (
          <li key={album.id} className="">
            <h3>{album.title}</h3>
            <Link to={`/${album.id}/details`} className="">
              Get details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Albums;
