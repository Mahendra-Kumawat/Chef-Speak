console.log("hello Welcome to the yoda Application")
const button = document.querySelector(".btn");
// console.log(button)
const input = document.querySelector("#text");

const output = document.querySelector("#output_data");

console.log(output)
let server_URL = "https://api.funtranslations.com/translate/chef.json"


function error() {
    console.log("error occured");
    window.alert("something wrong with server! try again after some time")
}

function datafetch(url) {
    const xhr = new XMLHttpRequest(); 
    console.log(xhr)

    xhr.open("GET", url);


    xhr.onprogress = function(){
        output.innerText = "Loding..."
    }

    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            const data = JSON.parse(xhr.responseText)
            console.log(data)
            output.innerText = data.contents.translated
        }
        else{
            error()
        }
    }

    xhr.send()

}

button.addEventListener("click", () => {
    let URL = server_URL + "?" + "text=" + input.value
    datafetch(URL)

    // console.log(input.value)
})


