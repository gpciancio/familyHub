import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <iframe src="https://www.powr.io/plugins/weather/view?unique_label=6ab3252a_1500745897&external_type=iframe" width="100%" height="600" frameborder="50"></iframe>
    </div>
    )}
}

export default Weather;
