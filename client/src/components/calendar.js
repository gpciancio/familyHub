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
        <iframe src={iframeSrc} title="Calendar" width="800" height="600" ></iframe>
      </div>
    )
  }
}

export default Calendar;
