var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Places = /** @class */ (function () {
    function Places(created, title, city, zip, address, img) {
        this.created = created;
        this.title = title;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
    }
    ;
    Places.prototype.location = function () {
        return this.address + ", " + this.zip + " " + this.city;
    };
    Places.prototype.display = function () {
        return "\n\t  <div class=\"col col-12 col-md-6 col-xl-3 my-2\">\n      <div class=\"card\">\n        <img src=\"img/" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"$(this.img)\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.title + "</h5>\n          <p class=\"card-text\">" + this.location() + "</p>\n          <p class=\"cart-text text-secondary\"><small>Created date: " + this.created + "</small></p>\n        </div>\n      </div>\n    </div>";
    };
    return Places;
}());
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(created, title, city, zip, address, img, eventDate, eventTime, ticketPrice, www) {
        var _this = _super.call(this, created, title, city, zip, address, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.www = www;
        return _this;
    }
    Events.prototype.display = function () {
        return "\n\t  <div class=\"col col-12 col-md-6 col-xl-3 my-2\">\n      <div class=\"card\">\n        <img src=\"img/" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"$(this.img)\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.title + "</h5>\n          <p class=\"card-text\">" + _super.prototype.location.call(this) + "</p>\n          <p class=\"card-text\">" + this.eventDate + ", " + this.eventTime + "</p>\n          <p class=\"card-text\">Tickets: " + this.ticketPrice + " | <a href=\"" + this.www + "\" target=\"_blank\" class=\"\">link</a></p>\n          <p class=\"cart-text text-secondary\"><small>Created date: " + this.created + "</small></p>\n        </div>\n      </div>\n    </div>";
    };
    return Events;
}(Places));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(created, title, city, zip, address, img, kitchen, phone, www) {
        var _this = _super.call(this, created, title, city, zip, address, img) || this;
        _this.kitchen = kitchen;
        _this.phone = phone;
        _this.www = www;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return "\n\t  <div class=\"col col-12 col-md-6 col-xl-3 my-2\">\n      <div class=\"card\">\n        <img src=\"img/" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"$(this.img)\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">" + this.title + "</h5>\n          <p class=\"card-text\">" + _super.prototype.location.call(this) + "</p>\n          <p class=\"card-text\">Kitchen: <span class=\"text-danger\">" + this.kitchen + "</span</p>\n          <p class=\"card-text\">&#128222; " + this.phone + "</p>\n          <p class=\"card-text\"><a href=\"" + this.www + "\" target=\"_blank\" class=\"\">link</a></p>\n          <p class=\"cart-text text-secondary\"><small>Created date: " + this.created + "</small></p>\n        </div>\n      </div>\n    </div>";
    };
    return Restaurants;
}(Places));
//Places
var karlskirche = new Places(new Date(2019, 8, 12, 17, 02), "St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "StCharlesChurch.jpg");
var zoo = new Places(new Date(2019, 9, 12, 11, 11), "Zoo Schönbrunn", "Vienna", "1130", "Marxingstrasse 13b", "ZooSchoenbrunn.jpg");
var cf1 = new Places(new Date(2019, 6, 12, 18, 02), "CodeFactory Central", "Vienna", "1050", "Kettenbrückengasse 23/2/12", "cf1.jpg");
var cf2 = new Places(new Date(2019, 9, 09, 9, 00), "CodeFactory 2", "Vienna", "1150", "Stutterheimstrasse 16-18/3/17b", "cf2.jpg");
//Restaurants
var lemon = new Restaurants(new Date(2019, 9, 11, 12, 30), "Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "LemonLeafThaiRestaurant.png", "Thai", "+43(1)5812308", "http://www.lemonleaf.at");
var sixta = new Restaurants(new Date(2019, 9, 10, 18, 02), "SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "Sixta.png", "International", "+43-158-528-56", "http://www.sixta-restaurant.at/");
//Events
var kris = new Events(new Date(2019, 9, 18, 9, 01), "Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "KrisKristofferson.jpg", "Fr., 15.11.2019", "20:00", "58.50 EUR", "http://kriskristofferson.com/");
var lenny = new Events(new Date(2019, 9, 18, 9, 07), "Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "LennyKravitz.jpg", "Sat, 09.12.2019", "19:30", "€ 47,80", "http://lennykravitz.com/");
//all in 1 array
var blogposts = [karlskirche, zoo, cf1, cf2, lemon, sixta, kris, lenny];
console.log(String.fromCharCode(8 * 5 + 0, 11 * 6 + 1, 5 * 7 + 6, 4 * 8 + 0, 7 * 9 + 5, 9 * 10 + 7, 10 * 11 + 8, 8 * 12 + 5, 2 * 13 + 6, 5 * 14 + 12));
blogposts.sort(function (a, b) { return a.created - b.created; });
function updateHTML() {
    document.getElementById('content').innerHTML = "";
    for (var _i = 0, blogposts_1 = blogposts; _i < blogposts_1.length; _i++) {
        var obj = blogposts_1[_i];
        document.getElementById('content').innerHTML += obj.display();
    }
}
updateHTML();
