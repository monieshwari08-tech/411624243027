document.getElementById("btn").addEventListener("click", loadUsers);
function loadUsers() {
    let status = document.getElementById("status");
    let container = document.getElementById("users");
    status.innerText = "Loading users...";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {   
                status.innerText = "Users Loaded Successfully!";
                container.innerHTML = "";
                data.forEach(user => {
                    container.innerHTML += `
                        <div class="user-card">
                            <h3>${user.name}</h3>
                            <p>${user.email}</p>
                            <p>${user.phone}</p>
                        </div>
                    `;
                });
            }, 2000);

        })
        .catch(error => {
            status.innerText = "Error loading users!";
            console.log(error);
        });
}