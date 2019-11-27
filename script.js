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



  function Inject() {
    var myFirstPick = _.sample(factList, 3);
    var mySecondPick = _.sample(myFirstPick);
  
    // people 
    $("#card-title1").empty()
    $("#card-title1").append(myFirstPick[0].People.Firstname + " " + myFirstPick[0].People.Lastname)
  
    $("#card-title2").empty()
    var ppl = RandomPeople()
    $("#card-title2").append(myFirstPick[1].People.Firstname + " " + myFirstPick[1].People.Lastname)
  
    $("#card-title3").empty()
    var ppl = RandomPeople()
    $("#card-title3").append(myFirstPick[2].People.Firstname + " " + myFirstPick[2].People.Lastname)
  
    // fact 
    $("#well").empty()
    $("#well").append("<h1>" + mySecondPick.Content + "</h1>")
      
    // debug 

    }

    // enelver le event listtenr a chaque inject, ou le reset it 
    function ShutUpAndListen () {
      const c1 = document.getElementById('c1');
      const c1name = c1.querySelector('.card-title').innerText
      c1.addEventListener('click', function (event) {
        alert('Vous avez cliqué sur la carte 1 : ' + c1name);
      });

      const c2 = document.getElementById('c2');
      const c2name = c2.querySelector('.card-title').innerText
      c2.addEventListener('click', function (event) {
        alert('Vous avez cliqué sur la carte 2 : ' + c2name);
      });

      const c3 = document.getElementById('c3');
      const c3name = c3.querySelector('.card-title').innerText
      c3.addEventListener('click', function (event) {
        alert('Vous avez cliqué sur la carte 3 : ' + c3name);
      });

    }










  function EntierAleatoire(min, max)
  {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  

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

