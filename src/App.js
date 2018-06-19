import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NotFound from './components/NotFound';
import Page from './components/Page';
import './App.css';
import connectApi from './config/config'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPage: ""
    }
  }

  getPhotosForPage(currentPage, title) {
    // reload when current page is different from the last page visited
    if((currentPage !== title) && title !== "Search") {
      if(title === "Home") {
        this.getRecentPhotos();
      } else {
        this.performSearch(title);
      }
    }
  }

  getRecentPhotos() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${connectApi.apiKey}&format=json&nojsoncallback=1`)
    .then(result => {
      this.setState({photos: result.data.photos.photo});
      console.log(this.state.photos);
    })
    .catch(error => {
      console.log("Error occured while fetching data from Flickr: " + error.message);
    });
  }

  performSearch(term) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${connectApi.apiKey}&text=${term}&format=json&nojsoncallback=1`)
      .then(result => {
        // console.log(result);
        this.setState({photos: result.data.photos.photo});
        console.log(this.state.photos);
      })
      .catch(error => {
        console.log("Error occured while fetching data from Flickr: " + error.message);
      });
  }

  changePageName(currentPage) {
      this.setState({currentPage});
      console.log("test");
  }

  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path='/' render={ () => <Page title="Home" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/cats' render={() => <Page title="Cats" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/dogs' render={() => <Page title="Dogs" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/computers' render={() => <Page title="Computers" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route path='/search' render={() => <Page title="Search" {...this.state}  getPhotos={(page,title) => this.getPhotosForPage(page,title)} changePageName={title => this.changePageName(title)} fetchPhotos={term => this.performSearch(term)} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
