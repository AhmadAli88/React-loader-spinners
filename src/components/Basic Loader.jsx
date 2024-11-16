
import { Oval } from 'react-loader-spinner';

const BasicLoader = () => (
  <div>
    <Oval
      height={80}
      width={80}
      color="#4fa94d"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default BasicLoader;
