var clicks = 0;
var cursors = 0;
var clickmachines = 0;

function manualClick(value){
  clicks = clicks + value;
  //console.log("Clicks: " + clicks);
  updateClicks();
};


function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	  clicks = clicks - cursorCost;                          //removes the clicks spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        updateClicks();                                         //updates the number of clicks for the user
    }else{
        document.getElementById('log').value += "[You Can't Afford An AutoClicker!]\n";
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function updateClicks(){
  document.getElementById("clicks").innerHTML = clicks;
  //console.log("updated");
};



function buyClickMachine(){
    var clickmachineCost = Math.floor(20 * Math.pow(1.1,clickmachines));     //works out the cost of this cursor
    if(clicks >= clickmachineCost){                                   //checks that the player can afford the cursor
        clickmachines = clickmachines + 1;                                   //increases number of cursors
    	  clicks = clicks - clickmachineCost;                          //removes the clicks spent
        document.getElementById('clickmachines').innerHTML = clickmachines;  //updates the number of cursors for the user
        updateClicks();                                         //updates the number of clicks for the user
    }else{
        document.getElementById('log').value += "[You Can't Afford A ClickMachine!]\n";
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,clickmachines));       //works out the cost of the next cursor
    document.getElementById('clickmachineCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


function updateClicks(){
  document.getElementById("clicks").innerHTML = clicks;
  //console.log("updated");
};



function doSave(){
  var save = {
    clicks: clicks,
    cursors: cursors,
    clickmachines: clickmachines
  };
  localStorage.setItem("save",JSON.stringify(save));
};

function doLoad(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.clicks !== "undefined") clicks = savegame.clicks;
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
  if (typeof savegame.clickmachines !== "undefined") clickmachines = savegame.clickmachines;
  updateClicks();
  document.getElementById('cursors').innerHTML = cursors;
  var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
  document.getElementById('cursorCost').innerHTML = cursorCost;
  document.getElementById('clickmachines').innerHTML = clickmachines;
  var clickmachineCost = Math.floor(20 * Math.pow(1.1,clickmachines));
  document.getElementById('clickmachineCost').innerHTML = clickmachineCost;
};

function deleteSave(){
  localStorage.removeItem("save");
}

window.setInterval(function(){

  manualClick(cursors);
  manualClick(clickmachines * 5);

  //doSave();
}, 1000);
