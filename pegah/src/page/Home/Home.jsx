import Sidebar from "../../components/Sidebar/Sidebar";
import TaskBox from "../../components/TaskBox/TaskBox";
import "./Home.css";
const Home = () => {
  return (
    <main className="main">
      <div className="container">

        <Sidebar />
        <TaskBox />

      </div>
    </main>
  );
};

export default Home;
