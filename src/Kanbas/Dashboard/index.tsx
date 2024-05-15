export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" alt="react-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack Software Developer
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/nodejs.jpg" alt="node-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS2345 Node.js
            </a>
            <p className="wd-dashboard-course-title">
              Backend Development with Node.js
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" alt="python-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS3456 Python
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Python Programming
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/java.jpg" alt="java-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS4567 Java
            </a>
            <p className="wd-dashboard-course-title">
              Advanced Java Programming
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/htmlcss.jpg" alt="htmlcss-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS5678 HTML & CSS
            </a>
            <p className="wd-dashboard-course-title">
              Web Development with HTML & CSS
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/angular.jpg" alt="angular-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS6789 Angular
            </a>
            <p className="wd-dashboard-course-title">
              Frontend Development with Angular
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/sql.jpg" alt="sql-img" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/Home"
            >
              CS7890 SQL
            </a>
            <p className="wd-dashboard-course-title">
              Database Management with SQL
            </p>
            <a href="#/Kanbas/Courses/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
  );
}
