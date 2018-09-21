$("#submitContact").on("click", function(){

        $("#newName").val(""),
        $("#newEmail").val(""),
        $("#newMessage").val("")
    
    alert("Message delivered");
})

$("#movieAppButton").on("click", function(){
    location.replace("https://seanmcooper.github.io/moviePal/")
})
$("#caterAppButton").on("click", function(){
    location.replace("https://cater-app.herokuapp.com/")
})