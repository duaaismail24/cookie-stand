'use strict'

 var Seattle ={ 

country: 'Seattle',
total : 0,
min : 23,
 max : 65,
 avarge : 6.3,
 customer : 0 ,
 numberOfCookies :[],


 //  getRandomNumber: function(min, max) {
//       this.getRandomNumber = getRandomNumber(23, 65);
    
    hourlyCustomers: function(){
        return Math.floor((Math.random() * (this.max - this.min + 1)) + this.min); 
    
    }

    getRandomNumber: function(min, max) {
              this.getRandomNumber = getRandomNumber(23, 65);
var times = ['6am' , '7am' , '8am' , '9am' , '10am' ,'11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm'],
    
getNumber: function() {
    for (var t = 0; t < times.length; t++) {
        this.customer = getRandomNumberr ();
        
     this.numberOfCookies.push(this.avarge*customer);
     this.total = this.numberOfCookies[t] + this.total;
    }
}
    },

    
    //     fumberOfCookies = (avg * getRandomNumber);or (i = 0; i < Times.length; i+) 
    //   n
    
    render: function() {
        var container = document.getElementById('linking');
        // create and append article to the container
        var articleEl = document.createElement("article");
        container.appendChild(articleEl);
        var h2El = document.createElement("h2");
        articleEl.appendChild(h2El);
        h2El.textContent = this.country;
        // create p with frankie age string and append it to article
        var ulEl = document.createElement("ul");
        articleEl.appendChild(ulEl);
        for (let d = 0; d < times.length; d++) {
            var liEl = document.createElement('li');
            ulEl.appendChild("liEL");
            liEl.textContent = times[d] + this.numberOfCookies[d] + 'cookies';
        }
        var sumOfEL = document.createElement('sumOfEL');
        ulEl.appendChild(sumOfEL);
        liEl.textContent = "Total " + ": " +this.total +` cookies` ;  
    };
    Seattle.getNumber();
    Seattle.render();
    console.table(Seattle);
    
        // create ul and append it to article 
