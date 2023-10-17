// ! Event Handlers

$(document).ready(() => {
    // ? click event
    $("#clickButton").click(() => {
        $("#clickCard").css("background-color", "#f2f2f2");
    });

    // ? hover event
    $("#hoverCard").hover(
        () => {
            $("#hoverCard").css("background-color", "#e6e6e6");
        },
        () => {
            $("#hoverCard").css("background-color", "");
        }
    );

    // ? Keyup event
    $("#inputField").keyup(function () {
        const value = $(this).val();
        if (value) {
            $("#keyUpCard").css("background-color", "#e6f7ff");
            $("#displayText").text("Siz yazyanyz: " + value);
        } else {
            $("#keyUpCard").css("background-color", "");
            $("#displayText").text("");
        }
    });

    // ? Double Click Event
    $("#dblClickButton").dblclick(() => {
        $("#dblClickCard").css("background-color", "#f2f2f2");
    });

    // ? Mouse Enter & Leave Event
    $("#mouseCard")
        .mouseenter(() => {
            $("#mouseCard").css("background-color", "#ffcccb");
        })
        .mouseleave(() => {
            $("#mouseCard").css("background-color", "");
        });

    // ? Focus & Blur Event
    $("#inputFocus")
        .focus(() => {
            $("#focusCard").css("background-color", "#d9ffcc");
        })
        .blur(() => {
            $("#focusCard").css("background-color", "");
        });

    // ? Change Event
    $("#selectBox").change(() => {
        const value = $("#selectBox").val();
        $("#changeCard").text("You selected: " + value);
    });

    // ? Window Scroll Event
    $(window).scroll(() => {
        const scrollPosition = $(window).scrollTop();
        $("#scrollCard").text("You've scrolled " + scrollPosition + " pixels.");
    });

    // ? Window Resize Event
    $(window).resize(() => {
        const width = $(window).width();
        $("#resizeCard").text("Window width is now: " + width);
    });
});
