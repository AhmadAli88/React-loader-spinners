
import { Audio } from 'react-loader-spinner';

const CustomSizeLoader = () => (
  <div>
    <Audio
      height={50}
      width={200}
      color="#4fa94d"
      visible={true}
      ariaLabel="audio-loading"
    />
  </div>
);

export default CustomSizeLoader;
