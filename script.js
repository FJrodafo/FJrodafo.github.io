setInterval(() => {
    let current = new Date()
    let day = current.getUTCDate()
    let month = current.getUTCMonth()
    let year = current.getUTCFullYear()
    let hour = current.getUTCHours()
    let min = current.getUTCMinutes()
    let sec = current.getUTCSeconds()

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + (month + 1)
    } else {
        month = (month + 1)
    }

    if (hour < 10) {
        hour = "0" + hour
    }

    if (min < 10) {
        min = "0" + min
    }

    if (sec < 10) {
        sec = "0" + sec
    }

    document.getElementById("clock").innerHTML = day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec + " UTC"
});
