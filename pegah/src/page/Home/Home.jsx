import "./Home.css";
const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="sidebar">
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
        </div>
        <div className="content">content</div>
      </div>
    </main>
  );
};

export default Home;
