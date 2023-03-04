import './css/shops.css';
import CafeB from './img/Cafe.png'
import Acc from './img/Accessories.png'
function Restaurants() {
  return (
    <div className="content">
    
    <div className='header'> 
    <h1>Restaurants</h1>
    <h3> See what's there to offer as a </h3>
  </div>
  <div className="boxes">
    <div className="cafe">
      <img src={CafeB} alt=" Cafe and bar" />
      <p>
        Located In the first district, The first world you arrive in, This shop is located to the left of the entrance 
        The cafe and bar would  be a stable place to hang with friends anytime of the day
      </p>
    </div>
    <div className="accessories ">
      <img src={Acc} alt="shops"/>
      <p>
      This Shops is located at the entrance of the first district with different rings and necklace. 
      A person can buy a protective charm for friends. It may have some defensive magic on it. 
      </p>


    </div>
    </div>
    </div>
  );
}

export default Restaurants;
