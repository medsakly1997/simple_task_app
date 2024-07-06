import React from "react";

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="column">
          <h1>To-Do</h1>
          <div className="task-list">
            <div className="task-item">
              <span className="handle"></span>
              <h1>Clean out my garbage</h1>
            </div>

            <div className="task-item">
              <span className="handle"></span>
              <h1>Study for exams</h1>
            </div>

            <div className="task-item">
              <span className="handle"></span>
              <h1>Wash my car</h1>
            </div>
          </div>
        </div>

        <div className="column">
          <h1>In Progress</h1>
        </div>

        <div className="column">
          <h1>Done</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
