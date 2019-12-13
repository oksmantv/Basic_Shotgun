
class GameEngine
{  
    constructor() {

    }

    startGame()
    {

        Computer.playerAmmo = 0;
        Computer.computerAmmo = 0;

        document.getElementById("startGameButton").disabled = true;
        document.getElementById("shotgunButton").disabled = true;
        document.getElementById("shootButton").disabled = true;
        document.getElementById("reloadButton").disabled = false;
        document.getElementById("blockButton").disabled = false;
        document.getElementById("ammoButtonP").disabled = false;
        document.getElementById("ammoButtonC").disabled = false;
        console.log("Game Started. Choose your move");

        document.getElementById("pImage").src = "images/idle.gif";
        document.getElementById("cImage").src = "images/idle.gif";
        
    }

    PlayerShotgun()
    {
        if(Computer.playerAmmo >= 3)
        {
                document.getElementById("pImage").src = "images/shotgun.gif";
                result.playerInput=4;
                result.CalculateResult();
        }
    }

    PlayerShoot()
    {
        if(Computer.playerAmmo >= 1)
        {
            document.getElementById("pImage").src = "images/shoot.gif";
            Computer.input = 1;
            Computer.CalculateComputer();      
            
        }
    }

    PlayerReload()
    {
        if(Computer.playerAmmo >= 2)
        {
            document.getElementById("pImage").src = "images/reloadshotgun.gif";
        }
        else
        {
            document.getElementById("pImage").src = "images/reload.gif";

        }

        console.log("Running Reload");
        Computer.input = 2;
        Computer.CalculateComputer();      
        
    }

    PlayerBlock()
    {
        document.getElementById("pImage").src = "images/block.gif";
        
        Computer.input = 3;
        Computer.CalculateComputer();      
        
    }



    


}

