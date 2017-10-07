import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['a', 'b', 'c'],
      activeIndex: -1
    };
  }

  render() {
    const {list, activeIndex} = this.state;
    const list = list.map(
      (item, index) => {
        const cls = (index === activeIndex ? 'active' : '');
        return (
          <li
            key={index}
            className={cls}
            onClick=> {() => this.activate(index)}>
          </li>
        )
      }
    );
    return (<ul>{list}</ul>);
  }
}