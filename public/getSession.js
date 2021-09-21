

const localStorageSession = localStorage.getItem("sessionId");

if (!localStorageSession){
    window.location.replace("https://handmadeandrushka.com");
}

