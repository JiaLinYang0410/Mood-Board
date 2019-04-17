function theme(color){
    $("img").css("background-color", color);
    $("h1").css("color", color);
    $("p").css("color", color);
}
function changeImg(link){
    $("img").attr("src",link);
}
var lovely = "lovely";
var shook = "shook";
var confused = "confused";
var stressed = "stressed";
var lovelyPics=["https://data.whicdn.com/images/299184109/original.gif"];
var shookPics=["https://cdn-images-1.medium.com/max/1200/0*QcCb6dJ_ZgPHg5jn.jpg"];
var confusedPics=["https://media.tenor.com/images/9eb1640969f31e96507db4e351692fd0/tenor.gif"];
var stressedPics=["https://66.media.tumblr.com/a94f40eb1eaa3b2c8a6450b9c6b32bf8/tumblr_nyv72oJK8Q1uc15e8o1_500.gif"];
$("button").click(function(){
    var mood = $("input").val();
    if(mood==="lovely"){
        $(".response").text("Stay that way");
        theme("pink");
        $("body").css("background-color", "pink");
        changeImg(lovelyPics[0]);
    }else if(mood==="shook"){
        $(".response").text("Go take a walk");
        theme("blue");
        $("body").css("background-color", "blue");
        changeImg(shookPics[0]);
    }else if(mood==="confused"){
        $(".response").text("Take a break");
        theme("purple");
        $("body").css("background-color", "purple");
        changeImg(confusedPics[0]);
    }else if(mood==="stressed"){
        $(".response").text("Everything will be okay");
        theme("red");
        $("body").css("background-color", "red");
        changeImg(stressedPics[0]);
    }else{
        $(".response").text("Please put one of the emotions listed!");
    }

  
});
