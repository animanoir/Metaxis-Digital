import React, { useEffect } from 'react';

const TelegramWidget = ({ post }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.dataset.telegramPost = post;
    script.dataset.width = '100%';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [post]);

  return <div id={`telegram-post-${post}`}></div>;
};

export default TelegramWidget;
