import { Oval } from 'react-loader-spinner';

const loadingStyles = { justifyContent: 'center', alignItems: 'center', height: '100%', margin: 'auto', padding: '50px 20px' };

const Loading = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="var(--green-color)"
      wrapperStyle={loadingStyles}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ccc"
      strokeWidth={8}
      strokeWidthSecondary={8}
    />
  );
};

export default Loading;
