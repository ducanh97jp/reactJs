import React, {useState} from 'react';
import './qlsp.css';

function NewProductF(){
    const[product, setProduct] = useState({
        name: '',
        code: '',
    });
    
    function changeValue(event) {
        setProduct({...product, [event.target.name]: event.target.value});
        console.log(product);
    }

    function saveProduct(event) {
        setProduct({...product, [event.target.name]: event.target.value});
        console.log(product);
    }
        return (<div className="main-right col-5">
            <h5>Thông tin sản phẩm</h5>
            {/* <h5>{this.state.status}</h5> */}
            <form>
            <table>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td><input className="text" name='name' type="text" value={product.name} onChange={changeValue} 
                                placeholder="Nhập tên sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td>Mã sản phẩm</td>
                    <td><input className="text" name='code' type="text" value={product.code} onChange={changeValue} placeholder="Nhập mã sản phẩm ..."/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type='button' onClick={saveProduct} id="save">Save</button></td>
                </tr>
            </table>
            </form>
        </div>
    )}

export default NewProductF;