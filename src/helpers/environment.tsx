let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3030";
    break;
  case "rbclientinside.herokuapp.com":
    APIURL = "https://rbservertwo.herokuapp.com";
}

export default APIURL;
