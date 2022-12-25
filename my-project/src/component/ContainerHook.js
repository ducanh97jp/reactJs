import React, {useState} from 'react';
import './qlsp.css';
import NewProduct from './NewProduct';
import ProductList from './ProductList';
function ContainerHook() {
    const [productList, setProductList] = useState([
        {
            id : 1,
            name :"IPhone 14",
            price : 200000,
            unit : "Cai"
        },
        {
            id : 2,
            name :"Samsung Garaxy",
            price : 150.000,
            unit : "Cai"
        }
    ]
    );
    const [product, setProduct] = useState();
    function deleteProduct(id) {
        let arr = [...productList];
        let index = arr.findIndex(function(i) {
            return i.id === id;
        });
        arr.splice(index,1);
        setProductList({
            productList : arr
        })
        return productList;
    }
    function editProduct(id) {
        let arr = [...this.state.productList];
        let index = arr.findIndex(function(i) {
            return i.id === id;
        });
        const item = productList[index];
        setProduct({
            product: {
                id : item.id,
                name : item.name,
                price : item.price,
                unit : item.unit
            }
        })
    return product;
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
        // let name = "Iphone 14";
        // const productList = this.state.productList;
        return <div class="main container-fluid">
            <div className='row'>
                <ProductList  deleteProduct = {this.deleteProduct} productList = {productList} editProduct = {this.editProduct}/>
                <NewProduct  Product = {product} editProduct = {this.editProduct}/>
            </div>
        </div>
}


export default ContainerHook;