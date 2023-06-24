import Login from "../../blocks/login/login";

import "./landing.css";

function Creedentials({login}) {
  return (
    <div className="landing-container">
      <Login login={login} />
    </div>
  );
}

export default Creedentials;
