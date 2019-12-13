
class ResultCalculation
{

    constructor(playerInput,computerInput)
    {
        this.computerInput = computerInput;
        this.playerInput = playerInput;
    }

    CalculateResult()
    {
            var winner=0;
            console.log("ResultCalculation Created");
            if(this.computerInput==1 && this.playerInput==2)
            {     
                winner=2;
                EndGame();
            }

            if(this.computerInput==2 && this.playerInput ==1)
            {           
                winner=1;
                EndGame();
            }

            if(this.computerInput==4 && this.playerInput != 4)
            {           
                winner=2;
                EndGame();
            }

            if(this.playerInput==4 && this.computerInput != 4)
            {           
                winner=1;
                EndGame();
            }


            function EndGame()
            {
                setTimeout(function() 
                {   
                    if(winner==1)
                    {
                        document.getElementById("cImage").src = "images/loser2.gif";
                        alert("Player Wins");
                    }
                    else
                    {
                        document.getElementById("pImage").src = "images/loser2.gif";
                        alert("Computer Wins");
                    }

                    Computer.playerAmmo = 0;
                    Computer.computerAmmo = 0;
                    document.getElementById("ammoButtonP").innerText = "Ammo: " + Computer.playerAmmo;
                    document.getElementById("ammoButtonC").innerText = "Ammo: " + Computer.computerAmmo;

                    document.getElementById("startGameButton").disabled = false;
                    document.getElementById("shotgunButton").disabled = true;
                    document.getElementById("shootButton").disabled = true;
                    document.getElementById("reloadButton").disabled = true;
                    document.getElementById("blockButton").disabled = true;
                    
                }, 2000);
            }
        }
}
