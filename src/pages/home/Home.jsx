import Sidebar from "../../components/Sidebar/Sidebar";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <div className="homeChildOne">
        <Sidebar />
      </div>
      <div className="homeChildTwo">
        <FeaturedInfo />
      </div>
    </div>
  );
};

export default Home;
