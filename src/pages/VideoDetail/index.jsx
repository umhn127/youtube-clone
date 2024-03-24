import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import ChannelInfo from "./ChannelInfo";
import VideoCard from "../../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  //1 arama parametrelerine erişim için kurulum yap
  const [searchParams] = useSearchParams();

  //2 url den v isimli parametreye eriş
  const id = searchParams.get("v");

  //3 id i bilinen videonun bilgilerini api den al
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);
  return (
    <div className="detail-page h-screen overflow-auto">
      {/* video içeriği */}
      <div>
        {/* video you-tube dan çektik */}
        <div className="h-[50vh] lg:h-[60vh] rounded-md overflow-hidden">
          <ReactPlayer
            controls
            light
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {/* video içeriği apiden çektik */}

        {!video && <p>Yükleniyor</p>}
        {video && (
          <>
            {/* başlık */}
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>

            {/* kanal bilgileri */}
            <ChannelInfo video={video} />

            {/* video bilgileri */}
            <VideoInfo video={video} />

            {/* yorumlar / comments */}
            <Comments data={comments} />
          </>
        )}
      </div>
      {/* alakalı videolar */}
      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item) =>
            item.type === "video" && (
              <VideoCard key={item.videoId} video={item} isRow={true} />
            )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
