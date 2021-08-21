

const localStorageSession = localStorage.getItem("sessionId");

if (!localStorageSession){
    window.location.replace("https://andreeaandrusca.herokuapp.com/");
}

