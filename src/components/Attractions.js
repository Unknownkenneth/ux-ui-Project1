import './css/Attractions.css';
import Magic from'./img/Magic.png'
import Gizmo from './img/Gizmo.png'
function Attractions() {
  return (
    <div className="Attract">
      <div className='header'> 
        <h1>Attraction</h1>
        <h3>See what's the hype about!</h3>
      </div>
      <div className="boxes">
        <div className="Gizmo">
          <img src={Gizmo} alt="Church" />
          <p class="at">
          In the Second District, we have a gizmo shop. On the outside, it looks like a church. 
          But that's where you're wrong, inside the building is a tour of all the gadgets that help run this city. 
          From the clocks to the beautiful light shows. 
          It has a nice historical presence that can really help us appreciate the fine things in this town.
          </p>
        </div>
        <div className="Mag">
          <img src={Magic} alt="Wizards home" />
          <p class="at">
          Located In the Third district, This place teaches everyone how to use magic. The great wizard Merlin
          teaches different spells at different levels. Such as Fira, Fire, Firaga etc.
          
         
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Attractions;
