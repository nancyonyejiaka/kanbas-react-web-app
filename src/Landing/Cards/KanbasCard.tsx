import { Link } from 'react-router-dom';

export default function KanbasCard() {
  return (
    <div id="landing-lab-cards" className="row">
      <div className="row row-cols-1 rpw-cols-md-5 g-4">
          <div
            key={'kanbas_card'}
            className="landing-kanbas col"
            style={{ width: '300px' }}
          >
            <Link
              key={'kanbas_card_link'}
              to={'/Kanbas'}
              className="text-decoration-none"
            >
              <div
                key={'kanbas_card_div'}
                className="card rounded-3 overflow-hidden"
                style={{ width: '18rem' }}
              >
                <img
                  src={`images/kanbas.png`}
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
                    Kanbas
                  </span>
                  <p
                    className="landing-lab-title card-text"
                    style={{ maxHeight: 100, overflow: 'hidden' }}
                  >
                  </p>
                </div>
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
}
