function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
        //get all the comments records into our comments array
        review_array = JSON.parse(request.responseText);
    };
    request.send();
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("rreview").value = "";
    document.getElementById("username").value = "";
}
// Submit or send the new comment to the server to be added.
function addReview() {
    var review = new Object();
    review.restaurant__id = restaurant_array[currentIndex]._id; // Movie ID is required by server to create new comment 
    review.restaurant = restaurant_array[currentIndex].name; // Movie title is required by server to create new comment
    review.username = document.getElementById("username").value; // Value from HTML input text
    review.review = document.getElementById("rreview").value; // Value from HTML input text
    review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = rating;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", review_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function() {
        fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(review));
}

//This function allows the user to mouse hover the black and white popcorn
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // popcorn images to use black and white.
    for (let star of stars) {
        star.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the popcorn image.
function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}


//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change the username, rating or movie review
function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editusername").value = review_array[item].username;
    document.getElementById("editreview").value = review_array[item].review;
    console.log(review_array[item].rating);
    displayColorStar('editstar', review_array[item].rating);
}

//This function displayS the correct number of colored popcorn
//based on the movie rating that is given in the user comment
function displayColorStar(classname, num) {
    var star = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of star) {
        p.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateReview() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        //var reviewModal = document.getElementById("editReviewModal");
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        //reviewModal.hide();
        updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].username = document.getElementById("editusername").value;
        review_array[currentIndex].review = document.getElementById("editreview").value;
        review_array[currentIndex].rating = rating;
        updateReview.onload = function() {
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}

//This function deletes the selected comment in a specific movie
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item]._id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}



//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showRestaurantReviews(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("rreview").textContent = "Review for " + restaurant_array[item].name;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurant.trim() == restaurant_array[item].name.trim()) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].username + " @ " + review_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var starr = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                starr += "<img src='images/starrating.png' style='width:50px' />";
            }
            starr += "<img src='images/delete.png' style='margin-left='20px'' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)'  />";
            starr += "<img src='images/edit.png' class='edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" +
                i + "' onClick='editReview(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', starr + "<br/>");
        }
    }
}