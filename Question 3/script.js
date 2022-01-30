let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send ();
request.onload = function()
{
     let a = JSON.parse(request.responseText);
     a.map((b)=> {
        console.log(b.name.common);
        })
        a.map((c)=> {
            console.log(c.region);
        })
        a.map((d)=> {
            console.log(d.subregion);
         })
         a.map((e)=> {
            console.log(e.population);
         })
}