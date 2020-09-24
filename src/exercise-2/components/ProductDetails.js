import React from 'react'
import DataList from '../mockups/data.json'

const idToName={
    1:'bicycle',
    2:'TV',
    3:'pencil',
};

class ProductDetails extends React.Component{

    render(){
        console.log(this.props)
        return(
        <div className={'details'}>
        <p>Product Details: </p>
        <p>Name:{DataList[idToName[this.props.match.params.id]].name}</p>
        <p>Id:{this.props.match.params.id}</p>
        <p>Price:{DataList[idToName[this.props.match.params.id]].price}</p>
        <p>Quantity:{DataList[idToName[this.props.match.params.id]].quantity}</p>
        <p>Desc:{DataList[idToName[this.props.match.params.id]].desc}</p>
        </div>)
    }
}
export default ProductDetails;