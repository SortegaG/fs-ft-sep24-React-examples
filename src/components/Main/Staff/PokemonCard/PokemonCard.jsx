import React from "react";

const PokemonCard = ({pokemon:{name,url}}) => {
  return (
    <article>
      <h4>{name}</h4>
      <a href={url}>URL</a>
    </article>
  );
};

export default PokemonCard;
