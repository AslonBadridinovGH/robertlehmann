import './App.css';

import girl from "./fotos/girl.jpg"
import velo from "./fotos/velo.jpg"
import casette from "./fotos/casette.jpg"
import byt from "./fotos/byt.jpg"
import car from "./fotos/car.jpg"
import uhr from "./fotos/uhr.jpg"
import cat from "./fotos/cat.jpg"
import melon from "./fotos/melon.jpg"
import kanne from "./fotos/kanne.jpg"
import dots from "./fotos/dots.webp"
import face from "./fotos/faceb.webp"
import tw from "./fotos/tw.webp"
import pi from "./fotos/pi.webp"


function App() {
  return (

    <div className="App">
        
        <section className = "robertSection" >

              <div className="robert">Robert  Lehmann</div>
              <div className="head">
                 <p>Home</p>
                 <p>About me</p>
                 <p>Contact</p>
              </div>
 
        </section>

        <section className="fotosSection">
         
         <div className="row">

                <div className="fotosDiv">           
            <img src={girl} alt="girl" />
            <img src={byt} alt="byt"/>
            <img src={car} alt="car"/>

                </div>
      
                <div className="fotosDiv">
               
            <img src={velo} alt="velo" />
            <img src={uhr} alt="uhr"/>
            <img src={cat} alt="cat"/>

                </div>
      
                <div className="fotosDiv">        
            <img src={casette} alt="casette" />
            <img src={kanne} alt="kanne" />
            <img src={melon} alt="melon"/>             
                </div>     
         </div>

        </section>

        <footer>
            <div className="container">
                <div className="impressum">
                    <p>Impressum</p>
                    <p>Datenschutz</p>
                    <p>AGB</p>
                </div>
                <div>
                    <p>© 2035 Robert Lehmann. Erstellt mit Wix.com.</p>
                </div>
                <div className = "icons">
                    <a href="https://www.facebook.com/wix"><img className="fff" src={face} alt="face" /></a>
                    <a href="https://www.flickr.com/photos/wixcom/page1/"><img src={dots} alt="dots" /></a>
                    <a href="https://twitter.com/wix"><img src={tw} alt="tw" /></a>
                    <a href="https://www.pinterest.de/ideas/"><img src={pi} alt="pi" /></a>
                </div>
            </div>
        </footer>

    </div>

  );
}

export default App;
