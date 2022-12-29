function getJsonImage(key) {
    return new Promise(function(resolve){
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${key}&api_key=xl6TcHBfyFqNN7x8lBFEwW9ilqKhdJAy`)
        .then(function(json){
            resolve(json.data.data[0]);
        })
    })
}
let imgSrc1, imgSrc2, imgSrc3;
function getImage() {
    // lay du lieu
    let key = document.getElementById("key").value;
    getJsonImage(key).then(result =>{
        console.log(result.images.downsized.url);
        // lay ra duong dan
        // let imgSrc = result.images.downsized.url;
        if(imgSrc1) {
            if (imgSrc2) {
                imgSrc3 = result.images.downsized.url;
            } else {
                imgSrc2 = result.images.downsized.url;
            }
        } else {
            imgSrc1 = result.images.downsized.url;
        }
        
        // // set lai src cho anh
        document.getElementById("result1").setAttribute("src", imgSrc1);
        document.getElementById("result2").setAttribute("src", imgSrc2);
        document.getElementById("result3").setAttribute("src", imgSrc3);
        
    })
}
function deleteImage() {
    imgSrc1 = imgSrc2 = imgSrc3 = null;
    document.getElementById("result1").setAttribute("src",imgSrc1);
    document.getElementById("result2").setAttribute("src",imgSrc2);
    document.getElementById("result3").setAttribute("src",imgSrc3);
}
// getImage();
