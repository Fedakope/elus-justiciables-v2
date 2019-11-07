document.addEventListener("DOMContentLoaded", function(event) { 
    $(function(){ $("#navbar").load("components/navbar.html") })  
    $(function(){ $("#jumbotron").load("components/jumbotron.html") }) 
    // $(function(){ $("#footer").load("components/footer.html") }) 
    $(function(){ $("#people-cards").load("components/people-cards.html") }) 
    $(function(){ $("#well").load("components/well.html") }) 
  });

  
  function InjectRandomFact() {
    $("#well").empty()
    $("#well").append("<h1>" + RandomFact().Content + "</h1>")
  }
   

  