import React, { Component } from "react";
import axios from "axios";
import Card from "../components/Card";

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = { friends: [] };
  }
  async componentDidMount() {
    const response = await axios.get("/api/users");
    const friends = response.data;
    this.setState({ friends });
  }
  render() {
    return (
      <div className="ui link cards">
        {this.state.friends.length > 0
          ? this.state.friends.map(friend => {
              return (
                <Card
                  key={friend.id}
                  name={friend.name}
                  location={friend.location}
                  occupation={friend.occupation}
                  img={friend.image}
                />
              );
            })
          : ""}
      </div>
    );
  }
}

export default Friends;
