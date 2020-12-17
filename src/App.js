import React from "react";
import NewsList from "./NewsList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      loading: false,
      searchValue: '',
    };
  this.getSearchValue = this.getSearchValue.bind(this)
  this.getSearch = this.getSearch.bind(this)
  }
  componentDidMount() {
    console.log(process.env.REACT_APP_API_KEY)
     this.setState({ loading: true });
    let key = `${process.env.REACT_APP_API_KEY}`;
    fetch(
      `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${key}`
    )
    .then(resp => resp.json())
    .then((data) =>{
      this.setState({ newsData: data.news, loading: false });
      console.log('here')
    })
  }

  
getNews(country){

  this.setState({ loading: true });
    let key = `${process.env.REACT_APP_API_KEY}`;
    fetch(
      `https://api.currentsapi.services/v1/search?country=${country}&language=en&apiKey=${key}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ newsData: data.news, loading: false });
      });
}
getSearchValue(e){
e.preventDefault()
this.setState({
  searchValue : e.target.value,
})
}
 
getSearch(){
  this.setState({ loading: true });
  let key = `${process.env.REACT_APP_API_KEY}`;
fetch(
  `https://api.currentsapi.services/v1/search?keywords=${this.state.searchValue}&language=en&apiKey=${key}`)
  .then(resp => resp.json())
  .then((data)=>{
    console.log(data)
    document.querySelector('.searchTopic').value = ""
    this.setState({ newsData: data.news, loading: false });
  })
}

  render() {
   
    return (
      <div className="App">
        <h1>News</h1>
        <input type = "text" placeholder = "search stories" className = "searchTopic" onChange={this.getSearchValue}/>
        <button onClick = {this.getSearch}>Enter</button><br/>
        <button onClick={() => this.getNews('NG')}>Nigeria news</button>
        <button onClick = {()=> this.getNews('CN')}>Canada news</button>
        <button onClick={() => this.getNews('US')}>United States news</button>
        <button onClick = {()=> this.getNews('GH')}>Ghana news</button>
        {this.state.loading? <p>Loading...</p> :  <NewsList allNews={this.state.newsData} /> }
       
      </div>
    );
  }
}

export default App;
