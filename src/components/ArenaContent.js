import React, { useEffect, useState } from 'react';
import * as arenaContentStyles from '../css/ArenaContent.module.css';

const getTime = () => {
  const date = new Date();
  const currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()].map((a) =>
    a < 10 ? '0' + a : a
  );
  return currentTime.join(' : ');
};

const ArenaContent = () => {
  const [arenaContent, setArenaContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hovering, setHovering] = useState(false);
  const [time, setTime] = useState(getTime());

  const handleMouseOver = () => {
    setHovering(true);
  };
  const handleMouseOut = () => {
    setHovering(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.are.na/v2/channels/metaxis-digital/contents?per=19?sort=position&direction=desc`
        );
        const data = await response.json();
        const { contents } = data;
        setArenaContent(contents);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <p className={arenaContentStyles.loading}>~·:| ⡷⠂ cargando inspiración ⠐⢾ |:·~</p>;
  }

  if (error) {
    return <p>Hubo un error al cargar la inspiración.</p>;
  }

  return (
    <div id="inspiración" className={arenaContentStyles.container}>
      <h2 className={arenaContentStyles.title}>
        <a
          href="https://www.are.na/degrees-degrees-bullet-period/metaxis-digital"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleMouseOver}
          onBlur={handleMouseOut}
        >
          {hovering ? '++++++++++' : '( are.na)'}
        </a>
        <p className={arenaContentStyles.time}>{time}</p>
      </h2>
      {arenaContent.map((content) => {
        return (
          <div key={content.id}>
            {content.image ? (
              <a
                href={content.source?.url ? content.source.url : content.image.original.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Enlace a inspiración"
              >
                <img
                  className={arenaContentStyles.image}
                  src={content.image.square.url}
                  alt={content.title}
                />
              </a>
            ) : (
              <p className={arenaContentStyles.title}>{content.title}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArenaContent;
