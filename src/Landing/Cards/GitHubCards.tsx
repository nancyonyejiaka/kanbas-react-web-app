import * as data from '../Data';

export default function GitHubCards() {
  const github = data.github;
  return (
    <div id="landing-lab-cards" className="row">
      <div className="row row-cols-1 rpw-cols-md-5 g-4">
        {github.map((link, index) => (
          <div
            key={link._id}
            className="landing-lab col"
            style={{ width: '300px' }}
          >
            <a
              key={`${link._id}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div
                key={index}
                className="card rounded-3 overflow-hidden"
                style={{ width: '18rem' }}
              >
                <img
                  src={`images/${link.image}`}
                  height={160}
                  alt="githubImage"
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
                    {link.title}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
