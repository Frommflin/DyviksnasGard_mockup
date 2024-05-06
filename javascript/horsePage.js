// page4 - All horses
function showNewHorseForm(){
    let str = ``;

    str += `<div class="topRow">`;
    str += `<h1>Ny häst på gården</h1>`;
    str += `<button class="btn" onclick="showPage(4)">Avbryt</button>`;
    str += `</div>`;
    str += `<form id="newHorseForm" class="col col-xs-6" method="post" enctype="multipart/form-data">`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Namn</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="horseName" maxlength="30" required>`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Smeknamn</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="nickname" maxlength="15">`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Färg</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="color" maxlength="15" required>`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Ras</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="breed" maxlength="20">`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Mankhöjd</span>`;
    str += `</div>`;
    str += `<input type="number" class="form-control" name="height" min="0" placeholder="i centimeter" required>`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Födelseår</span>`;
    str += `</div>`;
    str += `<input type="text" class="form-control" name="yearOfBirth" maxlength="4" placeholder="ÅÅÅÅ">`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Bild</span>`;
    str += `</div>`;
    str += `<input type="file" class="form-control" name="profileImg" >`;
    str += `</div>`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Beskrivning</span>`;
    str += `</div>`;
    str += `<textarea class="form-control" name="description" placeholder="Berätta om hästen här"></textarea>`;
    str += `</div>`;
    str += `<button class="btn">Spara häst</button>`;
    str += `</form>`;
    
    document.getElementById("formBox").innerHTML = str;
    showPage(9);
}

// page5 - Selected horse
let horseImageArray = [];

function showHorseImgForm(){
    let horse = sessionStorage.getItem("horse").split(",");
    // id: horse[0], name: horse[1]

    let str = ``;

    str += `<div class="topRow">`;
    str += `<h1>Lägg till bilder på ${horse[1]}</h1>`;
    str += `<button class="btn" onclick="showPage(5,${horse[0]})">Avbryt</button>`;
    str += `</div>`;
    str += `<form id="horseImageForm" class="col col-xs-6" method="post" enctype="multipart/form-data">`;
    str += `<div class="input-group">`;
    str += `<div class="input-group-prepend">`;
    str += `<span class="input-group-text">Bilder</span>`;
    str += `</div>`;
    str += `<input type="file" class="form-control" name="uploadHorse[]" id="uploadHorse" multiple required>`;
    str += `</div>`;
    str += `<input type="hidden" name="horseId" id="horseId" value="${horse[0]}" />`;
    str += `<button class="btn">Spara bilder</button>`;
    str += `</form>`;

    document.getElementById("formBox").innerHTML = str;
    showPage(9);
}

function deleteHorse(id, image){
    let str = ``;

    str += `<div class="popupBox">`;
    str += `<form id="deleteHorseForm" class="col col-xs-6" method="post">`;
    str += `<h1>Är du säker på att du vill ta bort den här hästen?</h1>`;
    str += `<input type="hidden" name="horseId" id="horseId" value="${id}" />`;
    str += `<input type="hidden" name="horseImg" id="horseImg" value="${image}" />`;
    str += `<div class="confirmBtns">`;
    str += `<button type="submit" id="cancelHorseDelete" class="btn">Avbryt</button>`;
    str += `<button type="submit" id="confirmHorseDelete" class="btn">Ta bort</button>`;
    str += `</div>`;
    str += `</div>`;

    showPopup(str);
}

$(document).on("click", "#cancelHorseDelete", function(event){
    event.preventDefault();
    closePopup();
});

