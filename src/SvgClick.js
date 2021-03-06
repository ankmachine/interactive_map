import React from "react";
//const my_image = require("./map.svg");
import BlrMap from "./BlrMap";
import seats from "./seats.json";
import TetherComponent from "react-tether";

class Avatar extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      errored: false
    };
  }
  render() {
    return (
      <div>
        <div style={{ position: "absolute" }}>
          <svg
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 900 900"
            preserveAspectRatio="xMinYMin meet"
          />
        </div>
      </div>
    );
  }
}

const Card = props => (
  <div>
    <Avatar person={props.person} />
    <h3>{props.person.name}</h3>
  </div>
);
class Desk extends React.Component {
  constructor() {
    super();
    this.state = {
      showCard: false
    };
  }
  render() {
    console.log("desk prop");
    console.log(this.props);
    const { person, showDetailOnHover, showDetail, ...rest } = this.props;
    return (
      // <div> hello </div>
      <TetherComponent
        attachment="bottom center"
        constraint={[
          {
            to: "scrollParent",
            attachment: "together"
          }
        ]}
      >
        <path
          onMouseOver={() => this.setState({ showCard: !this.state.showCard })}
          onMouseOut={() => this.setState({ showCard: !this.state.showCard })}
          {...rest}
        />
        {this.state.showCard ? (
          <div>
            <Card hover={true} person={person} id={this.props.id} />
          </div>
        ) : null}
      </TetherComponent>
    );
  }
}

class SvgClick extends React.Component {
  constructor() {
    super();
    this.state = {
      crew: [],
      crewFiltered: [],
      crewIsFiltered: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    var result = [
      {
        name: "user1",
        sg_seat_: "seat - 001"
      },
      {
        name: "user2",
        sg_seat_: "seat - 002"
      }
    ];
    this.setState({ crew: result });
  };

  render() {
    return (
      <div className="map-wrapper">
        <BlrMap>
          {seats.map((seat, i) => (
            <Desk
              key={i}
              d={seat.d}
              id={seat.id}
              person={this.state.crew.find(
                person => person.sg_seat_ === seat.id
              )}
              showDetail={true}
              showDetailOnHover={true}
            />
            // <div>hello</div>
          ))}
        </BlrMap>
      </div>
    );
  }
}

export default SvgClick;
