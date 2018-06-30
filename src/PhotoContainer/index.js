import React, { Component } from 'react';
import axios from 'axios'
import SubContainer from './SubContainer';
import Loading from '../Loading';
import Navigation from '../Navigation';
import SearchForm from '../SearchForm';
import apiKey from '../config/config';

class PhotoContainer extends Component {


  constructor() {
    super();
    this.state = {
      pendingSearch: "",
      searchedTerm: "",
      numberToDisplay: 24, 
      isLoading: true,
      searchItems: []

    }

  }

 
    componentDidMount() {
      this.searchFlickr(this.props.topic);
    }

   
    handleSearchInput = e => {
      this.setState({ pendingSearch: e.target.value });
      
    }

   
    handleSearchSubmit = e => {
      e.preventDefault();
      this.searchFlickr(this.state.pendingSearch);
      this.setState({ pendingSearch: "" });
    };

    searchFlickr = (searchQuery) => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=${this.state.numberToDisplay}&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          searchItems: response.data.photos.photo,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
      this.setState({searchedTerm: searchQuery});
    }

    handleNav = e => {
      this.searchFlickr(e.target.textContent);
    };
render() {
  return (
    <div className="container">
     <SearchForm pendingSearch = {this.state.pendingSearch}
                  handleSearchInput = {this.handleSearchInput}
                  handleSearchSubmit = {this.handleSearchSubmit}/>           
     <Navigation handleNav = {this.handleNav} />
     {(this.state.isLoading)
        ?  <Loading />
        :  <SubContainer searchItems = {this.state.searchItems} searchedTerm = {this.state.searchedTerm} />
      }
    </div>
  )
}
}

export default PhotoContainer;
