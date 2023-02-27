import React from 'react';
import './qlsp.css';
// import NewProductF from './NewproductF';
import productAPI from '../APIClient/ProductAPI';
import NewProduct from './NewProduct';
import ProductList from './ProductList';
class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Product :{},
            editItems:[],
            productList :[]
                // {
                //     id : 1,
                //     name :"IPhone 14",
                //     price : 200000,
                //     unit : "Cai"
                // },
                // {
                //     id : 2,
                //     name :"Samsung Garaxy",
                //     price : 150000,
                //     unit : "Cai"
                // }, 
                // {
                //     id : 2,
                //     name :"Nokia Mobile",
                //     price : 150000,
                //     unit : "Cai"
                // }
            
        }
    }
    // deleteProduct = (id) => {
    //     let arr = [...this.state.productList];
    //     let index = arr.findIndex(function(i) {
    //         return i.id === id;
    //     });
    //     arr.splice(index,1);
    //     this.setState({
    //         productList : arr
    //     })
    // }
        
    // editProduct = (id) => {
    //     let newArr;
    //     this.state.productList.forEach(element => {
    //         if(id === element.id) {
    //             newArr = element;
    //         }
    //     });
    //     this.setState({Product : newArr});
        
    // }
    // saveProduct = (product) => {
    //     const maxId = Math.max(...this.state.productList.map(x => x.id));
    //     product.id = maxId +1;
    //     this.setState({Product : [...this.state.productList, product]});
    // }

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

        fetchProduct = async () =>{
            const response = await productAPI.getAll();
            this.setState({
                productList : [...response.data]
               
            })
        }
    
        componentDidMount() {
            this.fetchProduct();
        }
        componentDidUpdate(){
            
        }
    
        // editProduct = (id) =>{
        //     let index = this.state.productList.findIndex(function(i) {
        //         return i.id === id
        //     });
        //     const item = this.state.productList[index];
        //     this.setState({
        //         product : {
        //             id : item.id,
        //             name : item.name,
        //             price : item.price,
        //             unit : item.unit,
        //         }
        //     })
        // }

        editProduct = async (id) => {
            const editItem =  await productAPI.getById(id)
            console.log(editItem.data)
            this.setState({
                editItems : [...editItem.data]
            })
            
        }
    
        deleteProduct = async (id) =>{
            await productAPI.delete(id).then(
                async () => this.fetchProduct()
            )
        }
    
        saveProduct = async (product) => {
            debugger;
            if(product.id) {
                // update product
                await productAPI.update(product).then(
                    async () => this.fetchProduct()
                );
            } else {
                // create new product
                await productAPI.create(product).then(
                    async () => this.fetchProduct()
                )
            }
        }
    render() {
        // let name = "Iphone 14";
        // const productList = this.state.productList;
        return <div class="main container-fluid">
            <div className='row'>
                <ProductList  deleteProduct = {this.deleteProduct} productList = {this.state.productList} editProduct = {this.editProduct}/>
                <NewProduct  product = {this.state.Product} editItems = {this.state.editItems} saveProduct={this.saveProduct} editProduct = {this.editProduct}/>
            </div>
        </div>
    };
}


export default Container;