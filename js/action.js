function openNav() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("hide").style.transform = "translateX(222px)"
}

function closeNav() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("hide").style.transform = "translateX(-222px)"
}

function messageCao() {
    window.open("http://m.me/Christian.Cao.Tri.Thao", "_blank");
}

function messageHung() {
    window.open("http://m.me/nghia.hung.710", "_blank");
}

function messageBao() {
    window.open("http://m.me/baoduy2408", "_blank");
}

function messageNhat() {
    window.open("http://m.me/lehoangnhatduy2000", "_blank");
}

function messageKhoi() {
    window.open("http://m.me/khoi.611", "_blank");
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        year = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["day", "month", "date", "year", "hour", "min", "sec", "pe"];
    var values = [week[dname], months[mo], dnum.pad(2), year, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function fadeOut(id, time) {
    var fadeTarget = document.getElementById(id);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
    setTimeout(function () {
        fadeTarget.parentNode.removeChild(fadeTarget);;
    }, time);
}

function sendEmail(event) {
    var name = document.getElementById("name").value;
    var room = document.getElementById("room").value;
    var mailBody = document.getElementById("myText").value;

    if (name == "" || room == "" || mailBody == "") {
        document.getElementById("error").style.display = "inline-block";
        fadeOut("error", 3000);
    } else {
        var mailContent = "Name: " + name + ". \nRoom Number: " + room + ". \nMessage: " + mailBody;
        event.preventDefault();
        Email.send({
            SecureToken: "2fb6f6b2-bf99-4f1c-8400-18e8632fffd9",
            From: "myhomefeedback@gmail.com",
            To: "lehoangnhatduy2000@gmail.com",
            Subject: "Message From myHome",
            Body: mailContent
        }).then(function (message) {
            if (message == "OK") {
                document.getElementById("success").style.display = "inline-block";
                fadeOut("success", 3000);
                document.getElementById("name").value = " ";
                document.getElementById("room").value = " ";
                document.getElementById("myText").value = " ";
            } else {
                document.getElementById("failure").style.display = "inline-block";
                fadeOut("failure", 4000);
            }
        });
    }
}

window.onload = function () {

    var radio1 = document.getElementById('star1');
    var radio2 = document.getElementById('star2');
    var radio3 = document.getElementById('star3');
    var radio4 = document.getElementById('star4');
    var radio5 = document.getElementById('star5');

    radio1.onclick = check;
    radio2.onclick = check;
    radio3.onclick = check;
    radio4.onclick = check;
    radio5.onclick = check;

}

function check() {
    var radios = document.getElementsByName('rate');
    var value;

    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            value = radios[i].value;
            document.getElementById("feedback").style.visibility = "visible";
        }
    }
}