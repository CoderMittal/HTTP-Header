async function getToken(){
    let Token = await fetch('http://localhost:12345/get_token');
    if(Token.ok){
        let json = await Token.json();
        document.getElementById("tokenArea").innerHTML = json.token;
    }
    
}

async function Register(){
    let card = {
        username : document.getElementById("userName").value,
        data : document.getElementById("Data").value,
        token : document.getElementById("tokenNumber").value
    };
    let register = await fetch('http://localhost:12345/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        });
        let keyk = await register.json();
        if(keyk.error){
            document.getElementById("Error").innerHTML = "Error : " + keyk.error;
            document.getElementById("registerArea").innerHTML = "";
        }
        else{
            document.getElementById("registerArea").innerHTML = "Submitted";
        }
        
}

async function GetData(){
    let number = {
        token : document.getElementById("tokenNo").value
    };
    let get = await fetch('http://localhost:12345/get_data', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(number)
        });

        let key = await get.json();
    if(key.error==undefined){
        document.getElementById("userdata").innerHTML = "Username: " + key.username + "<br>" + "Data: " + key.data;}
    else{
        document.getElementById("error").innerHTML = "Error : " + key.error;
        document.getElementById("userdata").innerHTML = "";
    }
    
}