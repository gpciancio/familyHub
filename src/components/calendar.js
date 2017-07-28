import React from 'react';

class Calendar extends React.Component {

  render() {
    var mailinput = this.props.email.replace("@", "%40");
    var iframeSrc =
    "https://calendar.google.com/calendar/embed?showPrint=0&src=" + mailinput;

    return (
      <div>
        <button
          className="backhome btn btn-default"
          onClick={this.props.goToHome}
        >
          Logout
        </button>

        <div className="famhubtitlemain text-center">
          <span className="fhletter">F</span>
          <span className="fhletter">a</span>
          <span className="fhletter">m</span>
          <span className="fhletter">i</span>
          <span className="fhletter">l</span>
          <span className="fhletter">y
          </span>
          <span className="fhletter">H</span>
          <span className="fhletter">u</span>
          <span className="fhletter">b</span>
        </div>
        <iframe src={iframeSrc} title="Calendar" width="800" height="600" ></iframe>
      </div>
    )
  }
}

export default Calendar;
