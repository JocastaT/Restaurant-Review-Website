//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon

function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api
    request.onload = function() {
        //get all the restaurant records into our movie array
        restaurant_array = JSON.parse(request.responseText);
        //call the function so as to display all movies tiles for "urbandine"
        fetchReviews();
        displayRestaurants(category);
        displayAllRestaurants();
    };
    //This command starts the calling of the restaurants web api
    request.send();
}

//This function is to display the restaurants tiles
//that filters based on "urban" or "Coming Soon“
function displayAllRestaurants() {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var thumbnail = restaurant_array[count].thumb;
        var title = restaurant_array[count].name;
        var cuisine = restaurant_array[count].cuisine;
        var addressName = restaurant_array[count].addressName;
        var cell =
            '<div id="products" class="row view-group" >\
             <div class="col-md-9" style="left:50px; top:20px; ">\
                        <div class="thumbnail card" href="edit.html">\
                            <div class="img-event">\
                                <img class="group list-group-image img-fluid" src=' + thumbnail + '  >\
                            </div>\
                            <div class="caption card-body">\
                                <h4 class="group card-title inner list-group-item-heading" style="font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-size: 20px;">\
                                   ' + title + '</h4>\
                                <p class="group inner list-group-item-text" style="font-size:10px; margin-top: -10px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + addressName + '</p>\
                                    <p class="group inner list-group-item-text" style="font-size:10px; margin-left:210px; margin-top: -55px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantDetails(this)" style=" color: white; background-color: #681717; color: #681717; border-color: #681717;  background-color: transparent; font-size:10px; margin-top: 70px; margin-left:-200px;">Details</button> </p>\
                                    <button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantReviews(this)" style=" color: #681717; border-color: #681717;  background-color: transparent; margin-top:-85px; font-size:10px; margin-left: 95px;" >Reviews</button>\
                                    <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showMap(this)"  style="margin-top:-130px;  color: #681717; border-color: #681717;  background-color: transparent;  font-size:10px; margin-left: 185px;">Location</button> \                                <div class="row">\
                                    <div class="col-xs-12 col-md-6">\
                                        <p class="lead">\</p>\
                                    </div >\
                                </div >\
                            </div >\
                        </div >\
                    </div > ';
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;
    }

    message = "--- ALL RESTAURANTS ---";
    document.getElementById("summary").textContent = message;
    document.getElementById("summary").style.color = "#232122";
    document.getElementById("summary").style.fontFamily = "Arial, Helvetica, sans-serif;"
    document.getElementById("summary").style.fontWeight = "700"
    document.getElementById("summary").style.marginLeft = "500px";
    document.getElementById("summary").style.fontSize = "25px";
    document.getElementById("summary").style.marginTop = "40px";
    document.getElementById("parent").textContent = "";
}

