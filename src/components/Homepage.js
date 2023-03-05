

import './css/Homepage.css';

import Ttown from './img/Entrance.png'
function Homepage() {
  return (
    <div className="home">
                                                       
      <h1 id="wordE" style={{fontFamily: "Kingdom_Hearts_Font"}}>Welcome to Traverse Town</h1>
      <img  class="resize" src={Ttown} alt="Traverse Town " />
    </div>
  );
}

export default Homepage;
