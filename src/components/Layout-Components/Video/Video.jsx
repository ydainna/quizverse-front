export default function Video({ src, autoPlay, controls }) {
  return (
    <video controls={controls} width="100%" autoPlay={autoPlay}>
      <source src={src} type="video/mp4" />
      <track kind="captions" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
