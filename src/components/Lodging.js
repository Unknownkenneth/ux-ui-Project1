import './css/Lodging.css';

import Vac from './img/Vacant.png'
import Hotel from './img/hotel.png'
function Lodging() {
  return (
    <div className='main'>
      <div className='header'> 
        <h1>Lodging</h1>
        <h3>See what the best place to rest!</h3>
      </div>
      <div className="boxes">
        <div className="Vacant">
          <img src={Vac} alt="Vacant room" />
          <p>
            In the Third District, guests can use this room for a quick pit stop.
            Or if you are looking for a room to have in case of traveling again. 
            This room is a suitable location for renting for long periods.        

          </p>
        </div>
        <div className="hotel">
          <img src={Hotel} alt="Hotel" />
          <p>
          Located In the Second district, This Hotel is completley different from any Hotel. This has the themes of the elements. 
          Wind, Fire and Water(under constrution). The rooms are set to match the theme, such as the Fire room would be in all red and Wind would be in green
         
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Lodging;
