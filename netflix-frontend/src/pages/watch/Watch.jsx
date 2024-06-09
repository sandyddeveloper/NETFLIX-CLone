import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.css";
import trailer from '../../assets/AVENGERS-ENDGAME_trailer.mkv';

export default function Watch() {
  return (
    <div className="watch">
      <div className="back" role="button" aria-label="Go back to Home">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
       src={trailer}/>
    </div>
  );
}
