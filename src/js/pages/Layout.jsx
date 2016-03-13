import React from 'react';
import { Link } from 'react-router';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
    
    render() {
        const { location } = this.props;
        return (
            <div>
                <Header location={ location }/>
                <div className="container app-body">
                    { this.props.children }
                </div>
            </div>
        );
    }
}