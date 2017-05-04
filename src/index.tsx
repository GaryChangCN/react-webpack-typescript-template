import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './test.less';
class Test extends React.Component<any,any> {
  render() {
    return (
      <div className="App">
        react with typescript build by webpack successfully
      </div>
    );
  }
}

ReactDOM.render(<Test />,document.getElementById("app"));
