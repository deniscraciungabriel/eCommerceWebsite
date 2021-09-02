

const localStorageSession = localStorage.getItem("sessionId");

if (!localStorageSession){
    window.location.replace("http://localhost:5000");
}

