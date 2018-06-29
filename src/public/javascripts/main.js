var formInputsArray = [];

function generateList() {
    $("#formOptionsChosen").empty();
    formInputsArray.forEach(function (element) {
        $("<li>" + element + "</li>").appendTo("#formOptionsChosen");
    })
}

$(document).ready(function () {
    
    //Button events for adding form elements to the formInputsArray
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
        //Stop form from submitting and use jQuery to POST the formInputsArray object instead
        event.preventDefault();
        
        let postMethod = $.post("/", { elements: formInputsArray })

        //Once the post is done, work with returned data.
        postMethod.done(function (data) {
            $("#result").html();
            $("#result").text(data);
        })

    })
});