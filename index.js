let month_ = document.getElementById("month")
let week = document.getElementById("week")
let date = document.getElementById("date")
let year = document.getElementById("year")

// using date object

let d = new Date()

month_.innerHTML = d.toLocaleString('en', {month:"long"})

week.innerHTML = d.toLocaleString('en', {weekday : "long"})

// week.innerHTML = d.getDay()

date.innerHTML = d.getDate()

year.innerHTML = d.FullYear()