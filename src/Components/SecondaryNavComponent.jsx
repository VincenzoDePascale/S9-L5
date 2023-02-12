import { Button } from "react-bootstrap";

const SecondaryNavComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="dropdown ml-4 mt-1">
            <Button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </Button>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item text-white bg-dark" href="alt">
                Comedy
              </a>
              <a className="dropdown-item text-white bg-dark" href="alt">
                Drama
              </a>
              <a className="dropdown-item text-white bg-dark" href="alt">
                Thriller
              </a>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
    </>
  );
};

export default SecondaryNavComponent;
