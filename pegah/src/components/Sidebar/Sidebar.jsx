import "./Sidebar.css"
const Sidebar = () => {
  return (
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
  )
}

export default Sidebar