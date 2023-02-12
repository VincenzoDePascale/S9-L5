import { Component } from "react";

import Section1 from "./Section1Component";
import Section2 from "./Section2Component";
import Section3 from "./Section3Component";

class MainComponent extends Component {
  state = {
    hP: [],
    lotr: [],
    god: [],
  };

  FetchForOne = async () => {
    try {
      const research = await fetch(
        "http://www.omdbapi.com/?apikey=d77c6814&s=harry%20potter"
      );

      if (research.ok) {
        const data = await research.json();
        this.setState({
          hP: data.Search,
        });
      } else {
        console.log("ciao");
      }
    } catch (err) {
      console.log("MORIREMO TUTTI", err);
    }
  };

  FetchForTwo = async () => {
    try {
      const research = await fetch(
        "http://www.omdbapi.com/?apikey=d77c6814&s=lord%20of%20the%20rings"
      );

      if (research.ok) {
        const data = await research.json();
        this.setState({
          lotr: data.Search,
        });
      } else {
        console.log("ciao");
      }
    } catch (err) {
      console.log("MORIREMO TUTTI", err);
    }
  };

  FetchForThree = async () => {
    try {
      const research = await fetch(
        "http://www.omdbapi.com/?apikey=d77c6814&s=god"
      );

      if (research.ok) {
        const data = await research.json();
        this.setState({
          god: data.Search,
        });
      } else {
        console.log("ciao");
      }
    } catch (err) {
      console.log("MORIREMO TUTTI", err);
    }
  };

  componentDidMount = () => {
    this.FetchForOne();
    this.FetchForTwo();
    this.FetchForThree();
  };

  render() {
    return (
      <>
        <Section1 data={this.state.hP} />
        <Section2 data={this.state.lotr} />
        <Section3 data={this.state.god} />
      </>
    );
  }
}

export default MainComponent;
