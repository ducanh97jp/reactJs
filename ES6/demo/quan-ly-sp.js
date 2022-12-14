let listProduct = ["Iphone 13", "Nokia 6", "Samsung Galaxy ", "Iphone X"];

//hàm hiển thị danh sách sản phẩm ở biến listProduct vào trong thẻ có id là listProduct
//tên hàm: showAllProduct
//tham số truyền vào: không có
//dữ liệu trả về: không có
//cách triển khai: dùng vòng lặp để viết html sau đó innerHTML vào thẻ có id là ..
function showAllProduct(){
    let content ='';
    for (let index = 0; index < listProduct.length; index++) {
       content += `<tr>
       <td>${listProduct[index]}</td>
       <td><button onclick="editById(${index})">Edit</button></td>
       <td><button onclick="deleteById(${index})">Delete</button></td>
   </tr>`;
    }
    document.getElementById("listProduct").innerHTML = content;
    document.getElementById("number").innerText = " "+ listProduct.length + " sp";
}
showAllProduct();

//hàm tạo mới sản phẩm
//tên hàm: createNewProduct
//cách triển khai:
//b1: Lấy dữ liệu trong ô input
//b2: thêm mới phần tử vào mảng
//b3: gọi lại hàm hiển thị danh sách
function createNewProduct(){
    //b1: Lấy dữ liệu trong ô input
    let newProduct = document.getElementById("newProduct").value;
//b2: thêm mới phần tử vào mảng
    listProduct.push(newProduct);
//b3: gọi lại hàm hiển thị danh sách
    showAllProduct()
}

//hàm xoá sản phẩm
//tên hàm: deleteById
//tham số: index
//trả về: không có
//cách triển khai: xoá phần tử trong mảng, gọi lại hàm hiển thị danh sách
function deleteById(index){
    listProduct.splice(index,1);
    showAllProduct();
}

function editById(index){
    //hien thi promt sua du lieu
    let name = prompt("Moi ban nhap ten sp moi", listProduct[index]);
    //cap nhat lai listproduct thu index
    listProduct[index] = name;
    //goi lai ham showAll
    showAllProduct();
}


//hàm tim kiem san pham
//tên hàm: searchByName
//tham số: khong co
//trả về: không có
//cách triển khai: xoá phần tử trong mảng, gọi lại hàm hiển thị danh sách

function searchByName()
{
    //lay du lieu tu o input
    let name = document.getElementById("name").value;
    //duyet tu dau den cuoi mang
    for (let index = 0; index < listProduct.length; index++) {
        if(listProduct[index].search(name)!=-1){
            //dien lai du lieu vao mang
            let content = `<tr>
            <td>${listProduct[index]}</td>
            <td><button onclick="editById(${index})">Edit</button></td>
            <td><button onclick="deleteById(${index})">Delete</button></td>
        </tr>`;
            document.getElementById("listProduct").innerHTML = content;
            //break

        }
        
    }
    
}
const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', f1);

removeBtn.addEventListener('click', f2);


removeBtn.addEventListener('click', f3);