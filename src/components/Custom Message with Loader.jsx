
import { TailSpin } from 'react-loader-spinner';

const LoaderWithMessage = () => (
  <div style={{ textAlign: 'center' }}>
    <TailSpin height={80} width={80} color="#4fa94d" visible={true} ariaLabel="tail-spin-loading" />
    <p>Loading, please wait...</p>
  </div>
);

export default LoaderWithMessage;
