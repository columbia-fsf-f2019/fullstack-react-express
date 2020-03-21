import React from 'react';
import axios from 'axios';

import FriendCard from '../components/FriendCard';
import Flex from '../components/Flex';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }

  async componentDidMount() {
    const response = await axios.get('/api/friends');
    const { data: friends } = response;
    this.setState({ friends });
  }

  render() {
    return (
      <Flex style={{ maxWidth: '900px' }}>
        {this.state.friends.map(({ id, name, image, occupation, location }) => (
          <FriendCard
            key={id}
            name={name}
            img={image}
            occupation={occupation}
            location={location}
          />
        ))}
      </Flex>
    );
  }
}

export default Friends;
