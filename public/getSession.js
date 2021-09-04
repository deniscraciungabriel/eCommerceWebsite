

const localStorageSession = localStorage.getItem("sessionId");

if (!localStorageSession){
    window.location.replace("http://handmadeandrushka.herokuapp.com");
}

