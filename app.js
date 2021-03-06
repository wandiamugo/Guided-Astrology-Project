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

    //axios call to aztro horoscope api
        axios({
            method: "POST",
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: { day: 'today', sign: userSign },
            headers: {
                'X-RapidAPI-Key': 'eed9ec38e6mshf2212035b9daf72p1f530bjsn578e6c952838',
                'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
                // useQueryString: true,
            },
        }).then((response) => {
            //bringing response back with json so its understandable
            JSON.response;
            //horoscope reading from aztro api
            console.log("horoscope says: " + response.data.description);
            let horoText = response.data.description;

            // axios call to yoda translate
            axios({
                method: "POST",
                url: "https://yodish.p.rapidapi.com/yoda.json",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "yodish.p.rapidapi.com",
                    "x-rapidapi-key": "eed9ec38e6mshf2212035b9daf72p1f530bjsn578e6c952838",
                    useQueryString: true,
                },
                params: {
                    text: horoText,
                },
                data: {},
            }).then((response) => {
                let yodaTranslate = response.data.contents.translated
                console.log("Yoda says: " + yodaTranslate);
                localStorage.setItem("text for last horoscope text", userSign + " | " + today + " | " + yodaTranslate);

                $("h4").text(yodaTranslate);
            }).catch((error) => {
                console.log("yoda translate error: " + error);
            });


        }).catch((err) => {
            console.log("aztro horoscope error: " + err);
        });
    });
 //aquarius popup functions
 $(".aquaTrig").click(function () {
    $('.aquaHover').show();
});
$('.aquaHover').click(function () {
    $('.aquaHover').hide();
});

//pisces popup functions
$(".piscesTrig").click(function () {
    $('.piscesHover').show();
});
$('.piscesHover').click(function () {
    $('.piscesHover').hide();
});

//aries popup functions
$(".ariesTrig").click(function () {
    $('.ariesHover').show();
});
$('.ariesHover').click(function () {
    $('.ariesHover').hide();
});

//taurus popup functions
$(".taurusTrig").click(function () {
    $('.taurusHover').show();
});
$('.taurusHover').click(function () {
    $('.taurusHover').hide();
});

//gemini popup functions
$(".geminiTrig").click(function () {
    $('.geminiHover').show();
});
$('.geminiHover').click(function () {
    $('.geminiHover').hide();
});

//cancer popup functions
$(".cancerTrig").click(function () {
    $('.cancerHover').show();
});
$('.cancerHover').click(function () {
    $('.cancerHover').hide();
});

//leo popup functions
$(".leoTrig").click(function () {
    $('.leoHover').show();
});
$('.leoHover').click(function () {
    $('.leoHover').hide();
});

//virgo popup functions
$(".virgoTrig").click(function () {
    $('.virgoHover').show();
});
$('.virgoHover').click(function () {
    $('.virgoHover').hide();
});

//libra popup functions
$(".libraTrig").click(function () {
    $('.libraHover').show();
});
$('.libraHover').click(function () {
    $('.libraHover').hide();
});

//scorpio popup functions
$(".scorpioTrig").click(function () {
    $('.scorpioHover').show();
});
$('.scorpioHover').click(function () {
    $('.scorpioHover').hide();
});

//sagittarius popup functions
$(".sagittariusTrig").click(function () {
    $('.sagittariusHover').show();
});
$('.sagittariusHover').click(function () {
    $('.sagittariusHover').hide();
});

//capricorn popup functions
$(".capricornTrig").click(function () {
    $('.capricornHover').show();
});
$('.capricornHover').click(function () {
    $('.capricornHover').hide();
});

//popup X button, closing button
$('.popupCloseButton').click(function () {
    $('.hover_bkgr_fricc').hide();
});

});
