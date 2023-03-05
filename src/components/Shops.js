import './css/shops.css';
import CafeB from './img/Cafe.png'
import Acc from './img/Suits.png'
function Restaurants() {
  return (
    <div className="shop">
    
    <div className='header'> 
    <h1>Shops</h1>
    <h3> See what's there to offer. </h3>
  </div>
  <div className="boxes">
    <div className="cafe">
      <img src={CafeB} alt=" Cafe and bar" />
      <p class="shops">
        Located In the first district, The first world you arrive in, This shop is located to the left of the entrance 
        The cafe and bar would  be a stable place to hang with friends anytime of the day
      </p>
    </div>
    <div className="accessories ">
      <img src={Acc} alt="shops"/>
      <p class="shops">
      This Store is located in the Second District, and if your style is suits and dresses this store is for you.
      We have the best of the best in all worlds. So please enjoy going fancy on the appeal


      </p>


    </div>
    </div>
    </div>
  );
}

export default Restaurants;
