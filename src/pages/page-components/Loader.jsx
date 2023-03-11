import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="bg-[#141414] w-[100vw] h-[100vh] z-10 flex items-center justify-center">
      <TailSpin
        height="40"
        width="100"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
