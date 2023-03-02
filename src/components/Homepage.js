

import './css/Homepage.css';

import Ttown from './img/Entrance.png'
function Homepage() {
  return (
    <div className="content">
                                                       
      <h1 id="wordE" style={{fontFamily: "Kingdom_Hearts_Font", color: " Gold"}}>Welcome to Traverse Town</h1>
      <img  class="resize" src={Ttown} alt="Traverse Town " />
    </div>
  );
}

export default Homepage;
