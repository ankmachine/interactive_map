import React from "react";
//const my_image = require("./map.svg");
import BlrMap from "./BlrMap";
import seats from "./seats.json";
import TetherComponent from "react-tether";

const Card = props => (
  <div>
    <h3>{props.person.name}</h3>
    <h3>{props.id}</h3>
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
        name: "ankit",
        sg_seat_: "blr - 144 - lin"
      },
      {
        name: "chandra",
        sg_seat_: "blr - 006 - lin"
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