function showDeleteHorseImgForm(){
    let horse = sessionStorage.getItem("horse").split(",");
    // id: horse[0], name: horse[1]

    let str = "";

    str += `<hr>`;
    str += `<h2>Välj bilder att ta bort</h2>`;
    str += `<form id="deleteHorseImgForm">`;
    str += `<div id="imgDeletionContainer">`;
    for( i = 0; i < horseImageArray.length; i++ ) {
        str += `<div class="deleteCard card">`;
        str += `<input type="checkbox" id="img${i+1}" name="deleteImages[]" value="${horseImageArray[i]}">`;
        str += `<label for="img${i+1}">`;
        str += `<img src="./images/horseUploads/${horseImageArray[i]}" alt="Image ${i+1} of ${horse[1]}">`;
        str += `</label>`;
        str += `</div>`;
    };
    str += `</div>`;
    str += `<input type="hidden" name="horseID" id="horseID" value="${horse[0]}">`;
    str += `<div class="confirmBtns">`;
    str += `<input type="submit" id="cancelImgDelete" class="btn" value="Avbryt">`;
    str += `<input type="submit" id="confirmImgDelete" class="btn" value="Ta bort markerade bilder">`;
    str += `</div>`;
    str += `</form>`;

    document.getElementById("imgDeleteBox").innerHTML = str;
}

$(document).on("click", "#cancelImgDelete", function(event){
    event.preventDefault();
    document.getElementById("imgDeleteBox").innerHTML = "";
});

// --------------------------------------------------
// --------------      AJAX CALLS      --------------
// --------------------------------------------------

// page4 - All horses

// Add a new horse
$(document).on("submit", "#newHorseForm", function(event){
    event.preventDefault();


    let name = document.querySelector("input[name='horseName']").value;
    let nickname = document.querySelector("input[name='nickname']").value;
    let color = document.querySelector("input[name='color']").value;
    let breed = document.querySelector("input[name='breed']").value;
    let height = document.querySelector("input[name='height']").value;
    let year = document.querySelector("input[name='yearOfBirth']").value;
    let img = document.querySelector("input[name='profileImg']").files[0];

    let text = document.querySelector("textarea[name='description']").value;
    let split = text.split("\n");
    let newText = split.join("¤¤");
    console.log(newText);

    let formData = new FormData();
    formData.append("horseName", name);
    formData.append("nickname", nickname);
    formData.append("color", color);
    formData.append("breed", breed);
    formData.append("height", height);
    formData.append("yearOfBirth", year);
    formData.append("profileImg", img);
    formData.append("description", newText);

    $.ajax({
        url: "./php/createHorse.php",
        method: "POST",
        data: formData,
        contentType:false,
        processData:false,
        success: function(data){
            getHorses();
            showPage(4);
        }
    })
});

function getHorses(){
    $.ajax({
        url: "./php/getAllHorses.php",
        method: "POST",
        success: function(data){
            let resultset = data.childNodes[0];
            
            let str1 = ``;
            let str2 = ``;
            // Iterate over all nodes in root node (i.e. horses)
            for (i = 0; i < resultset.childNodes.length; i++){
                if(resultset.childNodes.item(i).nodeName=="horse"){
                    let horse = resultset.childNodes.item(i);

                    // Creating navigation links
                    str1 += `<a id="nestedLink${horse.attributes["id"].nodeValue}" `;
                    str1 += `class="dropdown-item spaLink" href="#" `;
                    str1 += `onclick="showPage(5,${horse.attributes["id"].nodeValue}); `;
                    str1 += `getHorse('${horse.attributes["id"].nodeValue}')" >`;
                    str1 += `${horse.attributes["name"].nodeValue}`;
                    str1 += `</a>`;

                    // Creating profile cards on page 4
                    str2 += `<div class="card profileCard" `;
                    str2 += `onclick="showPage(5,${horse.attributes["id"].nodeValue}); `;
                    str2 += `getHorse('${horse.attributes["id"].nodeValue}')" >`;
                    str2 += `<img class="card-img-top" `;
                    str2 += `src="./images/horseProfiles/${horse.attributes["image"].nodeValue}" `;
                    str2 += `alt="${horse.attributes["name"].nodeValue}">`;
                    str2 += `<div class="cardBody">`;
                    str2 += `<h2>${horse.attributes["name"].nodeValue}</h2>`;
                    str2 += `</div>`;
                    str2 += `</div>`;
                }
            }
            document.getElementById("horseLinks").innerHTML = str1;
            document.getElementById("cardContainer").innerHTML = str2;
        }
    })
}


