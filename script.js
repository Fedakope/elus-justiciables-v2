document.addEventListener("DOMContentLoaded", function(event) { 
  // Constitution de la page HTML  
  $(function(){ $("#navbar").load("components/navbar.html") })  
    $(function(){ $("#jumbotron").load("components/jumbotron.html") }) 
    // $(function(){ $("#footer").load("components/footer.html") }) 
    $(function(){ $("#people-cards").load("components/people-cards.html") }) 
    $(function(){ $("#well").load("components/well.html") }) 

  // Fonction du game
    Seeds()   

  });

  
  function InjectRandomFact() {
    $("#well").empty()
    $("#well").append("<h1>" + RandomFact().Content + "</h1>")
  }
   
  function InjectRandomPeople() {
    $("#card-title1").empty()
    var ppl = RandomPeople()
    $("#card-title1").append(ppl.Firstname + " " + ppl.Lastname)

    $("#card-title2").empty()
    var ppl = RandomPeople()
    $("#card-title2").append(ppl.Firstname + " " + ppl.Lastname)

    $("#card-title3").empty()
    var ppl = RandomPeople()
    $("#card-title3").append(ppl.Firstname + " " + ppl.Lastname)
  }

  

  // var id_exchange = $(this).attr("data-idExchange");





  // SWAL 

function SwalError() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous avez cliqué sur :',
    footer: 'LA bonne réponse était : '
  })
}
  

$(".card").on("click", function() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous avez cliqué sur :',
    footer: 'LA bonne réponse était : '
  })
});