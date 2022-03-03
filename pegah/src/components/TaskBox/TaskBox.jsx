import TaskItem from "../TaskItem/TaskItem"
import "./TaskBox.css"

const TaskBox = () => {
  return (
    <section className="content">
          <div className="content__header content__box">
            <div>USER ID</div>
            <div>TITLE</div>
            <div>COMPLETED</div>
          </div>
          <div className="content__body ">
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </div>
          <div className="content__footer"></div>

        </section>
  )
}

export default TaskBox