import React from 'react';
import packageJSON from '../../package.json';

export default React.createClass({

  render() {
    const deps = Object.keys(packageJSON.dependencies).map((dep, i) => <li key={i}>{dep}</li>);
    const devDeps = Object.keys(packageJSON.devDependencies).map((dep, i) => <li key={i + 10}>{dep}</li>);
    return (
      <div>
        <p>This gets updated every time you navigate to the <em>About</em> page</p>
        <div>
          <h2>Powered by</h2>
          <ul>
            {[...deps, ...devDeps]}
          </ul>
        </div>
      </div>
    );
  }
});
