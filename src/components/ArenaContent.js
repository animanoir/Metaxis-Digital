import React, { useEffect, useState } from 'react';
import * as arenaContentStyles from '../css/ArenaContent.module.css';

const ArenaContent = () => {
  const [arenaContent, setArenaContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.are.na/v2/channels/dimension-cybernesis/contents?per=23?sort=position&direction=desc`)
      .then(response => response.json())
      .then(data => {
        const { contents } = data
        setArenaContent(contents)
        setIsLoading(false)
      }
    );
  },[])

  if(isLoading){
    return <p className={arenaContentStyles.loading}>Cargando...</p>
  }

  return (
    <div className={arenaContentStyles.container}>
      <h2 className={arenaContentStyles.title} style={{fontSize: "4rem"}}>Inspiración:</h2>
      {
        arenaContent.map(content => {
          return (
            <div key={content.id}>
            {
              content.image
              ? <a href={content.image.original.url} target="_blank" rel="noreferrer">
                  <img className={arenaContentStyles.image} src={content.image.original.url} alt={content.title} />
                </a>
              : <p className={arenaContentStyles.title}>{content.title}</p>
            }
            </div>
          )})
      }
    </div>
  );
}

export default ArenaContent
