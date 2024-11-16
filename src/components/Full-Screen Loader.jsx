
import { ThreeDots } from 'react-loader-spinner';
//Display a loader that covers the entire screen.
const FullScreenLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ThreeDots
      height="80"
      width="80"
      color="#4fa94d"
      visible={true}
      ariaLabel="three-dots-loading"
    />
  </div>
);

export default FullScreenLoader;
