//#region FACT
var factList = [];

function Fact(id, content, people) {
	this.Id = id;
	this.Content = content;
	this.People = people; // objet People
	factList.push(this);
}

function ListFact() {
	factList.forEach(function (fact) {
		console.log(fact);
	});
}

function GetFactMaxId() {
	let max = 0;
	factList.forEach(fact => {
		if (fact.Id > max) {
			max = fact.Id;
		}
	});
	return max;
}
//#endregion FACT


//#region PEOPLE
var peopleList = [];
function People(id, firstname, lastname, facts, picture) {
	this.Id = id;
	this.Firstname = firstname;
    this.Lastname = lastname;
    this.Facts = facts; // array de objet fact [fact1, fact2, fact3]
	this.Picture = picture;
    peopleList.push(this);
}

//#endregion PEOPLE