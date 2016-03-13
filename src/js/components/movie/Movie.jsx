import React from 'react';
import { Link } from 'react-router';

export default class Movie extends React.Component {
    
    constructor() {
        super();
        this.state = { modelVisible: false };
    }
    
    render() {
        const movie = this.props.movie;
        const poster = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
        return (
            <div key={ movie.id } className="col-xs-6 col-md-3">
                <img alt={ movie.name } src={ poster } className="poster"/>
                <h4 data-toggle="model" data-target="#myModel" className="link"> { movie.name } (Rating: { movie.vote_average }) </h4>
                <br/>
            </div>
        );
    }
}