import React from 'react';
import './qlsp.css';
class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status : "dang di hoc"
        }
    }

    saveProduct = () => {
        this.setState ({
            status : this.state.status === "dang di hoc" ? "da nghi hoc" : "dang di hoc",
        });
    }
    render() {
        return <div className="main-right col-5">
            <h5>Thông tin sản phẩm</h5>
            {/* <h5>{this.state.status}</h5> */}
            <form>
            <table>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td><input className="text" type="text" 
                    value={this.props.Product.name} 
                    placeholder="Nhập tên sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td>Mã sản phẩm</td>
                    <td><input className="text" type="text" value={this.props.Product.id} placeholder="Nhập mã sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td>Loại sản phẩm</td>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Đồ gia dụng
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Đồ điện tử
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Quần áo
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Sách
                                </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Khuyến mãi</td>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Đang khuyến mãi
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2"/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Không
                                </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Hàng đang khuyễn mãi</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Đơn vị tính</td>
                    <td>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>{this.props.Product.unit}</option>
                            <option>Cái</option>
                            <option value="1">Chiếc</option>
                            <option value="2">Quyển</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Giá sản phẩm</td>
                    <td><input className="text" type="text" value={this.props.Product.price} placeholder="Nhập giá sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td>Ngày nhập</td>
                    <td><input className="text" type="datetime-local"/></td>
                </tr>
                <tr>
                    <td>Mô tả</td>
                    <td><input className="text" type="text" placeholder="Mô tả sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type='button' onClick="saveProduct()" id="save">Save</button></td>
                </tr>
            </table>
            </form>
        </div>
    }
}


export default NewProduct;