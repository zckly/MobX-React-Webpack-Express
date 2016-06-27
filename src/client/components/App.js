import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Hello from App Component!</h1>
        {this.props.children}
      </div>
    );
  }
}