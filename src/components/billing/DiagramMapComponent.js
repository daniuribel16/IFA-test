import React, { Component } from 'react';
import Map from '../utilities/mapComponent';
import diagram from '../../assets/images/diagram.PNG';

export default class DiagramMap extends Component {

    state = {
        isDiagram: true
    };

    clickPill = (isDiagram) => {
        this.setState({
            isDiagram: isDiagram,
        })
    }

    render = () => {
        return (
            <div className="container diagram-map-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="diagram-title">Text</h4>
                        <ul className="nav pills pull-right">
                            <li className={this.state.isDiagram ? 'active' : ''}>
                                <a onClick={() => this.clickPill(true)}>Diagram</a>
                            </li>
                            <li className={!this.state.isDiagram ? 'active' : ''}>
                                <a onClick={() => this.clickPill(false)}>Map</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container info-container">
                    <div className="col-sm-12 billing-section">
                        {this.state.isDiagram ?
                            (<img src={diagram} className="diagram-image" alt="diagram" />) :
                            (<Map location={this.props.location} />)}
                    </div>

                </div>
            </div>
        );
    }

}