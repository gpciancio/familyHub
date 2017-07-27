import React from 'react';

class Weather extends React.Component {

  render() {
    return (
      <div
        onClick={(e)=> {
          console.log("in click");
          e.preventDefault();
          window.location = 'https://battletanks4000.herokuapp.com';
          }
        }
      >
        <iframe src="https://www.powr.io/plugins/weather/view?unique_label=6ab3252a_1500745897&external_type=iframe" title="Weather">
        </iframe>
      </div>
    )
  }
}

export default Weather;
