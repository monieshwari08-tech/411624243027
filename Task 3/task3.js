const input = document.getElementById("messageInput");
const count = document.getElementById("count");
const status = document.getElementById("status");
const container = document.getElementById("messageContainer");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");


let messages = [];



input.addEventListener("input", function () {
    count.textContent = "Character Count: " + input.value.length;
});



function displayMessages() {
    container.innerHTML = "";
    messages.forEach(function (msg, index) {
        const div = document.createElement("div");
        div.className = "message";
        div.textContent = msg;
        container.appendChild(div);
        


        setTimeout(function () {
            div.remove();
            messages.splice(index,1);
            status.textContent = "Message Expired";
        },10000);
    });
}



addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    const promise = new Promise(function(resolve,reject){
        if(text.length >= 3){
            resolve(text);
        }
        else{
            reject("Message must contain at least 3 characters");
        }
    });
    promise.then(function(message){
        status.textContent = "Message Added Successfully";
        messages.push(message);
        displayMessages();
        input.value = "";
        count.textContent = "Character Count: 0";
    })
    .catch(function(error){
        status.textContent = error;
    });
});


clearBtn.addEventListener("click", function(){
    messages = [];
    container.innerHTML = "";
    status.textContent = "All Messages Cleared";
});