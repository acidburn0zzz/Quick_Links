function makeShort(urlpass) 
{
   var longUrl=urlpass;
    var request = gapi.client.urlshortener.url.insert({
      'resource': {
      'longUrl': longUrl
    }
    });
    request.execute(function(response) 
    {
        var shorturl=response.id;
        
 
    });
    return shorturl;
 }
 
function load()
{
    //Get your own Browser API Key from  https://code.google.com/apis/console/
    gapi.client.setApiKey('AIzaSyBpQ06-kI-C2E688-nZ8Lstt733XxD3UoM');
    gapi.client.load('urlshortener', 'v1',function(){document.getElementById("output").innerHTML="";});
 
}

window.onload = load;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    
    document.getElementById("demo").innerHTML=url;

});


















