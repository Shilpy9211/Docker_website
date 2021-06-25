function ajax(cmd) {
    document.getElementById("d2").innerHTML = "Command is being Executed, Please wait..."
    var xhr = new XMLHttpRequest();


    xhr.open("GET", "http://192.168.43.45/cgi-bin/docker.py?x="+cmd, true);

    xhr.send();

    // Output from above url

    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("d2").innerHTML = output;
    }


}

function printer(id) {
    var keyword = document.getElementById(id);
    return keyword.value;
}

