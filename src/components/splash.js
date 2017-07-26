import React from 'react';

class Splash extends React.Component {

  render() {

    return  this.props.showSplash ? (
    <div>
      <div className="splash_container">
        <div className="stage col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2 text-center">
          <span className="famhubtitle">Welcome to Family Hub!</span>
          <form className="form-inline">
            <div className="form-group form-group-lg emailform text-center">
              <input
                type="email"
                className="paddingright form-control form-control-lg"
                id="email"
                placeholder="Enter Family Gmail" value={this.props.defaultEmail}
                onChange={ (event) => this.props.updateEmailText(event.target.value) }
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-default btn-lg"
              onClick={this.props.saveEmail}
            >Enter
            </button>
          </form>
        </div>
        <div className="meet-the-team">
  <img id="logo" src="https://res.cloudinary.com/gus-armistead/image/upload/v1463048305/manager_3_svr2x7.png" alt="" width="70px"></img>

  <h1 className="title our-team">Our Team</h1>

  <ul className="team-container">
    <li className="team-item">

      <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0LAAAAJGViYTBhMjE4LTk4NjMtNGE0YS1iZTU2LTliNTFlNmJiYzBkNQ.jpg" alt="team member one"></img>
          <h1 className="team-name">Linda Call</h1></li>
    <li className="team-item">

      <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsGAAAAJGJkMGZmMDYzLTAwMDEtNDkxNy05YjA2LTQwNjcwNWJmMGVlMg.jpg" alt=""></img>

          <h1 className="team-name">Zach Passarelli</h1></li>
    <li className="team-item">

      <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlbAAAAJGQyZGM0OTgwLTUxYWEtNDdhNS1hNGVlLWQ1MzM0Y2VkYTZmZg.jpg" alt=""></img>

          <h1 className="team-name">Tucker Triggs</h1></li>
    <li className="team-item">
      <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzIAAAAJGY1ZTNiYWNhLTNlZWEtNDEwMy05YTNmLWJlMmE4MmM0Yzc3NQ.jpg" alt=""></img>

          <h1 className="team-name">GP Ciancio</h1>
    </li>
    </ul>
    </div>
    </div>
    </div>
    ) :
    null;
  }
}

export default Splash;
