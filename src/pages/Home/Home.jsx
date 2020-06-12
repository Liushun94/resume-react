import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount() {
    const options = {
      strings: [
          'aaaaaa.',
          'aaaaaa, \nbbbbbbbbbbbbbbbbbbbb.',
          'aaaaaa, \nbbbbbbbbbbbbbbbbbbbb, \nccccccccccccccccccccccccccccccccccc.',
          'aaaaaa, \nbbbbbbbbbbbbbbbbbbbb, \nccccccccccccccccccccccccccccccccccc, \ndddddddddddddddddddddddddddd.'
      ],
      typeSpeed: 50,   //打印速度
      startDelay: 300, //开始之前的延迟300毫秒
      loop: false     //是否循环
    };
    new Typed('#homeText', options);
  }

  render() {
    return (
      <div id="home">
        <span id="homeText"
            style={{whiteSpace: 'pre-wrap', lineHeight: '30px'}}
        ></span>
      </div>
    )
  }
}
