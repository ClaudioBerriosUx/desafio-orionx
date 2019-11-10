import React, { Component } from 'react';
import  { product } from '../Product.json';

class InvoiceMidddle extends Component{
    constructor(){
super();
this.state = {

    product
    
     }
    }

    render(){        
        const product = this.state.product.map((product) =>{
            return(  
                <tr >
                  <td>{product.nombre} <span className="descript">{product.tipo}</span></td>
                  <td>{product.cantidad}</td>
                  <td>{product.valor}</td>
                </tr>         
            ) 
         })

      return(     
        <div className="middle">
        <table className="table ">
            <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>UNIT</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
    
                {product}
    
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>9.90</td>
                </tr>
            </tbody>
        </table>
    </div>
       
        );  
    }
}


export default InvoiceMidddle;
