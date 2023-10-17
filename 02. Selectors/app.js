// ! Selectors
// document.getElementById
// document.querySelector
$(document).ready(function () {
    // tag name
    let parags = $("p");
    console.log(parags);

    // class name
    $(".inner-div").css("background-color", "#eee");
    console.log($(".inner-div"));

    // id
    console.log($("#spanText").text());
    $("#spanText").text("Taze text");

    // Nested
    $("div p").css("color", "red");

    $(".inner-div > p").css("border", "2px solid blue");
});
