import React from 'react';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=familyhub123%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FDenver" title="Calendar" scrolling="no"></iframe>
    )
  }

}

export default Calendar;
