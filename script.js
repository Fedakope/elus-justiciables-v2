// EVENT LISTENNER 

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



   var myCard = document.getElementsByClassName('card');
    for(var i=0; i < myCard.length; i++)
      {
        myCard[i].onclick = function()
        {
         //var monTitre =  myCard.querySelector('h5')
          // SwalError(monTitre)
          console.log('bonjour')
        }
      }   




  function EntierAleatoire(min, max)
  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function InjectRandomFact() {
    //fact
    var randomFact = RandomFact()
    $("#well").empty()
    $("#well").append("<h1>" + randomFact.Content + "</h1>")

    //people
    $("#card-title1").empty()
    $("#card-title2").empty()
    $("#card-title3").empty()
    var entierAleatoire = EntierAleatoire(1, 3);
    $("#card-title" + entierAleatoire ).empty()
    $("#card-title" + entierAleatoire).append(randomFact.People.Firstname + " " + randomFact.People.Lastname)


    // event listenner 



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

function SwalError(people) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous avez cliqué sur :' + people,
    footer: 'La bonne réponse était : '
  })
}
  

$(".card").on("click", function() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Vous avez cliqué sur :',
    footer: 'La bonne réponse était : '
  })
});