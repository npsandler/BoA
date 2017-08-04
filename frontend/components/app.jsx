import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';





const App = () => (
  <div>
    <h1>Sports Magazine Settings</h1>

    <section>
      <button onclick="openModal(name)">Edit Name</button>
    </section>

    <section>
      <button onclick="openModal(address)">Edit Address</button>
    </section>

    <section>
      <button onclick="openModal(teams)">Update Teams</button>
    </section>
  </div>
);

export default App;
