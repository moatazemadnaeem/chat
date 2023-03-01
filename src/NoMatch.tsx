import { Link } from "react-router-dom";

function NoMatch() {
    return (
      <div className="nomatch">
        <div className="nomatch_content">
          <h2>Nothing to see here!</h2>
          <Link className="nomatch_link" to="/">Go to the home page</Link>
        </div>
      </div>
    );
}
export default NoMatch