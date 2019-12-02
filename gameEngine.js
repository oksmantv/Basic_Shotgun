
var playerAmmo = 0;
var computerAmmo = 0;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function startGame()
{
    document.getElementById("startGameButton").disabled = true;
    document.getElementById("shotgunButton").disabled = true;
    document.getElementById("shootButton").disabled = true;
    document.getElementById("reloadButton").disabled = false;
    document.getElementById("blockButton").disabled = false;
    document.getElementById("ammoButtonP").disabled = false;
    document.getElementById("ammoButtonC").disabled = false;
    alert("Game Started. Choose your move");

    document.getElementById("pImage").src = "idle.gif";
    document.getElementById("cImage").src = "idle.gif";
}

function changeButtons()
{


}

function PlayerShotgun()
{
    if(playerAmmo >= 3)
    {
            document.getElementById("pImage").src = "shotgun.gif";

            endGame(1);
    }
}

function PlayerShoot()
{
    if(playerAmmo >= 1)
    {
        document.getElementById("pImage").src = "shoot.gif";

        CalculateDecision(1);      
        
    }
}

function PlayerReload()
{
    if(playerAmmo >= 2)
    {
        document.getElementById("pImage").src = "reloadshotgun.gif";
    }
    else
    {
        document.getElementById("pImage").src = "reload.gif";

    }
    CalculateDecision(2);
    
}

function PlayerBlock()
{
    document.getElementById("pImage").src = "block.gif";
    CalculateDecision(3);
    
}

function AdjustPlayerAmmo(adjust)
{

    switch(adjust)
    {
        case 1: // Remove Ammo
        {
            playerAmmo = playerAmmo - 1;
            document.getElementById("ammoButtonP").innerText = "Ammo: " + playerAmmo;
            break;
        }

        case 2: // Add Ammo
        {
            playerAmmo = playerAmmo + 1;
            document.getElementById("ammoButtonP").innerText = "Ammo: " + playerAmmo;
            break;
        }
    }

}



function CalculateDecision(input)
{
    var ComputerId;
    ComputerId = ComputerDecision(playerAmmo,computerAmmo);

    switch(input)
    {
        case 1:
        {
            AdjustPlayerAmmo(1);
            break;
        }

        case 2:
        {
            AdjustPlayerAmmo(2);
            break;
        }

    }



    switch(ComputerId)
    {

        case 1: // Computer Shoots
        {

            if(computerAmmo >= 3)
            {
                document.getElementById("cImage").src = "shotgun.gif";
                endGame(2);
                return;
            }
            document.getElementById("cImage").src = "shoot.gif";
            computerAmmo = computerAmmo - 1;
            document.getElementById("ammoButtonC").innerHTML = "Ammo: " + computerAmmo;
            break;
        }

        case 2: // Computer Loads
        {
            document.getElementById("cImage").src = "reload.gif";
            computerAmmo = computerAmmo + 1;
            document.getElementById("ammoButtonC").innerHTML = "Ammo: " + computerAmmo;
            break;
        }

        case 3: // Computer Blocks
        {
            document.getElementById("cImage").src = "block.gif";
            break;
        }


    }

    if(playerAmmo > 0)
    {
        document.getElementById("shootButton").disabled = false;
    }
    else
    document.getElementById("shootButton").disabled = true;

    if(playerAmmo > 2)
    document.getElementById("shotgunButton").disabled = false;
    else
    document.getElementById("shotgunButton").disabled = true;

    CalculateResult(ComputerId,input,playerAmmo,computerAmmo);

}

function CalculateResult(computerInput,playerInput,playerA,computerA)
{
    if(computerInput==1 && playerInput==1)
    {
    }

    if(computerInput==1 && playerInput==2)
    {
        
        endGame(2);
    }

    if(computerInput==2 && playerInput ==1)
    {
        
        endGame(1);
    }

    if(computerInput==3 && playerInput ==3)
    {

    }



}

function endGame(winner)
{

    setTimeout(function() 
    {   
        if(winner==1)
        alert("Player Wins");
        else
        alert("Computer Wins");

        playerAmmo = 0;
        computerAmmo = 0;

        document.getElementById("ammoButtonP").innerText = "Ammo: " + computerAmmo;
        document.getElementById("ammoButtonC").innerText = "Ammo: " + computerAmmo;

        document.getElementById("startGameButton").disabled = false;
        document.getElementById("shotgunButton").disabled = true;
        document.getElementById("shootButton").disabled = true;
        document.getElementById("reloadButton").disabled = true;
        document.getElementById("blockButton").disabled = true;
        
    }, 2000);
}
