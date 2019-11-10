import React, { Component } from 'react';

import InvoiceTop from './InvoiceTop';
import InvoiceMidddle from './InvoiceMidddle';
import InvoiceBottom from './InvoiceBottom';

class Invoice extends Component{
    render(){
      return(
        <div className="centrado-porcentual">
          <div className="block">            

            <InvoiceTop/>
            <InvoiceMidddle/>
            <InvoiceBottom/>

          </div>
        </div>
        );  
    }
}
export default Invoice;
