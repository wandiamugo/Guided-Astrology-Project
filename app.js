$(document).ready(function () {

    //recording date for local storage
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    today = mm + '/' + dd + '/' + yyyy;

    console.log("today's date: " + today);

    //variable to set up submit function based on horoscope signs
    let userInput = $("a");

    //local storage hold for previous sign
    let lastselectSign = localStorage.getItem("last selected sign: ");
    console.log("last selected sign brought back: " + lastselectSign);

    var lastHoroText = localStorage.getItem("text for last horoscope text");
    console.log("last selected sign with date of horoscope and the horoscope: " + lastHoroText);

    //put localstorage to page in text
    $("#last-select").text("Last selected Sign: " + lastselectSign);

    //if last selected sign has no local storage it will hide the text on the website page
    if (lastselectSign === null) {
        $("#last-select").attr("class", "hide");
    };

    //submit function to call api when input is clicked
    userInput.on("click", function () {

        //variable for user sign input from buttons
        let userSign = $(this).attr("id");
        console.log("user selected: " + userSign);

        //sending user sign to localstorage
        localStorage.setItem("last selected sign: ", userSign);

        //clears previous text data from horoscope
        $("h4").text("");
    })    
});  