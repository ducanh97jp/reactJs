import React, {useState} from 'react';
import './qlsp.css';

function NewProductF(){
    const[newProduct, setNewProduct] = useState({
        name: '',
        code: '',
    });
    
    function changeValue(event) {
        setNewProduct({[event.target.name]: event.target.value});
        console.log(newProduct);
    }

    function saveNewProduct() {
        props.saveProduct(newProduct);
    }
        return (<div className="main-right col-5">
            <h5>Thông tin sản phẩm</h5>
            {/* <h5>{this.state.status}</h5> */}
            <form>
            <table>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td><input className="text" name='name' type="text" value={newProduct.name} onChange={changeValue} 
                                placeholder="Nhập tên sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td>Mã sản phẩm</td>
                    <td><input className="text" name='code' type="text" value={newProduct.code} onChange={changeValue} 
                                placeholder="Nhập mã sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type='button' onClick={saveNewProduct} id="save">Save</button></td>
                </tr>
            </table>
            </form>
        </div>
    )}

export default NewProductF;