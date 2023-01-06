import React, { useState } from 'react';
import './qlsp.css';
import NewProduct from './NewProduct';
import ProductList from './ProductList';

function ContainerHook() {
    const [productList, setProductList] = useState([
        {
            id: 15,
            name: "IPhone 14",
            price: 200000,
            unit: "1",
            type: ["1", "3"]
        },
        {
            id: 23,
            name: "Samsung Garaxy",
            price: 150.000,
            unit: "2",
            type: ["1", "4"]
        }
    ]
    );
    const [product, setProduct] = useState({});
    function deleteProduct(id) {
        let arr = [...productList];
        let index = arr.findIndex(function (i) {
            return i.id === id;
        });
        arr.splice(index, 1);
        setProductList(arr)
    }
    function editProduct(id) {
        let arr = [...productList];
        let index = arr.findIndex(function (i) {
            return i.id === id;
        });
        const item = productList[index];
        setProduct({
            id: item.id,
            name: item.name,
            price: item.price,
            unit: item.unit
        })
    }
    // Kieemr tra xem phần tử của mảng 1 có trong mảng 2 ko
    let arr1 = ["1", "2"];
    let arr2 = ["1", "2", "3", "4"];
    arr2.forEach(x => {
        arr1.includes(x);
        console.log(x);
    })
    return (
        <div class="main container-fluid">
            <div className='row'>
                <ProductList productList={productList} deleteProduct={deleteProduct} editProduct={editProduct} />
                <NewProduct product={product} editProduct={editProduct} />
            </div>
        </div>
    )
}
export default ContainerHook;