import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  //oynatma özelliği state i
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      //kullanıcı karta tıkladığında watch ile videodetaile yönlendirip
      //"?v=${video.videoId} ile ilgili kartın detayına gider"
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : " "} cursor-pointer`}
    >
      {/* resim alanı */}
      <div>
        <img
          className=" rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
        />
      </div>

      {/* video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="c-pic w-14 h-14 rounded-full"
          src={video.channelThumbnail && video.channelThumbnail[0].url}
          alt="logo"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span className="text">Görüntülenme</span>
            </p>
            &#183;
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
