import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/features/Features";
import "./Home.css";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;