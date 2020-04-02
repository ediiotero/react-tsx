import React, { useState, useEffect } from "react";
import { Album } from "./Albums";
import { RouteComponentProps } from "react-router-dom";

// extend RouteComponentProps to get access to history match and location types
export interface DetailsProps extends RouteComponentProps<{ id: string }> {}
// id: string comes from the name of the param in the route in the browser router in App tsx

const Details: React.FC<DetailsProps> = ({
  history,
  location,
  match: {
    params: { id }
  }
}) => {
  console.log(history);
  console.log(location);
  const [album, setAlbum] = useState<Album | null>(null);

  const getAlbum = async () => {
    let r = await fetch(`/api/albums/${id}`);
    let album = await r.json();
    setAlbum(album);
  };

  useEffect(() => {
    getAlbum();
  }, [id]);

  return (
    <section>
      <article>
        <p>{id}</p>
        {/* <div>{props.match.params.id}</div> */}
        <h3>{album?.title}</h3>
        <div>{album?.artist}</div>
        <button onClick={() => history.goBack()}>Go Back</button>
        {/* <button onClick={() => history.push("/go-here")}>Go Back</button> */}
      </article>
    </section>
  );
};

export default Details;
