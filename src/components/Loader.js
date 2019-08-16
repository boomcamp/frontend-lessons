import React from 'react';

const Loader = () => {
  const [dots, setDots] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length < 5) {
        setDots(dots.concat('.'));
      }
      else {
        setDots('');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [dots]);

  return <h1>Loading{dots}</h1>;
};

export default Loader;
