import TaskBox from "../../components/TaskBox/TaskBox";
import "./Home.css";
const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="sidebar">
          <div className="sidebar__filter">
            <p>Filter</p>
            <div className="sidebar__search">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="completed">
              <p>COMPLETED</p>
              
            </div>
            <div className="user__id">
              <p>SELECT USER ID</p>
              
            </div>
          </div>
        </section>

        <TaskBox />

      </div>
    </main>
  );
};

export default Home;
