var numOfPlayerSelected = numberOfPlayerSelected;

function play(){
    document.querySelector("button").style.visibility="hidden";  // query selector by tag
    document.querySelector(".numberOfPlayers").classList.toggle("numberOfPlayers"); //queryselector by its class
}

function playAgain(){
    var numOfPlayerSelected = document.querySelector("#hiddenField").getAttribute("value");
    roll(numOfPlayerSelected);
}

function start(numberOfPlayerSelected){
    document.querySelector("#hiddenField").setAttribute("value",numberOfPlayerSelected);
    if(numberOfPlayerSelected===1){
        document.querySelector("#numberOfPlayers").classList.toggle("numberOfPlayers"); //queryselector by its id
        document.querySelector("#refreshID").style.visibility="visible";
        document.querySelector("#playerVisibility1").classList.remove("dice");
        roll(numberOfPlayerSelected);
    }
    else if(numberOfPlayerSelected===2){
        document.querySelector("#numberOfPlayers").classList.toggle("numberOfPlayers");
        document.querySelector("#playerVisibility1").classList.remove("dice");
        document.querySelector("#playerVisibility2").classList.remove("dice");
        document.querySelector("#refreshID").style.visibility="visible";
        roll(numberOfPlayerSelected);
    }
    else if(numberOfPlayerSelected===3){
        document.querySelector("#numberOfPlayers").classList.toggle("numberOfPlayers");
        document.querySelector("#playerVisibility1").classList.remove("dice");
        document.querySelector("#playerVisibility2").classList.remove("dice");
        document.querySelector("#playerVisibility3").classList.remove("dice");
        document.querySelector("#refreshID").style.visibility="visible";
        roll(numberOfPlayerSelected);
    }
    else{
        document.querySelector("#numberOfPlayers").classList.toggle("numberOfPlayers");
        document.querySelector("#playerVisibility1").classList.remove("dice");
        document.querySelector("#playerVisibility2").classList.remove("dice");
        document.querySelector("#playerVisibility3").classList.remove("dice");
        document.querySelector("#playerVisibility4").classList.remove("dice");
        document.querySelector("#refreshID").style.visibility="visible";
        roll(numberOfPlayerSelected);
    }
}

function roll(numberOfPlayerSelected){
    const images = [];
    image1Url="./images/dice1.png";
    image2Url="./images/dice2.png";
    image3Url="./images/dice3.png";
    image4Url="./images/dice4.png";
    image5Url="./images/dice5.png";
    image6Url="./images/dice6.png";
    images.push(image1Url);
    images.push(image2Url);
    images.push(image3Url);
    images.push(image4Url);
    images.push(image5Url);
    images.push(image6Url);
    var imagesLength = images.length;
    if(numberOfPlayerSelected===1){
        var randomNumber1 = Math.floor((Math.random()*imagesLength));
        var srcOf1SelectedImage = images[randomNumber1];
        document.querySelector(".player1Image").setAttribute("src",srcOf1SelectedImage);
    }
    else if(numberOfPlayerSelected===2){
        var randomNumber1 = Math.floor((Math.random()*imagesLength));
        var srcOf1SelectedImage = images[randomNumber1];
        var randomNumber2 = Math.floor((Math.random()*imagesLength));
        var srcOf2SelectedImage = images[randomNumber2];
        document.querySelector(".player1Image").setAttribute("src",srcOf1SelectedImage);
        document.querySelector(".player2Image").setAttribute("src",srcOf2SelectedImage);
        if(randomNumber1>randomNumber2){
            document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
        }
        else if(randomNumber2>randomNumber1)
        {
            document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
        }
        else{
            document.querySelector("h1").innerHTML="🚩 Draw!";
        }
    }
    else if(numberOfPlayerSelected===3){
        var randomNumber1 = Math.floor((Math.random()*imagesLength));
        var srcOf1SelectedImage = images[randomNumber1];
        var randomNumber2 = Math.floor((Math.random()*imagesLength));
        var srcOf2SelectedImage = images[randomNumber2];
        var randomNumber3 = Math.floor((Math.random()*imagesLength));
        var srcOf3SelectedImage = images[randomNumber3];
        document.querySelector(".player1Image").setAttribute("src",srcOf1SelectedImage);
        document.querySelector(".player2Image").setAttribute("src",srcOf2SelectedImage);
        document.querySelector(".player3Image").setAttribute("src",srcOf3SelectedImage);
        if(randomNumber1>randomNumber2 && randomNumber1 > randomNumber3){
            document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
        }
        else if(randomNumber2>randomNumber1 && randomNumber2>randomNumber3)
        {
            document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
        }
        else if(randomNumber3>randomNumber1 && randomNumber3>randomNumber2)
        {
            document.querySelector("h1").innerHTML="🚩 Play 3 Wins!";
        }
        else{
            document.querySelector("h1").innerHTML="🚩 Draw!";
        }
    }
    else{
        var randomNumber1 = Math.floor((Math.random()*imagesLength));
        var srcOf1SelectedImage = images[randomNumber1];
        var randomNumber2 = Math.floor((Math.random()*imagesLength));
        var srcOf2SelectedImage = images[randomNumber2];
        var randomNumber3 = Math.floor((Math.random()*imagesLength));
        var srcOf3SelectedImage = images[randomNumber3];
        var randomNumber4 = Math.floor((Math.random()*imagesLength));
        var srcOf4SelectedImage = images[randomNumber4];
        document.querySelector(".player1Image").setAttribute("src",srcOf1SelectedImage);
        document.querySelector(".player2Image").setAttribute("src",srcOf2SelectedImage);
        document.querySelector(".player3Image").setAttribute("src",srcOf3SelectedImage);
        document.querySelector(".player4Image").setAttribute("src",srcOf4SelectedImage);
        if(randomNumber1>randomNumber2 && randomNumber1 > randomNumber3 && randomNumber1>randomNumber4){
            document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
        }
        else if(randomNumber2>randomNumber1 && randomNumber2>randomNumber3 && randomNumber2>randomNumber4)
        {
            document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
        }
        else if(randomNumber3>randomNumber1 && randomNumber3>randomNumber2 && randomNumber3>randomNumber4)
        {
            document.querySelector("h1").innerHTML="🚩 Play 3 Wins!";
        }
        else if(randomNumber4>randomNumber1 && randomNumber4>randomNumber2 && randomNumber4>randomNumber3)
        {
            document.querySelector("h1").innerHTML="🚩 Play 4 Wins!";
        }
        else{
            document.querySelector("h1").innerHTML="🚩 Draw!";
        }
    }
}
