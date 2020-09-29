import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';

class  App extends Component {
  render (){
    return (
      <div className="App">
        <Layout className='Layout'>
          <h2>Test layout</h2>
        </Layout>
      </div>
    );
  }
}

export default App;
