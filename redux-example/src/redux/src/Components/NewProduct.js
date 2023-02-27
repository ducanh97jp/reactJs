import React from "react";

class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
        }
    }
    saveProduct = () => {
        this.props.saveProduct(this.state);
    }
    changeValue = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            changeByInput: true,
        });
    }
    render() {
        return <div className="col-md-5">
            <fieldset className="border p-2">
                <legend className="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div className="form-group row">
                        <div className="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" name= "name" value={this.state.name} onChange={this.changeValue} id="productName"
                                placeholder="Nhập tên sản phẩm ..."/>
                            <input type="hidden" id="productId" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" className="btn btn-primary" onClick={this.saveProduct}>Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    }
}

export default NewProduct;