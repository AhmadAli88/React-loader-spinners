import { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';

const DataLoader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData('Data Loaded Successfully!');
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <MutatingDots height={80} width={80} color="#4fa94d" ariaLabel="mutating-dots-loading" />
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default DataLoader;
