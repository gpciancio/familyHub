import React from 'react';
import Immutable from 'immutable';

class Whiteboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lines: new Immutable.List(),
      isDrawing: false,
      start: false

    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchDown = this.handleTouchDown.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp);
    document.addEventListener("touchend", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
    document.removeEventListener("touchend", this.handleMouseUp);
  }

  handleTouchDown(touchEvent) {
    touchEvent.preventDefault();

    const point = this.relativeCoordinatesForEvent(touchEvent,'touch');

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true,
      start: true
    }));

  }

  handleTouchMove(touchEvent) {
    touchEvent.preventDefault();

    const point = this.relativeCoordinatesForEvent(touchEvent,'touch');

    this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    }));
  }

  handleMouseDown(mouseEvent) {
    if (mouseEvent.button !== 0) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent,'click');

    this.setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true,
      start: true
    }));
  }

  handleMouseMove(mouseEvent) {
    if (!this.state.isDrawing) {
      return;
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent,'click');

    this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    }));
  }

  handleMouseUp() {
    this.setState({ isDrawing: false });
  }

  clear() {
    this.setState({ lines: new Immutable.List() });
  }

  relativeCoordinatesForEvent(event,type) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect();
    if(type==="click"){
      return new Immutable.Map({
        x: event.clientX - boundingRect.left - 20,
        y: event.clientY - boundingRect.top - 20,
      });
    } else if (type==="touch"){
      return new Immutable.Map({
        x: event.touches[0].clientX - boundingRect.left - 20,
        y: event.touches[0].clientY - boundingRect.top - 20,
      });
    }
  }

  render() {
    return (
      <div
        className="drawArea"
        ref="drawArea"
        onTouchStart={this.handleTouchDown}
        onTouchMove={this.handleTouchMove}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      >
        {!this.state.start ? (<div className="fam">Welcome to Family Hub!!</div>):null}
        <Drawing lines={this.state.lines} />
        <button className="clearButton" onClick={()=>this.clear()} type="button">

          <img src="http://worldartsme.com/images/rubber-clipart-1.jpg" alt="Clear" className="eraser"></img>
        </button>
      </div>
    );
  }
}

function Drawing({ lines }) {
  return (
    <svg className="drawing">
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

function DrawingLine({ line }) {
  const pathData = "M " +
    line
      .map(p => {
        return `${p.get('x')} ${p.get('y')}`;
      })
      .join(" L ");

  return <path className="path" d={pathData} />;
}

export default Whiteboard;
