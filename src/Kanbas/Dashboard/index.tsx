import './index.css';

export default function Dashboard() {
  return (
    <div>
      <h1 id="wd-dashboard-title" className="display-3">
        Dashboard
      </h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 rpw-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/reactjs.jpg" alt="react-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS1234 ReactJS</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.56274.202440
                  </span>
                  <span className="wd-dashboard-course-term">
                    Summer Full 2024 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack Software Development
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/nodejs.jpg" alt="node-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS2345 Node.js</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.43645.202430
                  </span>
                  <span className="wd-dashboard-course-term">
                    Summer Full 2024 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Backend Development with Node.js
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/python.jpg" alt="python-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS3456 Python</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.46383.202410
                  </span>
                  <span className="wd-dashboard-course-term">
                    Spring 2024 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Introduction to Python Programming
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/java.jpg" alt="java-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS4567 Java</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.46383.202420
                  </span>
                  <span className="wd-dashboard-course-term">
                    Spring 2024 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced Java Programming
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/htmlcss.jpg" alt="htmlcss-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS5678 HTML & CSS</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.36274.202430
                  </span>
                  <span className="wd-dashboard-course-term">
                    Fall 2023 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Web Development with HTML & CSS
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/angular.jpg" alt="angular-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS6789 Angular</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.57395.202440
                  </span>
                  <span className="wd-dashboard-course-term">
                    Fall 2023 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Frontend Development with Angular
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: '260px' }}>
            <div className="card">
              <img src="/images/sql.jpg" alt="sql-img" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/Home"
                  style={{
                    textDecoration: 'none',
                    color: 'navy',
                    fontWeight: 'bold',
                  }}
                >
                  <span className="wd-course-title">CS7890 SQL</span>
                  <span className="wd-dashboard-course-section">
                    CS1234.34628.202410
                  </span>
                  <span className="wd-dashboard-course-term">
                    Spring 2023 Semester Full Term
                  </span>
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Database Management with SQL
                </p>
                <a href="#/Kanbas/Courses/Home" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
