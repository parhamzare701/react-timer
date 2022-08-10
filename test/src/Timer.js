import React from 'react'
function Timer() {
    function set() {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";

        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session;
        console.log(time);
        document.querySelector(".span").textContent = time;
    }
    setInterval(() => {
        set()
    }, 1000);
    return (
        <div className="stopwatch">
            <div className='stopwatch__inner'>
                <div className="stopwatch__timer">
                    <span className='span'>{ }</span>
                </div>
            </div>
        </div>
    );
}
export default Timer;
/*var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
var session = "AM";

if(h == 0){
    h = 12;
}

if(h > 12){
    h = h - 12;
    session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("MyClockDisplay").innerText = time;
document.getElementById("MyClockDisplay").textContent = time;

setTimeout(showTime, 1000);

}
*/