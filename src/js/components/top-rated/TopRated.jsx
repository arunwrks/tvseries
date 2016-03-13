import React from 'react';
import { Link } from 'react-router';
import Request from 'superagent';
import Movie from '../movie/Movie';

export default class TopRated extends React.Component {
    
    constructor() {
        super();
        this.state = { movies: [] };
    }
    
    componentWillMount() {
        //Called the first time the component is loaded right before the component is added to the page
        let url = `http://api.themoviedb.org/3/tv/top_rated?api_key=0a85bfad58bfced1b7e4d5209aedd35b`;
        Request.get(url).then((response) => {
            this.setState({ 
                movies: response.body.results,
                total: response.body.total_results
            });
        });
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
    
    render() { 
        //console.log("rendring search page");
        var movies = this.state.movies.filter((movie) => { return movie.poster_path != null }).map((movie) => {
            return <Movie movie={ movie }  key={movie.id}/>
        });
        return (
            <div>
                <h4 className="underline">Top rated TV shows:</h4> <br/>
                <div className="row">
                    { movies }
                </div>
            </div>
        );
    }
}