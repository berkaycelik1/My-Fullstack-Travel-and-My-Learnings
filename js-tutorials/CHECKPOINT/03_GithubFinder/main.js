const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.getElementById("profile-container");

searchBtn.addEventListener("click", async () => {
const username = searchInput.value;
    if (username === "") {
        alert("Lütfen bir kullanıcı adı girin!")
        return;
    }
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.message === "Not Found") {
        profileContainer.innerHTML = `<h2>Kullanıcı Bulunamadı😔</h2>`;
        return;
    }
    profileContainer.innerHTML = `
        <div class="profile-card">
            <img src="${data.avatar_url}" width="150px">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
        </div>
    `;
})