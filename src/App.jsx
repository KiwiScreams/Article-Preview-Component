import avatar from "./assets/images/avatar-michelle.jpg";
import arrow from "./assets/images/icon-share.svg";
import Nav from "./Nav";
function App() {
  return (
    <>
      <div className="container">
        <div className="image-container"></div>
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
            <div className="rel">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill="#6E8098"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
