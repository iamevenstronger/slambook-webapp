var fields = [];
function getFields() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.responseText);
            if(resp.success) {
                document.getElementById('slamname').innerHTML = resp.slamname;
                document.getElementById('slamdescription').innerHTML = resp.slamdescription;
                var element = document.getElementById("fields");
                for (var k in resp.data.customfields) {
                    if (resp.data.customfields.hasOwnProperty(k)) {
                        fields.push(resp.data.customfields[k]);
                        var div = document.createElement("div");
                        var node = document.createTextNode(resp.data.customfields[k]);
                        div.appendChild(node);
                        element.appendChild(div) ;
                        element.appendChild(createInput(resp.data.customfields[k]));
                        element.appendChild(document.createElement("br"));
                    }
                }
            } else {
                alert("Invalid Link");
                window.location.href = "http://www.slambook.ml";
            }
        }
    };
    var url = window.location.href;
    result = parseQueryString(url);
    xhttp.open("GET", "http://localhost/slambookapi/getpagedetail.php?slamname=" + result.slamname, true);
    xhttp.send();
}

function parseQueryString(url) {
    var urlParams = {};
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            urlParams[$1] = $3;
        }
    );

    return urlParams;
}

function createSlamWrite() {
    var json = {};
    json['nickname'] = document.getElementById('nickname').value;
    json['first meet'] = document.getElementById('first meet').value;
    json['first fight'] = document.getElementById('first fight').value;
    json['tell me about something'] = document.getElementById('tell me about something').value;
    json['link dedicated to me'] = document.getElementById('link dedicated to me').value;
    json['your location'] = document.getElementById('your location').value;
    var cus = {};
    for (var i in fields) {
        cus[fields[i]] = document.getElementById(fields[i]).value;
    }
    json['customfields'] = cus;
    console.log(JSON.stringify(json));
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.responseText);
            if (resp.success) {
                alert(resp.message);
                window.location.href = "http://www.slambook.ml";
            }
        }
    };
    var url = window.location.href;
    result = parseQueryString(url);
    var query = "username=" + result.username + "&slamname=" + result.slamname + "&content=" + JSON.stringify(json);
    xhttp.open("GET", "http://localhost/slambookapi/createslamwrite.php?" + query, true);
    xhttp.send();
}

function createInput(id) {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control slam-input");
    input.setAttribute("id", id);
    input.setAttribute("placeholder", id);
    return input;
}