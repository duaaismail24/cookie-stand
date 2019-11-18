  'use strict';
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {

  country: 'Seattle',
  total: 0,
  min: 23,
  max: 65,
  avarge: 6.3,
  customer: 0,
  numberOfCookies: [],


//   //  getRandomNumber: function(min, max) {
//   //       this.getRandomNumber = getRandomNumber(23, 65);

  hourlyCustomers: function () {
return parseInt(Math.floor((Math.random() * (this.max - this.min + 1)) + this.min));
  },


  getNumber: function () {
    for (var t = 0; t < times.length; t++) {
      this.customer = this.hourlyCustomers();
 var c =parseInt(this.avarge * this.customer);
      this.numberOfCookies.push(c);
      this.total = this.numberOfCookies[t] + this.total;
    }
  },


  //     fumberOfCookies = (avg * getRandomNumber);or (i = 0; i < Times.length; i+) 
  //   n

  render: function () {
    var container = document.getElementById('linking');
    //var articleEl = document.createElement('article');
    // container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    h2El.textContent = this.country;
    // articleEl.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for (let d = 0; d < times.length; d++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
      ulEl.appendChild(liEl);
    }
    var sumOfEL = document.createElement(liEl);
    liEl.textContent = 'Total' + ' : ' + this.total + `cookies`;
    ulEl.appendChild(liEl);
    container.appendChild(ulEl);
  

seattle.getNumber();
seattle.render();
console.table(seattle);

// create ul and append it to article


  //  getRandomNumber: function(min, max) {
  //       this.getRandomNumber = getRandomNumber(23, 65);

  hourlyCustomers();
// return parseInt(Math.floor((Math.random() * (this.max - this.min + 1)) + this.min));

  getNumber();
//     for (var t = 0; t < times.length; t++) {
//       this.customer = this.hourlyCustomers();
//  var c =parseInt(this.avarge * this.customer);
//       this.numberOfCookies.push(c);
//       this.total = this.numberOfCookies[t] + this.total;
//     }
//   },


  //     fumberOfCookies = (avg * getRandomNumber);or (i = 0; i < Times.length; i+) 
  //   n

  render();
    // var container = document.getElementById('linking');
    // //var articleEl = document.createElement('article');
    // //container.appendChild(articleEl);
    // var h2El = document.createElement('h2');
    // h2El.textContent = this.country;
    // // articleEl.appendChild(h2El);
    // var ulEl = document.createElement('ul');
    // for (let d = 0; d < times.length; d++) {
    //   var liEl = document.createElement('li');
    //   liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
    //   ulEl.appendChild(liEl);
    
    // var sumOfEL = document.createElement(liEl);
    liEl.textContent = 'Total' + ' : ' + this.total + `cookies`;
    ulEl.appendChild(liEl);
    container.appendChild(ulEl);


tokyo.getNumber();
tokyo.render();
console.table(tokyo);

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var dubai = {

  country: 'Dubai',
  total: 0,
  min: 23,
  max: 65,
  avarge: 6.3,
  customer: 0,
  numberOfCookies: [],


//   //  getRandomNumber: function(min, max) {
//   //       this.getRandomNumber = getRandomNumber(23, 65);

  hourlyCustomers: function () {
return parseInt(Math.floor((Math.random() * (this.max - this.min + 1)) + this.min));
  },


  getNumber: function () {
    for (var t = 0; t < times.length; t++) {
      this.customer = this.hourlyCustomers();
 var c =parseInt(this.avarge * this.customer);
      this.numberOfCookies.push(c);
      this.total = this.numberOfCookies[t] + this.total;
    }
  },



  render: function () {
    var container = document.getElementById('linking');
    //var articleEl = document.createElement('article');
    //container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    h2El.textContent = this.country;
    // articleEl.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for (let d = 0; d < times.length; d++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
      ulEl.appendChild(liEl);
    }
    // var sumOfEL = document.createElement(liEl);
    liEl.textContent = 'Total' + ' : ' + this.total + `cookies`;
    ulEl.appendChild(liEl);
    container.appendChild(ulEl);
  },
};
dubai.getNumber();
dubai.render();
console.table(dubai);

// var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var paris = {

  country: 'Paris',
  total: 0,
  min: 23,
  max: 65,
  avarge: 6.3,
  customer: 0,
  numberOfCookies: [],


//   //  getRandomNumber: function(min, max) {
//   //       this.getRandomNumber = getRandomNumber(23, 65);

  hourlyCustomers: function () {
return parseInt(Math.floor((Math.random() * (this.max - this.min + 1)) + this.min));
  },


  getNumber: function () {
    for (var t = 0; t < times.length; t++) {
      this.customer = this.hourlyCustomers();
 var c =parseInt(this.avarge * this.customer);
      this.numberOfCookies.push(c);
      this.total = this.numberOfCookies[t] + this.total;
    }
  },


//   //     fumberOfCookies = (avg * getRandomNumber);or (i = 0; i < Times.length; i+) 
//   //   n

  render: function () {
    var container = document.getElementById('linking');
    //var articleEl = document.createElement('article');
    //container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    h2El.textContent = this.country;
    // articleEl.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for (let d = 0; d < times.length; d++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
      ulEl.appendChild(liEl);
    }
    var sumOfEL = document.createElement(liEl);
    liEl.textContent = 'Total' + ' : ' + this.total + `cookies`;
    ulEl.appendChild(liEl);
    container.appendChild(ulEl);
  },
};
paris.getNumber();
paris.render();
console.table(paris);

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var lima = {

  country: 'Lima',
  total: 0,
  min: 23,
  max: 65,
  avarge: 6.3,
  customer: 0,
  numberOfCookies: [],


  //  getRandomNumber: function(min, max) {
  //       this.getRandomNumber = getRandomNumber(23, 65);

  hourlyCustomers: function () {
return parseInt(Math.floor((Math.random() * (this.max - this.min + 1)) + this.min));
  },


  getNumber: function () {
    for (var t = 0; t < times.length; t++) {
      this.customer = this.hourlyCustomers();
 var c =parseInt(this.avarge * this.customer);
      this.numberOfCookies.push(c);
      this.total = this.numberOfCookies[t] + this.total;
    }
  },


  //     fumberOfCookies = (avg * getRandomNumber);or (i = 0; i < Times.length; i+) 
  //   n

  render: function () {
    var container = document.getElementById('linking');
    //var articleEl = document.createElement('article');
    //container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    h2El.textContent = this.country;
    // articleEl.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for (let d = 0; d < times.length; d++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
      ulEl.appendChild(liEl);
    }
    // var sumOfEL = document.createElement(liEl);
    liEl.textContent = 'Total' + ' : ' + this.total + `cookies`;
    ulEl.appendChild(liEl);
    container.appendChild(ulEl);
  }
lima.getNumber();
lima.render();
console.table(lima);
  