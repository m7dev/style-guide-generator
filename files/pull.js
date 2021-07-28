// async function getData() {
//     const response = await fetch("http://udanew.wpengine.com/", {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       headers: {
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//         'Accept': 'text/html',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       }
//     });
//     return response; // parses JSON response into native JavaScript objects
// }


function getUrl() {
    var url = document.getElementById("main-website").value;
    document.getElementById("masterhead").setAttribute("src", url);
}

function pullStyles() {
    // const responce = getData()
    // console.log(responce)

    var iframe = document.getElementById("masterhead")
    console.log(iframe)
}


