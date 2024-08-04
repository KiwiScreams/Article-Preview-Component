import image from "./assets/images/drawers.jpg";
import avatar from "./assets/images/avatar-michelle.jpg";
import arrow from "./assets/images/icon-share.svg";
function App() {
  return (
    <>
      <div className="container">
        <div className="image-container">
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="text-container">
          <h3>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h3>
          <p className="text">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="profile-container">
            <div className="profile">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="profile-info">
                <p>Michelle Appleton</p>
                <p>28 Jun 2020</p>
              </div>
            </div>
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
