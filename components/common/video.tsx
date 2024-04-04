import React from 'react';
interface Props {
    embedId:any
}

const YouTubeEmbed:React.FC<Props> = ({ embedId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 mx-4">
      <iframe
        className="w-full min-h-[300px]"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="Apex holding blogs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/fT5NoRSHkRI?si=SkU0jxyOHt8Ct2Zj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}