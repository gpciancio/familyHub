import React from 'react';

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      src: 'https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=familyhub123%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FDenver'
    };
  }


  render() {
    return (
      <iframe src={this.state.src} width="800" height="600" frameborder="0" scrolling="no"></iframe>
    )
  }

}

export default Calendar;
