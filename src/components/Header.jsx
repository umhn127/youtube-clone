import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  //form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    //aratılacak metni al
    const text = e.target[0].value;

    //metin boşsa f durdur
    if (text.trim() === "") {
      return;
    }
    //kullanıcıyı arama sonuçları sayfasına yönlendir
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="/youtube.png" alt="logo" />
        <h1 className="text-2xl hidden md:block">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex  border border-gray-400 rounded-2xl overflow-hidden"
      >
        <input
          placeholder="Ara.."
          className=" bg-black text-white px-5 py-2 outline-none border border-transparent rounded-l-[20px] focus:border-blue-500"
          type="text"
        />
        <button className="border-l px-4 text-2xl bg-zinc-800 ">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
