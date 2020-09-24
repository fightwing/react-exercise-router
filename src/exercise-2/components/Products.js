import React from 'react';
import DataList from '../mockups/data.json'
import {Link} from 'react-router-dom';
class Products extends React.Component{
    constructor(){
        super();
        this.state={
            productList:DataList,
        }
    }
    render(){
        return(
            <div>
                <div>All Products:</div>
                <p><Link to={`/products/${this.state.productList.bicycle.id}`}>Bicycle</Link></p>
                <p><Link to={`/products/${this.state.productList.TV.id}`}>TV</Link></p>
                <p><Link to={`/products/${this.state.productList.pencil.id}`}>Pencil</Link></p>  
                </div>
                 
        )
    
    }
}

export default Products;