//This function is to display the "Coming Soon" movies
function listFastFood() {
    category = "Fast Food";
    displayAllRestaurants();

    document.getElementById("fastfoodMenu").classList.add("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

function listWestern() {
    category = "Western";
    displayAllRestaurants();
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.add("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listKorean() {
    category = "Korean";
    displayAllRestaurants();
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.add("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("contactMenu").classList.remove("active");
    document.getElementById("loginMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listJapanese() {
    category = "Japanese";
    displayAllRestaurants();
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.add("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listThai() {
    category = "Thai";
    displayAllRestaurants();
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.add("active");
}

function listChinese() {
    category = "Chinese";
    displayAllRestaurants();
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.add("active");
    document.getElementById("thaiMenu").classList.remove("active");
}



function displayRestaurants(category) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (restaurant_array[count].cuisine == category) {
            var thumbnail = restaurant_array[count].thumb;
            var title = restaurant_array[count].name;
            var cuisine = restaurant_array[count].cuisine;
            var addressName = restaurant_array[count].addressName;
            var cell =
                '<div id="products" class="row view-group" >\
             <div class="col-md-9" style="left:50px; top:10px; ">\
                        <div class="thumbnail card" href="edit.html">\
                            <div class="img-event">\
                                <img class="group list-group-image img-fluid" src=' + thumbnail + '  >\
                            </div>\
                            <div class="caption card-body">\
                                <h4 class="group card-title inner list-group-item-heading" style="font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-size: 20px;">\
                                   ' + title + '</h4>\
                                <p class="group inner list-group-item-text" style="font-size:10px; margin-top: -10px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + addressName + '</p>\
                                    <p class="group inner list-group-item-text" style="font-size:10px; margin-left:210px; margin-top: -55px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantDetails(this)" style=" color: white; background-color: #681717; color: #681717; border-color: #681717;  background-color: transparent; font-size:10px; margin-top: 70px; margin-left:-200px;">Details</button> </p>\
                                    <button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantReviews(this)" style=" color: #681717; border-color: #681717;  background-color: transparent; margin-top:-85px; font-size:10px; margin-left: 95px;" >Reviews</button>\
                                    <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showMap(this)"  style="margin-top:-130px;  color: #681717; border-color: #681717;  background-color: transparent;  font-size:10px; margin-left: 185px;">Location</button> \                                <div class="row">\
                                    <div class="col-xs-12 col-md-6">\
                                        <p class="lead">\</p>\
                                    </div >\
                                </div >\
                            </div >\
                        </div >\
                    </div > ';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
    message = restaurantCount + " Restaurants For '" + category + "'";
    document.getElementById("summary").textContent = message;
    document.getElementById("summary").style.color = "#232122";
    document.getElementById("summary").style.fontFamily = "Arial, Helvetica, sans-serif;"
    document.getElementById("summary").style.fontWeight = "700"
    document.getElementById("summary").style.marginLeft = "50px";
    document.getElementById("summary").style.fontSize = "25px";
    document.getElementById("summary").style.marginTop = "30px";
    document.getElementById("parent").textContent = "";
}

function displayRestaurantSearch(category) {
    var table = document.getElementById("restaurantTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        if (document.getElementById("search_input").value = restaurant_array[count].name || restaurant_array[count].region) {
            var thumbnail = restaurant_array[count].thumb;
            var title = restaurant_array[count].name;
            var cuisine = restaurant_array[count].cuisine;
            var addressName = restaurant_array[count].addressName;
            var cell =
                '<div id="products" class="row view-group" >\
             <div class="col-md-9" style="left:50px; top:10px; ">\
                        <div class="thumbnail card" href="edit.html">\
                            <div class="img-event">\
                                <img class="group list-group-image img-fluid" src=' + thumbnail + '  >\
                            </div>\
                            <div class="caption card-body">\
                                <h4 class="group card-title inner list-group-item-heading" style="font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-size: 20px;">\
                                   ' + title + '</h4>\
                                <p class="group inner list-group-item-text" style="font-size:10px; margin-top: -10px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + addressName + '</p>\
                                    <p class="group inner list-group-item-text" style="font-size:10px; margin-left:210px; margin-top: -55px; color: #999999; font-family: Arial, Helvetica, sans-serif;">\
                                    ' + '<button href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantDetails(this)" style=" color: white; background-color: #681717; color: #681717; border-color: #681717;  background-color: transparent; font-size:10px; margin-top: 70px; margin-left:-200px;">Details</button> </p>\
                                    <button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showRestaurantReviews(this)" style=" color: #681717; border-color: #681717;  background-color: transparent; margin-top:-85px; font-size:10px; margin-left: 95px;" >Reviews</button>\
                                    <button href="#" data-toggle="modal" data-target="#mapModal" item="' + count + '" type="button" class="btn btn-black btn-sm" onClick="showMap(this)"  style="margin-top:-130px;  color: #681717; border-color: #681717;  background-color: transparent;  font-size:10px; margin-left: 185px;">Location</button> \
 \
                                <div class="row">\
                                    <div class="col-xs-12 col-md-6">\
                                        <p class="lead">\</p>\
                                    </div >\
                                </div >\
                            </div >\
                        </div >\
                    </div > ';
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        }
    }
    message = restaurantCount + " Results for '" + category + "'"
    document.getElementById("summary").textContent = message;
    document.getElementById("summary").style.color = "#232122";
    document.getElementById("summary").style.fontFamily = "Arial, Helvetica, sans-serif;"
    document.getElementById("summary").style.fontWeight = "700"
    document.getElementById("summary").style.marginLeft = "50px";
    document.getElementById("summary").style.fontSize = "25px";
    document.getElementById("summary").style.marginTop = "30px";
    document.getElementById("parent").textContent = "";
}

//This function is to display the "Coming Soon" movies
function listFastFood() {
    category = "Fast Food";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.add("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

function listWestern() {
    category = "Western";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.add("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listKorean() {
    category = "Korean";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.add("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("contactMenu").classList.remove("active");
    document.getElementById("loginMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listJapanese() {
    category = "Japanese";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.add("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listThai() {
    category = "Thai";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.remove("active");
    document.getElementById("thaiMenu").classList.add("active");
}

function listChinese() {
    category = "Chinese";
    displayRestaurants(category);
    document.getElementById("fastfoodMenu").classList.remove("active");
    document.getElementById("westernMenu").classList.remove("active");
    document.getElementById("koreanMenu").classList.remove("active");
    document.getElementById("japaneseMenu").classList.remove("active");
    document.getElementById("chineseMenu").classList.add("active");
    document.getElementById("thaiMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantTitle").textContent = restaurant_array[item].name;
    document.getElementById("description").textContent = restaurant_array[item].description;
    document.getElementById("pic1").src = restaurant_array[item].picture1;
    document.getElementById("pic2").src = restaurant_array[item].picture2;
    document.getElementById("rating").textContent = restaurant_array[item].rating;
    document.getElementById("contact").textContent = restaurant_array[item].contact;
    document.getElementById("operatinghrs").textContent = restaurant_array[item].operatinghrs;
    document.getElementById("cuisine").textContent = restaurant_array[item].cuisine;

    document.getElementById("addressName").textContent = restaurant_array[item].addressName;
}

function searchRestaurant() {
    if (document.getElementById("search_input").value == "") {
        window.location.href = "index.html";
        location.reload();
    }
    if (document.getElementById("search_input").value != "") {
        var search = document.getElementById("search_input").value;
        var search2 = new XMLHttpRequest();

        search2.open("POST", "/search", true);
        search2.setRequestHeader("Content-Type", "application/json");
        search2.onload = function() {
            restaurant_array = JSON.parse(search2.responseText)
            displayRestaurantSearch(search);

            console.log(search);
        }
        var payload = { search: search }
        search2.send(JSON.stringify(payload));
    }
}

function showMap(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    var locations = [restaurant_array[item].name, restaurant_array[item].restLatitude, restaurant_array[item].restLongtitude];
    map = new google.maps.Map(document.getElementById("map"), { center: { lat: 1.8, lng: 110.9 }, zoom: 4 });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[1], locations[2]),
        map: map,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/restaurant.png"
        }
    });

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            map.setCenter(pos);
            map.setZoom(15);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
                map: map,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })

            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent("Your current location");
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    )
}

//This function opens a new window/tab and loads the
//particular restaurant in the restaurant website
function booking() {
    window.open(restaurant_array[currentIndex].bookingURL, "_blank");
}