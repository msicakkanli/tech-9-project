import React from 'react';
import  {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import PhotoContainer from './PhotoContainer';
import ErrorPage from './ErrorPage';


const App = () => (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer topic= 'recent' searchOn = 'false'/>} />
            <Route exact path="/cats" render={ () =><PhotoContainer topic= 'cats' searchOn = 'false'/>  } />
            <Route exact path="/dogs" render={ () =><PhotoContainer topic= 'dogs' searchOn = 'false'/>  } />
            <Route exact path="/computer" render={ () =><PhotoContainer topic= 'computer' searchOn = 'false'/>  } />
            <Route  path="/search" render={ () =><PhotoContainer topic= 'search' searchOn = 'true'/>  } />
            <Route component={ErrorPage}/>
          </Switch>
      </BrowserRouter>
);

export default App;
