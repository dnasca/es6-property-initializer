class ClickCounter extends React.Component {

  state = { count: 0 }
  
  handleClick = () => {
    this.setState(oldState => {
      return {
        count: oldState.count + 1
      };
    });
  }

  render() {
    return (<div>
      <p>
         {this.state.count}
      </p>
      <button onClick={this.handleClick}>Click Me!</button>
    </div>)
  }

}
