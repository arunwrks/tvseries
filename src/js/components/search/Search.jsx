import React from 'react';
import { Link } from 'react-router';
import Request from 'superagent';
import Movie from '../movie/Movie';

export default class Search extends React.Component {
    
    constructor() {
        super();
        this.state = { movies: [] };
    }
    
    componentWillMount() {
        //Called the first time the component is loaded right before the component is added to the page
    } 
    
    componentDidMount() {
        //Called after component has been rendered on the page
    }
    
    componentWillReceiveProps(nextProps) {
        //Called when props provided to the component are changed
    }
    
     
    componentWillUpdate(nextProps, nextState) {
        //Called when props or state will change
    }
    
     
    componentWillUnMount() {
        //Called when component is removed
    }
    
    updateSearch() {
        const term = this.refs.query.value;
        //console.log(`Searching for ${term}`);
        if(term.length > 1) this.search(term);
    }
    
    search(query = "") {
        let url = `http://api.themoviedb.org/3/search/tv?api_key=0a85bfad58bfced1b7e4d5209aedd35b&query=${query}`;
        Request.get(url).then((response) => {
            //console.log(`Results: ${response}`);
            this.setState({ 
                movies: response.body.results,
                total: response.body.total_results
            });
        });
    }
    
    render() { 
        //console.log("rendring search page");
        var movies = this.state.movies.filter((movie) => { return movie.poster_path != null }).map((movie) => {
            return <Movie movie={ movie }  key={movie.id}/>
        });
        return (
            <div>
                <input className="form-control" ref="query" type="text" placeholder="Search by TV show title or name" onChange={ (e) => { this.updateSearch(); } }/>
                <br/>
                <h4>{ this.state.total ? `Results: ${this.state.total}` : '' }</h4>
                <div className="row">
                    { movies }
                </div>
            </div>
        );
    }
}