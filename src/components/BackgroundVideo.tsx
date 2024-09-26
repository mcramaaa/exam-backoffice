const BackgroundVideo: React.FC = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        playsInline
        muted
        className="object-cover w-full -z-10 h-full absolute pointer-events-none "
        src="/video/round.webm"
        //   src={`https://cdn.pixabay.com/video/2021/08/19/85590-590014592_large.mp4`}
      ></video>
    </div>
  );
};

export default BackgroundVideo;
