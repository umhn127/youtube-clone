import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";

//context temeli
export const VideoContext = createContext();

//sağlayıcı bileşeni
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const type = selectedCategory.type;
    //type menu ise f durdur
    if (type === "menu") return;

    //her isteğin başında
    //yüklenmeyi true ya çek > ardından
    //.catch((err) => setError(err.message)) hata olursa hatayı
    //.finally(() => setIsLoading(false)); yüklenme biterse de yüklenmeyi false çek
    setIsLoading(true);

    // ayrı ayrı istek atmak yerine url tanımladık
    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";
    // api isteği at ve durumu state aktar
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
