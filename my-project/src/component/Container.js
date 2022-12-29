import React from 'react';
import './qlsp.css';
import NewProduct from './NewProduct';
import ProductList from './ProductList';
class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Product :{},
            productList : [
                {
                    id : 1,
                    name :"IPhone 14",
                    price : 200000,
                    unit : "Cai"
                },
                {
                    id : 2,
                    name :"Samsung Garaxy",
                    price : 150000,
                    unit : "Cai"
                }
            ]
        }
    }
    deleteProduct = (id) => {
        debugger;
        let arr = [...this.state.productList];
        let index = arr.findIndex(function(i) {
            return i.id === id;
        });
        arr.splice(index,1);
        this.setState({
            productList : arr
        })
    }
        
    editProduct = (id) => {
        let newArr;
        this.state.productList.forEach(element => {
            if(id === element.id) {
                newArr = element;
            }
        });
        this.setState({Product : newArr});
        
    }

    // cach 2
    // editProduct = (id) => {
        // let arr = [...this.state.productList];
        // let index = arr.findIndex(function(i) {
        //     return i.id === id;
        // });
        // const item = this.state.productList{index};
        // this.setState({
            // product: {
            //     id : item.id,
            //     name : item.name,
            //     price : item.price,
            //     unit : item.unit
            // }
        // })
    render() {
        // let name = "Iphone 14";
        // const productList = this.state.productList;
        return <div class="main container-fluid">
            <div className='row'>
                <ProductList  deleteProduct = {this.deleteProduct} productList = {this.state.productList} editProduct = {this.editProduct}/>
                <NewProduct  Product = {this.state.Product} editProduct = {this.editProduct}/>
            </div>
        </div>
    };
}


export default Container;