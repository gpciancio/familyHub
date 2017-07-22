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
      <iframe src="https://www.powr.io/plugins/weather/view?unique_label=6ab3252a_1500745897&external_type=iframe" title="Weather"></iframe>
    </div>
    )}
}

export default Weather;
