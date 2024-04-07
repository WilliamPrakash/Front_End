
// These functions are used for various ajax calls for ajax.html

function loadText() {    
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    //console.log(xhr);
    xhr.open('GET', '/text/sample.txt', true);
    xhr.onload = function() {
        if(this.status == 200) {
            //console.log(this.responseText);
            document.getElementById("text").innerHTML = this.responseText;
        } else if(this.status == 404) {
            document.getElementById("text").innerHTML = "Not Found";
        }
    }

    xhr.onerror = function() {
        console.log('Request Error...');
    }

    /* xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
    }
     */

    /* OPTIONAL - used for loaders
        xhr.onprogress = function() {
            console.log('READYSTATE: ', xhr.readyState);
        }
    */

    // Sends request
    xhr.send();
}

function loadUsers() {
    var xhr = new XMLHttpRequest();    
    xhr.open('GET', '/javascript/users.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = '';

            for(var i in users) {
                output += '<ul>' +
                    '<li>ID: ' + users[i].id + '</li>' +
                    '<li>Name: ' + users[i].name + '</li>' +
                    '<li>Email: ' + users[i].email + '</li>' +
                    '</ul>';
            }
            document.getElementById("users").innerHTML = output;      
        }
    }
    xhr.send();
}

function loadExternalUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function() {
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);
            var output = '';

            for(var i in users) {
                output += 
                    '<div class="user">' +
                    '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
                    '<ul>' + 
                    '<li>ID: '+users[i].id+'</li>' +
                    '<li>Login: '+users[i].login+'</li>' +
                    '</ul' +
                    '</div>'
            }
            document.getElementById("external users").innerHTML = output;
        }
    }
    xhr.send();
}