let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send ();
request.onload = function()
{
    if (request.status == 200) {
     let a = JSON.parse(request.responseText);
     a.map((b)=> {
         console.log(b.flags.svg)
     })
    }
    else {
        request.onerror = function() 
        {
        console.log("error");
        }
    }
}