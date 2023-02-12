import { Image } from "react-bootstrap";
import { Component } from "react";

class Section1Component extends Component {
  render() {
    return (
      <>
        <h4>Harry Potter</h4>
        {
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
            {this.props.data.slice(4).map((a) => {
              return (
                <div className="col mb-2 px-1">
                  <Image
                    key={a + "imdbID"}
                    className="img-fluid"
                    src={a.Poster}
                    alt={"movie picture"}
                  />
                </div>
              );
            })}
          </div>
        }
      </>
    );
  }
}

export default Section1Component;
