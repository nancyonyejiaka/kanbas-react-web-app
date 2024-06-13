import LabCards from './Cards/LabCards';
import KanbasCard from './Cards/KanbasCard';
import GitHubCards from './Cards/GitHubCards';

export default function Landing() {
  return (
    <div className="h-100">
      <h1> Nancy Onyejiaka </h1>
      <h2> CS 5610: Web Development, SEC 02, Summer Full 2024 </h2>

      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-labs-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-labs"
            type="button"
            role="tab"
            aria-controls="pills-labs"
            aria-selected="true"
          >
            Labs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-kanbas-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-kanbas"
            type="button"
            role="tab"
            aria-controls="pills-kanbas"
            aria-selected="false"
          >
            Kanbas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-github-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-github"
            type="button"
            role="tab"
            aria-controls="pills-github"
            aria-selected="false"
          >
            Github Links
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-labs"
          role="tabpanel"
          aria-labelledby="pills-labs-tab"
        >
          <LabCards />
        </div>
        <div
          className="tab-pane fade"
          id="pills-kanbas"
          role="tabpanel"
          aria-labelledby="pills-kanbas-tab"
        >
          <KanbasCard />
        </div>
        <div
          className="tab-pane fade"
          id="pills-github"
          role="tabpanel"
          aria-labelledby="pills-github-tab"
        >
          <GitHubCards />
        </div>
      </div>
    </div>
  );
}
