import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './Hobby';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      addHobby: '',
      hobbies: ['skateboarding', 'rock music']
    };
    this.likedCallback = this.likedCallback.bind(this);
    this.addHobbyCallback = this.addHobbyCallback.bind(this);
  }

  likedCallback() {
    console.log("likedCallback running");
    let liked = this.state.liked;
    liked++;
    this.setState({
      liked
    });
  }

  addHobbyCallback() {
    if (this.addHobby.value) {
      let addHobby = this.addHobby.value;
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies, addHobby];
      this.setState({
        hobbies
      }, () => {
        this.addHobby.value = '';
      });

    }
  }

  componentDidMount() {
  }

// render 是这个组件渲染的 Virtual DOM 结构
  render() {

    return (
      <div className="profile-component">
        {/* this.props就是传入的属性 */}
        <h1>我的名字叫 {this.props.name}</h1>
        <h2>我今年 {this.props.age} 岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数： {this.state.liked}</h2>
        <h2>我的爱好</h2>
        <ul>
          {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
        </ul>
        <input type="text" ref={(in2) => {
          this.addHobby = in2;
        }}/>
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    );
  }
}

Profile
  .propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Profile;

