let APIURL = "";

switch (window.location.hostname) {
    case "localhost":
    case "127.0.0.1":
        APIURL= "http://localhost:3030";

}

export default APIURL;