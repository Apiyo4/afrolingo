var words = ["kina", "shona", "sina", "haki", "rika", "dhani", "rinda", "shinda", "aki", "hiki", "ni", "si", "na", "shina", "kasi", "insha"];
var guess = $("input#input1").val();
var marks = 0;
$(document).ready(function() {
  $("#contactus").click(function(){
    $("#contact").show();
    $(".container-fluid").hide();
  })
  $("button#button1").click(function() {
    guess = $("input#input1").val();
    if (words.includes(guess)) {
      $(".part1").show();
      $("#word").append('<p class = "space">' + guess + '</p>');
      $("input#input1").val("");
      $("p#score").text(marks+=1);
      if(marks < 9){
        $("img#img1").show();
      }else if(marks < 16){
        $("img#img2").show();
      }else{
        alert("You won, game over!")
      }
    }else {$("input#input1").val("");}
  })
});
