import Info from "../Info/Info";
import Profile from "../Profile/Profile";
import "./App.scss";

const App = () => {
  return (
    <div className="flexWrap">
      <Profile />
      <Info />
    </div>
  );
};

export default App;
