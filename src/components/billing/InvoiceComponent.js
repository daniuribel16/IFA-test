import React, { Component } from 'react';


export default class Invoice extends Component {

    render() {
        return (
            <div className="container info-container">
                <div className="col-sm-12 billing-title-section">
                    <h4><b>INVOICE - REVISION</b></h4>
                </div>
                <div className="row billing-row">
                    <div className="col-sm-3 billing-section info-section">
                        <div className="row">
                            <div className="col-xs-6 info-labels">Invoice #</div>
                            <div className="col-xs-6 float-right info-labels"><span className="pull-right font-weight-bold">{this.props.invoiceInfo.invoiceCode}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Date</div>
                            <div className="col-xs-6 float-right info-labels"><span className="pull-right font-weight-bold">{this.props.invoiceInfo.date}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Due Date</div>
                            <div className="col-xs-6 float-right info-labels"><span className="pull-right font-weight-bold">{this.props.invoiceInfo.dueDate}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 info-labels">Terms</div>
                            <div className="col-xs-6 info-labels"><span className="pull-right font-weight-bold">{this.props.invoiceInfo.terms}</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6 billing-section">
                        <h4><b>Bill to</b></h4>
                        <div className="row">
                            <div className="col-sm-12 bill-to-label">
                                <h1>{this.props.invoiceInfo.billTo}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 billing-section">
                        <h4><b>New Balance upon Re-booking</b></h4>
                        <span className="invoice-new-balance">${this.props.invoiceInfo.balance}</span>
                    </div>
                </div>
            </div>
        );
    }

}