function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function ComputerDecision(playerAmmo,computerAmmo)
{

    // Always shoot if 3 shots ready
    if(computerAmmo >= 3)
    return 1;

    // Shoot or reload if player needs to reload
    else if(playerAmmo < 1 && computerAmmo > 1)
    return getRndInteger(1,2);

    // Always load as first action and if both have no ammo
    else if (playerAmmo == 0 && computerAmmo == 0)
    return 2;

    // Player has ammo, computer does not. Block or reload
    else if (playerAmmo > 0 && computerAmmo < 1)
    return getRndInteger(2,3);

    // If player is about to land shotgun, shoot if possible.
    else if (playerAmmo > 2 && computerAmmo > 0)
    return 1;

    // if computer has ammo, shoot.
    else if(playerAmmo >= 0 && computerAmmo > 0)
    return getRndInteger(1,3);
    
}