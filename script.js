$('button').click(function(){
var feeling = $(".mood").val();

   if(feeling==="happy") {
    happy();
}
    else if(feeling==="sad") {
     sad();
}
      else if(feeling==="angry") {
     angry();
}
         else if(feeling==="dissapointed") {
     dissapointed();
}
           else if(feeling==="jimmy") {
    jimmy();
}
});






var happyPics = [
   
    ];
function happy(){
    happyPics.forEach(function(happymood){
      $(".image").append("<img src=" + happymood + ">");
    });
    $(".image").html('<img src="https://www.mcdonalds.com/content/dam/usa/promotions/mobile/boosting-happy-meal_750x328.jpg">');
     $(".message").html("How are you happy");
      $("body").css("background-color", "gold");
    }
function sad(){
    $(".message").html("It be like that sometimes");
     $(".image").html('<img src="https://i.ytimg.com/vi/TmQ8mZqIF_I/maxresdefault.jpg">');
       $("body").css("background-color", "#4b0082");
    }
function angry(){
    $(".message").html("Sir ima need you to calm dwag porvabor.");
     $(".image").html('<img src="https://img.buzzfeed.com/buzzfeed-static/static/2016-02/7/16/campaign_images/webdr05/24-perfect-gordon-ramsay-gifs-perfect-for-every-s-2-25340-1454879765-9_dblbig.jpg">');
      $("body").css("background-color", "red");
    }
function dissapointed(){
    $(".message").html("Its an everyday thing dawg get used to it.");
     $(".image").html('<img src="https://dailykev.files.wordpress.com/2014/01/disappointment-e1389752442682.jpg">');
    }
function jimmy(){
     $(".message").html("Im weird please dont judge.");
     $(".image").html('<img src="https://i.redd.it/ynzq6ld5nyu21.jpg">');
      $("body").css("background-color", "black");
      $(".image").html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GVUsdgKD5VYOesnqttg3ReZTOxxustRWLFA44Yf3WsvMXyq_">');
       $(".image").html('<img src="https://i.imgur.com/wtZ1iPy.jpg">');
    }





