import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import ReactReduxExample from '../containers/ReactReduxExample';
import ReduxReader from '../containers/ReduxReader';
import '../../custom.less';

const App = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
        <br />
      </div>
      <ReactReduxExample />
      <ReduxReader />
      </div>
  )
}
export default App;
