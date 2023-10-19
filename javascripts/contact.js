var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};


const form = document.getElementById("theform");

const handelSendingMessage = (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const messagevalue = document.getElementById("message").value;


  e.preventDefault();
    Email.send({
      Host: "smtp.gmail.com",
      Username: "iotapp85@gmail.com",
      Password: "123456789",
      To: email,
      From: "me",
      Subject: messagevalue,
      Body: "Well that was easy!!",
    }).then( ()=> {
      alert("mail sent successfully");
    });
};

form.addEventListener("submit", handelSendingMessage);