// page5 - Selected horse

// Add pictures to active horse
$(document).on("submit", "#horseImageForm", function(event){
    event.preventDefault();

    let horse = document.getElementById("horseId").value;

    let formData = new FormData();
    formData.append("horseID", horse);

    // Read and append selected files
    let totalfiles = document.getElementById("uploadHorse").files.length;
    for (let i = 0; i < totalfiles; i++) {
        formData.append("uploadHorse[]", document.getElementById("uploadHorse").files[i]);
    }

    $.ajax({
        url: "./php/createHorseImages.php",
        method: "POST",
        data: formData,
        contentType:false,
        processData:false,
        success: function(data){
            getHorseImages(document.getElementById("horseId").value);
            showPage(5, horse);
        }
    })
});

function getHorse(id){
    $.ajax({
        url: "./php/getHorse.php",
        method: "POST",
        data: { 
            horseID: id
        },
        success: function(data){
            let resultset = data.childNodes[0];
            // Iterate over all nodes in root node (i.e. horses)
            for (i = 0; i < resultset.childNodes.length; i++){
                if(resultset.childNodes.item(i).nodeName=="horse"){
                    let horse = resultset.childNodes.item(i);

                    let rawText = horse.attributes["info"].nodeValue;
                    let paragarphs = rawText.split("¤¤");

                    const currentYear = new Date().getFullYear();
                    let age = currentYear - horse.attributes["year"].nodeValue;

                    let horseData = {
                        id: horse.attributes["id"].nodeValue,
                        name: horse.attributes["name"].nodeValue,
                        nickname: horse.attributes["nickname"].nodeValue,
                        color: horse.attributes["color"].nodeValue,
                        breed: horse.attributes["breed"].nodeValue,
                        height: horse.attributes["height"].nodeValue,
                        year: horse.attributes["year"].nodeValue,
                        age: age,
                        image: horse.attributes["image"].nodeValue
                    };

                    document.getElementById("name").innerHTML = horseData.name;
                    document.getElementById("nickname").innerHTML = horseData.nickname;
                    document.getElementById("year").innerHTML = horseData.year;
                    document.getElementById("age").innerHTML = horseData.age;
                    document.getElementById("color").innerHTML = horseData.color;
                    document.getElementById("breed").innerHTML = horseData.breed;
                    document.getElementById("height").innerHTML = horseData.height;

                    let str1 = "";
                    paragarphs.forEach(paragraph => {
                        str1 += `<p>${paragraph}</p>`;
                    });
                    document.getElementById("description").innerHTML = str1;

                    getHorseImages(horseData.id);

                    // Storing id and name for changes on active horse
                    let details = `${horseData.id},${horseData.name}`;
                    sessionStorage.setItem("horse", details);

                    let str = ``;
                    if(localStorage.getItem("userRole") == "Admin"){
                        str += `<hr>`;
                        str += `<div class="crudBox">`;

                        str += `<button class="crudBtn" onclick="showHorseImgForm()">`;
                        str += `<img src="./icons/addimage-white.png" />`;
                        str += `Lägg till bilder`;
                        str += `</button>`;

                        str += `<button class="crudBtn">`;
                        str += `<img src="./icons/edithorse-white.png" />`;
                        str += `Redigera häst`;
                        str += `</button>`;

                        str += `<button class="crudBtn" onclick="deleteHorse(${horseData.id}, '${horseData.image}')">`;
                        str += `<img src="./icons/bin-white.png" />`;
                        str += `Ta bort häst`;
                        str += `</button>`;

                        str += `<button id="deleteHorseImages" class="crudBtn" onclick="showDeleteHorseImgForm()">`;
                        str += `<img src="./icons/bin-white.png" />`;
                        str += `Ta bort bilder`;
                        str += `</button>`;

                        str += `</div>`;
                    }
                    document.getElementById("btnBox").innerHTML = str;
                }
            }
        }
    })
}

