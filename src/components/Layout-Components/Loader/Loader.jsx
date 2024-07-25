import { Player } from "@lottiefiles/react-lottie-player";
import loader from "@assets/lottie-file/loader.json";

export default function Loader() {
  return (
    <div className="loader">
      <Player
        loop
        autoplay
        src={loader}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
}
