import React, { Component } from 'react';

class InvoiceTop extends Component{
    render(){
      return(
       
        <div className="top">
    <ul>
      <li><p className="title-invoice">INVOICE</p><span className="date-invoice">08/11/2018</span></li>
      <li><span className="converse"></span></li>
      <li><p className="n-invoice">#89289</p></li>
    </ul>
  </div>
       
        );  
    }
}
export default InvoiceTop;