function getHorseImages(id){
    horseImageArray = []; //Clearing out any previously saved images
    $.ajax({
        url: "./php/getHorseImages.php",
        method: "POST",
        data: { 
            horseID: id
        },
        success: function(data){
            let resultset = data.childNodes[0];
            let arrayLength = resultset.childNodes.length;

            let storedHorse = sessionStorage.getItem("horse").split(",");
            // id: horse[0], name: horse[1]
            let horse = storedHorse[1];

            let indicator = ``;
            let images = ``;

            if(arrayLength == 1){ // If no image has been added to this horse yet
                indicator += `<button type="button" data-bs-target="#carouselIndicators" `;
                indicator += `data-bs-slide-to="0" class="active" `;
                indicator += `aria-current="true" aria-label="Slide 1">`;
                indicator += `</button>`;

                images += `<div class="carousel-item active">`;
                images += `<img src="./images/noimage.png" class="d-block" alt="No image">`;
                images += `</div>`;

                if(localStorage.getItem("userRole") === "Admin"){
                    document.getElementById("deleteHorseImages").disabled = true;
                }
            } else {
                // Iterate over all nodes in root node (i.e. photos)
                let slide = 0;
                for (i = 0; i < arrayLength; i++){
                    if(resultset.childNodes.item(i).nodeName=="image"){
                        let image = resultset.childNodes.item(i);
                        let filename = image.attributes["file"].nodeValue;
                        horseImageArray.push(filename);

                        // Creating indicator for each image
                        indicator += `<button type="button" data-bs-target="#carouselIndicators" `;
                        indicator += `data-bs-slide-to="${slide}" `;
                        if(slide == 0){ // First image will be active on load
                            indicator += `class="active" aria-current="true" `;
                        }
                        indicator += `aria-label="Slide ${slide+1}">`;
                        indicator += `</button>`;

                        //Creating image div for carousel
                        images += `<div class="carousel-item`;
                        if(slide == 0){ // First image will have the class 'active' on load
                            images += ` active`;
                        }
                        images += `">`;
                        images += `<img src="./images/horseUploads/${filename}" class="d-block" alt="Image ${slide+1} of ${horse}">`;
                        images += `</div>`;

                        slide++;
                    }
                }
                if(localStorage.getItem("userRole") === "Admin"){
                    document.getElementById("deleteHorseImages").disabled = false;
                }
            }
            document.getElementById("indicators").innerHTML = indicator;
            document.getElementById("carouselImages").innerHTML = images;
        }
    })
}

// Delete horse
$(document).on("click", "#confirmHorseDelete", function(event){
    event.preventDefault();
    let id = document.getElementById("horseId").value;
    let img = document.getElementById("horseImg").value;

    // First delete all images in table using horse as foreign key
    $.ajax({
        url: "./php/deleteHorseImages.php",
        method: "POST",
        data: {
            horseId: id,
            images: JSON.stringify(horseImageArray)
        },
        success: function(data){
            // Then remove horse from db and update site with current content
            $.ajax({
                url: "./php/deleteHorse.php",
                method: "POST",
                data: {
                    horseId: id,
                    image: img
                },
                success: function(response){
                    closePopup();
                    getHorses();
                    showPage(4,0);
                }
            })
        }
    }) 
});

// Delete images on active horse
$(document).on("click", "#confirmImgDelete", function(event){
    event.preventDefault();
    let id = document.getElementById("horseID").value;

    var imagesToDelete = [];
    var checkboxes = document.getElementsByName("deleteImages[]");
    for( i = 0; i<checkboxes.length; i++ ){
        if(checkboxes[i].checked){
            imagesToDelete.push(checkboxes[i].value);
        }
    }

    $.ajax({
        url: "./php/deleteHorseImage.php",
        method: "POST",
        data: {
            horseId: id,
            images: JSON.stringify(imagesToDelete)
        },
        success: function(data){
            document.getElementById("imgDeleteBox").innerHTML = "";
            getHorseImages(id);
        }
    })

});
