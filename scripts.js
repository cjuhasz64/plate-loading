function loadPlates(aTargetWeight, aPlates, aBar)
{
    let lOutput = [];
    let lTargetWeight = aTargetWeight - aBar;

    aPlates.forEach(lPlate => {
        if (Math.floor(lTargetWeight/(lPlate*2)) > 0)
        {
            for (let i = 0; i < Math.floor(lTargetWeight/(lPlate*2)); i++)
            {
                lOutput.push(lPlate)
                lTargetWeight = lTargetWeight - (lPlate*2);
            }    
        }
    });

    return lOutput;
}

function drawPlates ()
{
    let weight = document.getElementById('input-weight').value
    let bar = document.getElementById('input-bar').value
    let plates = [25, 20, 15, 10, 5, 2.5, 1.25];



    document.getElementById('plates-text').innerHTML = loadPlates(weight,plates,bar)
    
}











