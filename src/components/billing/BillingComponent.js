import React, { Component } from 'react';
import Invoice from './InvoiceComponent';
import DiagramMap from './DiagramMapComponent';
import Overview from './OverviewComponent';
import '../../assets/css/billing.css'
import billingInfo from '../../invoiceInfo';

export default class Billing extends Component {

    render() {
        return (
            <div className="container billing-container">
                <div className="row billing-row">
                    <div className=".col-xs-12">
                        <h2>
                            <b>Invoice </b> 
                            <span className="invoice-number">{billingInfo.invoice}</span>
                        </h2>
                    </div>
                </div>
                <Invoice invoiceInfo={billingInfo.invoiceInfo} />
                <DiagramMap location={billingInfo.lacation}/>
                <Overview overviewInfo={billingInfo.overviewInfo}/>
            </div>
        );
    }

}