$('.canvas-toggle').hide();

 function sideNav() {

   if ($(window).width() <= 1133) {

     $('.sidebar').hide();

   

   } else {

     $('.sidebar').show();

  

   }

 }

 $('.canvas-toggle').click(function() {
   
 
 });


 $(window).resize(function() {

   sideNav();

 });


 ///////////////////////////////Contact form

 
// $('form').on('submit', (e) =>{
//   e.preventDefault();

//   const name = $('#nameInput').val().trim();
//   const email = $('#emailInput').val().trim();
//   // const phone = $('#phoneInput').val().trim();
//   const subject = $('#workInput').val().trim();
//   const message = $('#messageInput').val().trim();



//   const data = {
//     name,
//     email,
//     // phone,
//     subject,
//     message
//   };
// console.log(data)
//   $.post('/email',data, function(){
//     console.log("server got data");
//   });
// });




 ///////////////////////////////////////////Contact form

 $("#popBtn").click(function(){
  $.getJSON("/all", function(data){
  //for each entry of that json
  console.log(data);
  for (var i = 0; i < data.length; i++){
    // Approach each of the properties
    $("#results").append("<tr><td>" + data[i].name + "</td>" +
    "<td>" + data[i].title + "</td>" +
    "<td>" + data[i].link + "</td></tr>" );
  }
}); 
});

// When the #clear-all button is pressed
$("#clear").on("click", function() {
  // Make an AJAX GET request to delete the notes from the db
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/clearall",
    // On a successful call, clear the #results section
    success: function(response) {
      $("#results").empty();
    }
  });
});

$("#addD").on("click", function(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "/scrape",
    // On a successful call, database gets added
    success: function(response) {
      $("#results").alert("Added to database");
    }
  });
})

 


 