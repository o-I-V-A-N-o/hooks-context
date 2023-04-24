import Fetch from './Fetch';

const Data = () => {
  return (
    <>
      <Fetch type="Data" />
      <Fetch type="Loading" />
      <Fetch type="Error" />
    </>
  );
};

export default Data;