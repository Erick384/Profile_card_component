import "./App.css";
import Bottom from "./Component/Bottom/Bottom.Jsx";
import Footer from "./Component/Footer";

function App() {
  return (
    <body>
      <div className="container">
        <div className="top"></div>
        <div className="profilePic"></div>
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
      <Footer />
    </body>
  );
}

export default App;
