import React from "react";
import { connect} from "react-redux";
import * as productAction from "./Product/ProductAction";

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
                            debugger;
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
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
const mapStateToProps = (state) => ({
    productList: state.productList
})
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct(id) {
            dispatch(productAction.deleteProduct(id));
        }
    }
}

export default connect( mapStateToProps ,mapDispatchToProps) (ProductList);