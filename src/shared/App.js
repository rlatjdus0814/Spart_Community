import './App.css';
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PosrList from '../pages/PostList';
import PostList from '../pages/PostList';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
