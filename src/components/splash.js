import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="splash_container">
        <div className="stage col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2 text-center">
          <span className="famhubtitle">Welcome to Family Hub!</span>
          <form className="form-inline">
            <div className="form-group form-group-lg emailform text-center">
              <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter Family Gmail"></input>
            </div>
            <button type="submit" className="btn btn-default btn-lg">Enter</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Splash;
