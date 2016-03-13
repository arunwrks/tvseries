import React from 'react';
import { Link } from 'react-router';

export default class PlayGround extends React.Component {
    
    constructor() {
        super();
        this.state = { selectedIndex: 0 };
    }
    
    saveState(index) {
        //this.setState({ selectedIndex: index });
    }
    
    render() {
        console.log("Rendering tabs with selected index " + this.state.selectedIndex);
        return (
            <div>
                <h3>Playground for other framework related stuff.</h3>
                <br/>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className={ this.state.selectedIndex == 0 ? 'nav active' : 'nav' } onClick={ (e) => { this.saveState(0); } }><a href="#A" data-toggle="tab">A</a></li>
                        <li className={ this.state.selectedIndex == 1 ? 'nav active' : 'nav' } onClick={ (e) => { this.saveState(0); } }><a href="#B" data-toggle="tab">B</a></li>
                        <li className={ this.state.selectedIndex == 2 ? 'nav active' : 'nav' } onClick={ (e) => { this.saveState(0); } }><a href="#C" data-toggle="tab">C</a></li>
                    </ul>

                    <div className="tab-content">
                        <div className={ this.state.selectedIndex == 0 ? 'tab-pane fade in active' : 'tab-pane fade' } id="A">Content inside tab A</div>
                        <div className={ this.state.selectedIndex == 1 ? 'tab-pane fade in active' : 'tab-pane fade' } id="B">Content inside tab B</div>
                        <div className={ this.state.selectedIndex == 2 ? 'tab-pane fade in active' : 'tab-pane fade' } id="C">Content inside tab C</div>
                    </div>
                </div>
            </div>
        );
    }
}