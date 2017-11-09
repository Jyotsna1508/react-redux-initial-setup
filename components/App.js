import React, {Prototypes} from 'react';
class App extends React.component{
  render(){
    return(
      <div className="container">
        <p>Header</p>
        {this.props.children}

      </div>
    );
  }
}
App.prototype = {
  children: Prototypes.object.isRequired
};
export  default App;
