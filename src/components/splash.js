import React from 'react';

class Splash extends React.Component {

  render() {

    return (this.props.showSplash
      ? (this.props.showLearnMore
        ? (
          <div className="totalcontain">
            <div className="splash_container">
              <div className="stage2 col-lg-4 col-lg-offset-4 col-xs-8 col-xs-offset-2 text-center">
                <div className='secondhalf'>
                  <div className='row'>
                    <h3 className="title aboutfam">About FamilyHub</h3>
                    <iframe title="demo" width="300" height="167" src="https://www.youtube.com/embed/UGpDEiuGVzI" frameBorder="0" allowFullScreen></iframe>
                    <div className='appcopy'>
                      <span className="copytext">
                        Family Hub is your one stop for organizing family events and keeping your household running smoothly. Features include:
                        <br></br>
                      </span>

                      <ul className="featurelist">
                        <li>integration with google calendar</li>
                        <li>a whiteboard</li>
                        <li>a to do list and grocery list</li>
                        <li>a weather app</li>
                        <li>a messenging component</li>
                      </ul>

                    </div>
                    <div className="meet-the-team">

                      <h3 className="title our-team">Our Team</h3>

                      <ul className="team-container">
                        <li className="team-item">

                          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0LAAAAJGViYTBhMjE4LTk4NjMtNGE0YS1iZTU2LTliNTFlNmJiYzBkNQ.jpg" alt="team member one"></img>
                          <h1 className="team-name">Linda Call</h1>
                        </li>
                        <li className="team-item">

                          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsGAAAAJGJkMGZmMDYzLTAwMDEtNDkxNy05YjA2LTQwNjcwNWJmMGVlMg.jpg" alt=""></img>

                          <h1 className="team-name">Zach Passarelli</h1>
                        </li>
                        <li className="team-item">

                          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAlbAAAAJGQyZGM0OTgwLTUxYWEtNDdhNS1hNGVlLWQ1MzM0Y2VkYTZmZg.jpg" alt=""></img>

                          <h1 className="team-name">Tucker Triggs</h1>
                        </li>
                        <li className="team-item">
                          <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzIAAAAJGY1ZTNiYWNhLTNlZWEtNDEwMy05YTNmLWJlMmE4MmM0Yzc3NQ.jpg" alt=""></img>

                          <h1 className="team-name">GP Ciancio</h1>
                        </li>
                      </ul>
                    </div>
                    <div className="splashbuttons">
                      <a className="splashbutton backtologin" onClick={this.props.goToHome}>Back to Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className="totalcontain">
            <div className="splash_container">
              <div className="stage col-lg-4 col-lg-offset-4 col-xs-8 col-xs-offset-2 text-center">
                <span className="famhubtitle">Family Hub</span>
                <div className='introtextlg introtext'>Google Calendar integration requires your {"family's"} Gmail account:</div>
                <form className="form-inline">
                  <div className="form-group form-group-lg emailform text-center">
                    <input type="email" className="paddingright form-control form-control-lg" id="email" placeholder="Enter Family Gmail" value={this.props.defaultEmail} onChange={(event) => this.props.updateEmailText(event.target.value)}></input>
                  </div>
                  <div className='introtext'>*Google calendar must be public to work*</div>
                  <div>
                    <button type="submit" className="bigbutton btn btn-default btn-lg" onClick={this.props.saveEmail}>Enter
                    </button>
                  </div>
                  <div className="splashbuttons">
                    <a className="splashbutton skip" onClick={this.props.goToApp}>Skip to App >></a>
                    <a className="splashbutton learnmore" onClick={this.props.goToLearnMore}>Learn More</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      )
      : null
      )
      }
    }

    export default Splash;
