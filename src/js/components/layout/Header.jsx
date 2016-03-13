import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = { navigated: true };
    }
    
    navigate() {
        const navigated = !this.state.navigated;
        this.setState({ navigated });
    }
    
    render() {
        const { location } = this.props;
        //console.log(location);
        const homeClass = location.pathname === "/" ? "active" : "";
        const searchClass = location.pathname.match(/^\/search/) ? "active" : "";
        const popularClass = location.pathname.match(/^\/popular/) ? "active" : "";
        const topRatedClass = location.pathname.match(/^\/top-rated/) ? "active" : "";
        const onTheAirTodayClass = location.pathname.match(/^\/on-the-air-today/) ? "active" : "";
        const airingTodayClass = location.pathname.match(/^\/airing-today/) ? "active" : "";
        const playgroundClass = location.pathname.match(/^\/playg-round/) ? "active" : "";
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                  <div className="navbar-collapse" id="app-header">
                    <ul className="nav navbar-nav">
                      <li className={homeClass}>
                        <IndexLink to="/" onClick={this.navigate.bind(this)}>Home</IndexLink>
                      </li>
                      <li className={searchClass}>
                        <Link to="search" onClick={this.navigate.bind(this)}>Search</Link>
                      </li>
                      <li className={popularClass}>
                        <Link to="popular" onClick={this.navigate.bind(this)}>Popular</Link>
                      </li>
                      <li className={topRatedClass}>
                        <Link to="top-rated" onClick={this.navigate.bind(this)}>Top rated</Link>
                      </li>
                      <li className={onTheAirTodayClass}>
                        <Link to="on-the-air-today" onClick={this.navigate.bind(this)}>On the air today</Link>
                      </li>    
                      <li className={airingTodayClass}>
                        <Link to="airing-today" onClick={this.navigate.bind(this)}>Airing today</Link>
                      </li>    
                      <li className={playgroundClass}>
                        <Link to="play-ground" onClick={this.navigate.bind(this)}>Playground</Link>
                      </li>    
                    </ul>
                  </div>
                </div>
              </nav>
        );
    }
}