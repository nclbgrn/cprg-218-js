document.addEventListener("DOMContentLoaded", () => {
    const jokeElement = document.getElementById("joke");
    const titleElement = document.getElementById("title");
    const buttons = document.querySelectorAll("button");
    
    async function fetchJoke(category = "Any") {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();
        
        if (data.type === "single") {
            jokeElement.textContent = data.joke;
        } else {
            jokeElement.textContent = `${data.setup} ... ${data.delivery}`;
        }
        
        titleElement.textContent = category === "Pun" ? "A Random Pun" : `A Random ${category} Joke`;
    }
    
    fetchJoke();