import { Link } from 'react-router-dom';
import * as data from '../Data';

export default function LabCards() {
  const labs = data.labs;
  return (
    <div id="landing-lab-cards" className="row">
      <div className="row row-cols-1 rpw-cols-md-5 g-4">
        {labs.map((lab, index) => (
          <div
            key={lab._id}
            className="landing-lab col"
            style={{ width: '300px' }}
          >
            <Link
              key={`${lab._id}`}
              to={`/Labs/${lab._id}`}
              className="text-decoration-none"
            >
              <div
                key={index}
                className="card rounded-3 overflow-hidden"
                style={{ width: '18rem' }}
              >
                <img
                  src={`images/${lab.image}`}
                  height={160}
                  alt="labImage"
                  className="card-img-top"
                />
                <div className="card-body">
                  <span
                    className="landing-card-link"
                    style={{
                      textDecoration: 'none',
                      color: '#4A4A4A',
                      fontWeight: 'bold',
                    }}
                  >
                    {lab.title}
                  </span>
                  <p
                    className="landing-lab-title card-text"
                    style={{ maxHeight: 100, overflow: 'hidden' }}
                  >
                    {lab.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
