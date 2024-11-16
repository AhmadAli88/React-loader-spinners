import { useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const ConditionalLoader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <BallTriangle
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="ball-triangle-loading"
        />
      ) : (
        <p>Data has been loaded!</p>
      )}
      <button onClick={() => setLoading(!loading)}>
        {loading ? 'Stop Loading' : 'Start Loading'}
      </button>
    </div>
  );
};

export default ConditionalLoader;
