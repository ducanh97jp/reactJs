function getJsonImage(key) {
    return new Promise(function(resolve){
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${key}&api_key=xl6TcHBfyFqNN7x8lBFEwW9ilqKhdJAy`)
        .then(function(json){
            resolve(json.data.data[0]);
        })
    })
}

function getImage() {

    // lay du lieu
    let key = document.getElementById("key").value;
    getJsonImage(key).then(result =>{
        console.log(result.images.downsized.url);
        // lay ra duong dan
        // let imgSrc = result.images.downsized.url;
        // // set lai src cho anh
        // document.getElementById("result").setAttribute("src", imgSrc);
    })
}
// getImage();
