import { useState } from 'react';
import { Rings } from 'react-loader-spinner';

const DynamicColorLoader = () => {
  const [color, setColor] = useState('#0000ff');

  return (
    <div>
      <Rings
        height={80}
        width={80}
        color={color}
        visible={true}
        ariaLabel="rings-loading"
      />
      <button onClick={() => setColor('#ff0000')}>Change to Red</button>
      <button onClick={() => setColor('#00ff00')}>Change to Green</button>
    </div>
  );
};

export default DynamicColorLoader;
