import { Routes, Route, Link } from 'react-router-dom';
import AddPathParameters from './AddPathParameters';
export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h2 className="semi-bold">Path Parameters</h2>
      <Link key={'1 + 2'} to="/Labs/Lab3/add/1/2">
        1 + 2
      </Link>{' '}
      <br />
      <Link key={'3 + 4'} to="/Labs/Lab3/add/3/4">
        3 + 4
      </Link>
      <Routes>
        <Route path="add/:a/:b" element={<AddPathParameters />} />
      </Routes>
    </div>
  );
}
