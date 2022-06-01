import { ReactComponent as LogoDark } from "../assets/images/logos/amplelogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      {/* <LogoDark /> */}
      <img src="https://waveprotocol2021.4v8iau1rta20e.ap-south-1.cs.amazonlightsail.com/static/img/shapes/mainlogo.jpg" height="30%" width="30%" alt="" />
      <span style={{margin:"5%", color:"black", textDecoration:"none" }}>Waveprotocol</span>
    </Link>
  );
};

export default Logo;
