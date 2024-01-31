import { Fireworks } from '@fireworks-js/react';

const Firework = () => {
  return (
    <Fireworks
      options={{ opacity: 0.5 }}
      style={{
        height: '100%',
        top: 0,
        left: 0,
        background: '#fff'
      }}
    />
  );
};

export { Firework };
