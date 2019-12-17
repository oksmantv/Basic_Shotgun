class ComputerAI
{
    constructor(input,playershots,computershots)
    {
        this.input = input;
        this.playerAmmo = playershots;
        this.computerAmmo = computershots;
    }

    CalculateComputer()
    {
        switch(this.input)
        {
            case 1:
            {
                this.playerAmmo--;
                GameLogic.playerAmmo--;
                document.getElementById("ammoButtonP").innerText = "Ammo: " + this.playerAmmo;
                break;
            }

            case 2:
            {
                this.playerAmmo= this.playerAmmo + 1;
                GameLogic.playerAmmo = GameLogic.playerAmmo + 1;
                document.getElementById("ammoButtonP").innerText = "Ammo: " + this.playerAmmo;
                break;
            }

        }


        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }

        var ComputerId;
        console.log("Running Calculate Decision");
        // Always shoot if 3 shots ready
        if(this.computerAmmo >= 3)
        ComputerId = 1;

        // Shoot or reload if player needs to reload
        else if(this.playerAmmo < 1 && this.computerAmmo > 1)
        ComputerId = getRndInteger(1,2);

        // Always load as first action and if both have no ammo
        else if (this.playerAmmo == 0 && this.computerAmmo == 0)
        ComputerId =  2;

        // Player has ammo, computer does not. Block or reload
        else if (this.playerAmmo > 0 && this.computerAmmo < 1)
        ComputerId =  getRndInteger(2,3);

        // If player is about to land shotgun, shoot if possible.
        else if (this.playerAmmo > 2 && this.computerAmmo > 0)
        ComputerId =  1;

        // if computer has ammo, shoot.
        else if(this.playerAmmo >= 0 && this.computerAmmo > 0)
        ComputerId =  getRndInteger(1,3);      



        console.log("Running Calculate AI");
        switch(ComputerId)
        {

            case 1: // Computer Shoots
            {

                if(this.computerAmmo >= 3)
                {
                    document.getElementById("cImage").src = "images/shotgun.gif";
                    ComputerId=4;
                    result.computerInput=4;
                    result.CalculateResult();
                    return;
                }
                document.getElementById("cImage").src = "images/shoot3.gif";
                this.computerAmmo = this.computerAmmo - 1;
                document.getElementById("ammoButtonC").innerHTML = "Ammo: " + this.computerAmmo;
                break;
            }

            case 2: // Computer Loads
            {

                if(this.computerAmmo == 2)
                document.getElementById("cImage").src = "images/reloadshotgun.gif";
                else
                document.getElementById("cImage").src = "images/reload.gif";

                this.computerAmmo = this.computerAmmo + 1;
                document.getElementById("ammoButtonC").innerHTML = "Ammo: " + this.computerAmmo;
                break;
            }

            case 3: // Computer Blocks
            {
                document.getElementById("cImage").src = "images/block2.gif";
                break;
            }


        }

        if(this.playerAmmo > 0)
        {
            document.getElementById("shootButton").disabled = false;
        }
        else
        document.getElementById("shootButton").disabled = true;

        if(this.playerAmmo > 2)
        document.getElementById("shotgunButton").disabled = false;
        else
        document.getElementById("shotgunButton").disabled = true;

        result.computerInput = ComputerId;
        result.playerInput = this.input;
        result.CalculateResult();

        }





    }
