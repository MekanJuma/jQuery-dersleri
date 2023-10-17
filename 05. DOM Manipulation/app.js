// ! DOM Manipulation
// ! Selectors
// ! Events

$(document).ready(function () {
    $("#taskList").sortable();

    $("#newTask").on("keyup", function (e) {
        if (e.key == "Enter") {
            $("#addTask").click();
        }
    });

    $("#addTask").click(function () {
        const inputValue = $("#newTask").val();

        if (inputValue) {
            $("#taskList").prepend(`<li>
                    <div class="left-section">
                        <input type="checkbox" class="checkbox" />
                        <span class="task-title">${inputValue}</span>
                    </div>
                    <div class="right-section">
                        <button class="update">Update</button>
                        <button class="remove">Remove</button>
                    </div>
                </li>`);

            $("#newTask").val("");
        }
    });

    $("#taskList").on("click", ".remove", function () {
        $(this).closest("li").remove();
    });

    $("#taskList").on("click", ".update", function () {
        const parentList = $(this).closest("li");
        const taskTitle = parentList.find("span");
        const newText = prompt("Update your task title: ", taskTitle.text());

        if (newText) {
            taskTitle.text(newText);
        }
    });

    $("#taskList").on("click", ".checkbox, .task-title", function (e) {
        const parentList = $(this).closest("li");
        const chbx = parentList.find('input[type="checkbox"]');

        if (e.target.type != "checkbox") {
            // chbx.prop("checked"); false
            chbx.prop("checked", !chbx.prop("checked"));
        }

        if (chbx.prop("checked")) {
            parentList.addClass("completed");
        } else {
            parentList.removeClass("completed");
        }
    });
});
