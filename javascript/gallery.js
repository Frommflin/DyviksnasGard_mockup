
function showAlbum(a) {
    // Reset all to 'normal' button look
    buttons = document.getElementsByClassName("galleryBtn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("activeBtn");
    }

    // Mark selected Album-button
    //TODO: Show relevant album-content
    document.getElementById("album" + a).classList.add("activeBtn");

}

function showAlbumForm(){
    let str = '';

    str += `<div class="popupBox">`;
    str += `<div id="close"><span onclick='closePopup()'>X</span></div>`;
    str += `<form id="newAlbumForm" class="col col-xs-6" method="post">`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Namn på album</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="albumName" maxlength="30" placeholder="Album" required>`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Kort beskrivning</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="albumDescription" maxlength="50" placeholder="Beskrivning">`;
    str += `</div>`;
    str += `<button class="btn">Skapa album</button>`;
    str += `</form>`;
    str += `</div>`;

    showPopup(str);
}

function showImageForm(){
    let str = '';

    str += `<div class="popupBox">`;
    str += `<div id="close"><span onclick='closePopup()'>X</span></div>`;
    str += `<form id="addImgForm" class="col col-xs-6" method="post" enctype="multipart/form-data">`;
    str += `<div class="input-group">`;
    str += `<label class="input-group-text" for="upload">Välj bild</label>`;
    str += `<input type="file" class="form-control" name="upload" id="upload" required>`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Kort beskrivning</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="imgDescription" maxlength="100" placeholder="Beskrivning">`;
    str += `</div>`;
    str += `<input type="hidden" name="toAlbum" value="albumName" />`;
    str += `<button class="btn">Spara</button>`;
    str += `</form>`;
    str += `</div>`;

    showPopup(str);
}

function showImage(img){
    let str = '';

    str += `<div id="popupImage" class="popupBox">`;
    str += `<div id='close'><span onclick='closePopup()'>X</span></div>`;
    str += `<img src="./images/${img}" />`;
    str += `<p>Kort beskrivning av bilden här</p>`;
    str += `</div>`;

    showPopup(str);
}

function showPopup(str){
    let popup = document.getElementById('galleryPopup');
    popup.style.display='flex';
    popup.innerHTML = str;

    disableScrolling();
}

function disableScrolling(){
    //Preventing page from scrolling while popup is in focus
    document.body.classList.add('stopScroll');
}

function closePopup(){
    document.getElementById('galleryPopup').style.display='none';
    document.getElementById('galleryPopup').innerHTML = '';

    //Enabling scrolling on page when image is closed
    document.body.classList.remove('stopScroll')
}
