import { Link } from 'react-router-dom';
import * as data from './Data';

export default function Landing() {
  const labs = data.labs;
  return (
    <div className="h-100">
      <h1> Nancy Onyejiaka </h1>
      <h2> CS 5610: Web Development, SEC 02, Summer Full 2024 </h2>
      <h3>
        <a
          id="wd-github"
          href="https://github.com/nancyonyejiaka/kanbas-react-web-app"
        >
          Kanbas Repository
        </a>
      </h3>

      {labs.map((lab: any) => (
        <div className="card" style={{ width: '18rem' }}>
          <img src="images/stacked.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{`${lab.title}`}</h5>
            <p className="card-text">{`${lab.description}`}</p>
            <Link
              id="landing-view-lab"
              key={`${lab.title}`}
              to={`${lab.url}`}
              className="btn btn-primary"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
