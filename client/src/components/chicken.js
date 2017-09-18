import React from 'react';

class Chicken extends React.Component {

  render() {
    return (
      <a className={this.props.show ? "chicken show" : "chicken"}
      >
         <img  src="http://orig09.deviantart.net/c283/f/2014/021/5/2/chicken_caw_animation_by_captaintoog-d7338wq.gif" className="chickimg" alt="animated chicken"/>
      </a>
    )
  }
}

export default Chicken;
