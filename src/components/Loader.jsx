import { PiUserCircleFill } from "react-icons/pi";

const Loader = () => {
  //loader kart için dizi oluştur
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4];

  //her bir loader kart için diziyi dön (map ile)
  return arr.map(() => (
    <div className=" p-4  rounded shadow animate-pulse md:p-6 ">
      <div className="flex items-center justify-center h-48 mb-4  rounded bg-gray-700" />

      <div className="flex items-center mt-4 gap-3">
        <PiUserCircleFill className="text-5xl text-gray-700" />

        <div>
          <div className="h-2.5 rounded-full bg-gray-700 w-44" />
          <div className="w-16 h-2 rounded-full bg-gray-700 my-3"></div>
          <div className="flex gap-2">
            <div className="w-28 h-2 rounded-full bg-gray-700" />
            <div className="w-28 h-2 rounded-full bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
