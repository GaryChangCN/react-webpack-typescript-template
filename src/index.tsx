import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './test.less';
class Test extends React.Component<{},null> {
  render() {
    return (
      <div className="App">
        types
      </div>
    );
  }
}

ReactDOM.render(<Test />,document.getElementById("app"));