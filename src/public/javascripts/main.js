var formInputsArray = [];

function generateList() {
    $("#formOptionsChosen").empty();
    formInputsArray.forEach(function (element) {
        $("<li>" + element + "</li>").appendTo("#formOptionsChosen");
    })
}

$(document).ready(function () {
    $("#text").on("click", function () {
        formInputsArray.push("text")
        generateList();

    })

    $("#select").on("click", function () {
        formInputsArray.push("select")
        generateList();
    })

    $("#label").on("click", function () {
        formInputsArray.push("label")
        generateList();
    })

    //Submit form AJAX-style and work with results.
    $("#elementsForm").submit(function (event) {
        event.preventDefault();
        let postMethod = $.post("/", { elements: formInputsArray })

        postMethod.done(function (data) {
            $("#result").html();
            $("#result").text(data);
        })

    })
});