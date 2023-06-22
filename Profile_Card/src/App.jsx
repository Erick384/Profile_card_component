import React from "react";
import "./App.css";
import Bottom from "./Component/Bottom/Bottom.Jsx";
import Footer from "./Component/Footer";
import victorImage from "./images/image-victor.jpg";

function App() {
  return (
    <body>
      <div className="container">
        <div className="top"></div>
        <div className="bottom-Content">
          <img src={victorImage} alt="victor" className="imgVictor" />
          <div className="content">
            <div>
              <h2>Victor Crest</h2>
              <span>26</span>
            </div>
            <div>
              <span>London</span>
            </div>
          </div>
          <Bottom />
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default App;
