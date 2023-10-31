async function createGallery(){
    var url = 'https://jsonplaceholder.typicode.com/photos';
    var response = await fetch(url);
    var data = await response.json();
    var imageDiv = document.createElement('div');
    var imageDesc = document.createElement('h1');
    for(i=0;i<16;i++)
        for(var item of data) {
            if('url' in item){
                i=i+1;
                var img = document.createElement('img');
                img.src = item.url;
                imageDiv.appendChild(img);
                imageDesc = "Image "+i;
        }
    }
    document.body.appendChild(imageDiv);
}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
    createGallery();
})