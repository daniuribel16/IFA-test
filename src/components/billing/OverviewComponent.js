import React, { Component } from 'react';


export default class Overview extends Component {

    render() {
        return (
            <div className="container info-container">
                <div className="col-sm-12 billing-title-section">
                    <h4><b>OVERVIEW</b></h4>
                </div>
                <div className="row billing-row">
                    <div className="col-sm-6 billing-section info-section">
                        <div className="row">
                            <div className="col-xs-6 info-labels">Status</div>
                            <div className="col-xs-6 float-right info-labels">
                                <span className={this.props.overviewInfo.status === 'Active' ? 
                                                "pull-right font-weight-bold active-status": 
                                                "pull-right font-weight-bold inactive-status"}>
                                    <i className={this.props.overviewInfo.status === 'Active' ? 
                                                "fas fa-check": "fas fa-times"}></i>
                                                {` ${this.props.overviewInfo.status}`}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Method</div>
                            <div className="col-xs-6 float-right info-labels">
                                <span className="pull-right font-weight-bold">{this.props.overviewInfo.method}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Capacity</div>
                            <div className="col-xs-6 float-right info-labels">
                                <span className="pull-right font-weight-bold">{this.props.overviewInfo.capacity}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Drayage</div>
                            <div className="col-xs-6 info-labels">
                                <span className="pull-right font-weight-bold">{this.props.overviewInfo.drayage}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 billing-section info-section">
                        <div className="row">
                                <div className="col-sm-6 info-labels">Incoterms</div>
                                <div className="col-sm-6 float-right info-labels">
                                    <span className="pull-right font-weight-bold">{this.props.overviewInfo.incoterms}</span>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom:'1em'}}>
                                <div className="col-sm-6 info-labels">Service Options</div>
                                <div className="col-sm-6 float-right info-labels">
                                    <span className="pull-right font-weight-bold">{this.props.overviewInfo.serviceOptions}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 info-labels">Hazardous or forbidden commodities</div>
                                <div className="col-sm-6 float-right info-labels">
                                    <span className="pull-right font-weight-bold">{this.props.overviewInfo.hazardousCommodities}</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

}