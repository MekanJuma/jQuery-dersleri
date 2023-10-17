// ! Traversing
// * element.parent
// * element.children
// * element.nextSibling

$(document).ready(() => {
    // ? find()
    let list = $("ul").find("li");
    console.log(list);
    list.css("color", "red");

    // ? closest()
    $(".highlight").closest(".container").css("border", "3px solid blue");

    // ? next()
    let nextIntro = $(".intro").next();
    console.log(nextIntro);
    nextIntro.css("font-weight", "bold");

    // ? prev()
    let prevIntro = $("#nested-div").prev();
    console.log(prevIntro);
    prevIntro.css("font-style", "italic");

    // ? siblings()
    // $(".intro").siblings().css("text-decoration", "underline");
    $(".intro").siblings(":last").css("text-decoration", "underline");

    // ? parent()
    $("li.highlight").parent().css("list-style-type", "circle");

    // ? children()
    $("#nested-div").children().css("font-size", "28px");
});
