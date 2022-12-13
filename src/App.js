import Navbar from "./components/navbar/Navbar";
import classes from "./App.module.css";
import Rightside from "./components/rightside/Rightside";
import LeftSide from "./components/leftside/LeftSide";

function App() {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.bottomSide}>
        <LeftSide />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
