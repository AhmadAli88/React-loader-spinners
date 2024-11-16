
import { Puff, Circles } from 'react-loader-spinner';

const MultiLoader = () => (
  <div>
    <h2>Loading Section 1</h2>
    <Puff height={80} width={80} color="#4fa94d" visible={true} ariaLabel="puff-loading" />
    <h2>Loading Section 2</h2>
    <Circles height={80} width={80} color="#ff6347" visible={true} ariaLabel="circles-loading" />
  </div>
);

export default MultiLoader;
