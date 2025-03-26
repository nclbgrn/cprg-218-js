document.addEventListener("DOMContentLoaded", () => {
    const jokeElement = document.getElementById("joke");
    const titleElement = document.getElementById("title");
    const buttons = document.querySelectorAll("button");

    async function fetchJoke(category = "Any") {
       