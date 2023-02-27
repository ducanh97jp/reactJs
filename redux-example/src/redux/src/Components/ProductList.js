import React from "react";

class ProductList extends React.Component {
    constructor(props){
        super(props);
    }
    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }
    editProduct = (id) => {
        this.props.editProduct(id);
    }
    static defaultProps = {
        productList : []
    }
    render(){
        return <div className="col-md-7">
        <fieldset className="border p-2">
            <legend className="scheduler-border">Danh sách sản phẩm</legend>
            <table className="table table-sm table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Đơn vị tính</th>
                        <th scope="col">
                            <div className="text-center">#</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.productList.map((product) => {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.unit}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={()=>this.editProduct(product.id)}>Sửa</button>
                                    <button type="button" className="btn btn-danger" onClick={()=>this.deleteProduct(product.id)}>Xoá</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    </div>
    }
}

export default ProductList;