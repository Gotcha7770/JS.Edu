let seconds1 = 0;
let minutes1 = 10;
let hours1 = 10;
let days1 = 9;
let months1 = 5;
let years1 = 2020;

let seconds2 = 30;
let minutes2 = 5;
let hours2 = 37;
let days2 = 18;
let months2 = 10;
let years2 = 1987;

let seconds3 = 0;
let minutes3 = 0;
let hours3 = 0;
let days3 = 0;
let months3 = 0;
let years3 = 0;

function subtractDate() {
    seconds3 = seconds1 - seconds2;
    if (seconds3 < 0) {
        seconds3 = 60 - seconds3;
        minutes3--;
    }

    minutes3 += minutes1 - minutes2;
    if (minutes3 < 0) {
        minutes3 = 60 - minutes3;
        hours3--;
    }
    //...
}

//////////////////////////////////////////////////

let date = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    months: 0,
    years: 0
    //tick
    //timeZone?
    //etc
};

function subtractDate(date1, date2) {
    
    return {
        seconds: date1.seconds - date2 
    };
}

//////////////////////////////////////////////////

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

//////////////////////////////////////////////////

export const secondsInMinute = 60;
export const secondsInHour = secondsInMinute * 60;
export const secondsInDay = secondsInHour * 24;

export default class Date {
    constructor(years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0) {
        this.years = years;
        this.months = months;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static 

    static fromSeconds(seconds)
    {
        let days = seconds / secondsInDay;

        return new Date(0,0,days, hours, );
    }

    subtract(date) {
        return new Date(this.years - date.years);
    }

    add(date) {

    }

    equals(date) {
        return this === date
            || (this.years == date.years
            && this.months == date.months
            && this.days == date.days)
            //..
    }
}
