import React from 'react';
import './qlsp.css';
class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }
    editProduct = (id) => {
        this.props.editProduct(id);
    }
    // static defaultprops = {
    //     name : "ABC",

    //     // props dèfault măcj định khi không đươc khai báo, khi khaii báo dữ liệu sẽ được ghi đè
    // }
    render() {
        return <div className="main-left col-7">
        <h5>Danh sách sản phẩm</h5>
        <table>
            <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Đơn vị tính</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {
                    this.props.productList.map((product) => {
                    return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.unit}</td>
                        <td><button onClick={()=>this.editProduct(product.id)} className="bg-success text-white">Edit</button></td>
                        <td><button onClick={()=>this.deleteProduct(product.id)} className="bg-danger text-white">Delete</button></td>
                    </tr>
                })
                }
            </tbody>
        </table>
    </div>
    }
}


export default ProductList;