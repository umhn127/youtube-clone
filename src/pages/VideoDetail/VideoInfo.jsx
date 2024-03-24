import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  const [expand, setExpand] = useState(false);
  //video açıklama kısmındaki yazıyı keser
  const text = expand
    ? video.description
    : video.description.slice(0, 300) + "...daha fazla";

  return (
    <div
      onClick={() => setExpand(!expand)}
      className="bg-darkgray rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2">
        <p className="font-bold">{millify(video.viewCount)} Görüntülenme</p>
        <p className="font-bold">
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <div>
        {/* açıklamayı satırlara ayırdık */}
        {text.split("\n").map((line) => (
          <span>
            {line} <br />
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoInfo;
