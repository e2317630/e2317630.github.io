console.log("jquery-test.jsを読み込みました.")

let muisiki = $("#muisiki").text();
console.log(muisiki);

function fade() {
    $("#muisiki").fadeToggle();
}

$("h3").on("click", function () {
    console.log("h3タグがクリックされました.");
    $(this).next().slideToggle();
});

function customAnimate() {
    $("#ranranru").animate({
        "fontSize": "64px",
    }).animate({
        "fontSize": "20px",
    });
}

function toggle() {
    $("#magic").toggle();
}

function slide() {
    $("#magic").slideToggle();
}
