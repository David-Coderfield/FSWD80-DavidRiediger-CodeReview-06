class Places {
	constructor(
		public created:Date,
		public title:string,
		public city:string,
		public zip:string,
		public address:string,
		public img:string){};
  location() {
    return `${this.address}, ${this.zip} ${this.city}`
  }

	display() {return `
	  <div class="col col-12 col-md-6 col-xl-3 my-2">
      <div class="card">
        <img src="img/${this.img}" class="card-img-top d-none d-md-block" alt="$(this.img)">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.location()}</p>
          <p class="cart-text text-secondary"><small>Created date: ${this.created}</small></p>
        </div>
      </div>
    </div>`;
	}  
}

class Events extends Places {
	constructor(
		created:Date,
		title:string,
		city:string,
		zip:string,
		address:string,
		img:string,
		public eventDate:string,
		public eventTime:string,
		public ticketPrice:string,
		public www:string){
		super(created, title, city, zip, address, img)
	}
	
	display() {return `
	  <div class="col col-12 col-md-6 col-xl-3 my-2">
      <div class="card">
        <img src="img/${this.img}" class="card-img-top d-none d-md-block" alt="$(this.img)">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${super.location()}</p>
          <p class="card-text">${this.eventDate}, ${this.eventTime}</p>
          <p class="card-text">Tickets: ${this.ticketPrice} | <a href="${this.www}" target="_blank" class="">link</a></p>
          <p class="cart-text text-secondary"><small>Created date: ${this.created}</small></p>
        </div>
      </div>
    </div>`;
	}
}

class Restaurants extends Places {
	constructor(
		created:Date,
		title:string,
		city:string,
		zip:string,
		address:string,
		img:string,
		public kitchen:string,
		public phone:string,
		public www:string){
		super(created, title, city, zip, address, img);
	}
	display() {return `
	  <div class="col col-12 col-md-6 col-xl-3 my-2">
      <div class="card">
        <img src="img/${this.img}" class="card-img-top d-none d-md-block" alt="$(this.img)">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${super.location()}</p>
          <p class="card-text">Kitchen: <span class="text-danger">${this.kitchen}</span</p>
          <p class="card-text">&#128222; ${this.phone}</p>
          <p class="card-text"><a href="${this.www}" target="_blank" class="">link</a></p>
          <p class="cart-text text-secondary"><small>Created date: ${this.created}</small></p>
        </div>
      </div>
    </div>`;
	}
}

//Places
let karlskirche = new Places(new Date(2019,8,12,17,02), "St. Charles Church","Vienna","1010","Karlsplatz 1","StCharlesChurch.jpg");
let zoo = new Places(new Date(2019,9,12,11,11), "Zoo Schönbrunn","Vienna","1130","Marxingstrasse 13b","ZooSchoenbrunn.jpg");
let cf1 = new Places(new Date(2019,6,12,18,02), "CodeFactory Central","Vienna","1050","Kettenbrückengasse 23/2/12","cf1.jpg");
let cf2 = new Places(new Date(2019,9,09,9,00), "CodeFactory 2","Vienna","1150","Stutterheimstrasse 16-18/3/17b","cf2.jpg");
//Restaurants
let lemon = new Restaurants(new Date(2019,9,11,12,30), "Lemon Leaf Thai Restaurant","Vienna","1050","Kettenbrückengasse 19","LemonLeafThaiRestaurant.png","Thai","+43(1)5812308","http://www.lemonleaf.at");
let sixta = new Restaurants(new Date(2019,9,10,18,02), "SIXTA","Vienna","1050","Schönbrunner Straße 21","Sixta.png","International","+43-158-528-56","http://www.sixta-restaurant.at/");
//Events
let kris = new Events(new Date(2019,9,18,9,01), "Kris Kristofferson","Vienna","1150","Wiener Stadthalle, Halle F, Roland Rainer Platz 1","KrisKristofferson.jpg","Fr., 15.11.2019","20:00","58.50 EUR","http://kriskristofferson.com/");
let lenny = new Events(new Date(2019,9,18,9,07), "Lenny Kravitz","Vienna","1150","Wiener Stadthalle, Halle D, Roland Rainer Platz 1","LennyKravitz.jpg","Sat, 09.12.2019","19:30","€ 47,80","http://lennykravitz.com/");
//all in 1 array
var blogposts: any[] = [karlskirche, zoo, cf1, cf2, lemon, sixta, kris, lenny];
console.log(String.fromCharCode(8*5+0,11*6+1,5*7+6,4*8+0,7*9+5,9*10+7,10*11+8,8*12+5,2*13+6,5*14+12));
blogposts.sort((a,b)=>b.created-a.created);

function updateHTML() {
	document.getElementById('content').innerHTML = "";
	for (let obj of blogposts) {
		document.getElementById('content').innerHTML += obj.display();
	}
}
updateHTML();