
var squareRoles =  [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,
					1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
					1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,
					1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
					0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,
					1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,
					1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
					1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
					1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,
					1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,
					1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,
					1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
					1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
					1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
					1,1,1,1,1,1,0,1,1,1,1,1,1,1,1];

/*var cellClues = [	[ 0,16],[ 0   ],[ 0,17],[ 0   ],[ 0,18],[ 0   ],[ 0,19],[ 0   ],        [ 1   ],[ 1,20],[ 1   ],[ 1,21],[ 1   ],[ 1,22],
					[   16],        [   17],        [   18],        [   19],        [   23],        [   20],        [   21],        [   22],
					[ 2,16],[ 2   ],[ 2,17],[ 2   ],[ 2,18],        [ 3,19],[ 3   ],[ 3,23],[ 3   ],[ 3,20],[ 3   ],[ 3,21],[ 3   ],[ 3,22],
					[   16],        [   17],        [   18],        [   19],        [   23],        [   20],        [   21],        [   22],
					        [ 4   ],[ 4,17],[ 4   ],[ 4,18],[ 4   ],[ 4,19],[ 4   ],[ 4,23],[ 4   ],[ 4,20],        [ 5,21],[ 5   ],[ 5,22],
					[   24],        [   17],                        [   19],                        [   20],                        [   22],
					[ 6,24],[ 6   ],[ 6,17],[ 6   ],[ 6,25],[ 6   ],[ 6,19],        [ 7,26],[ 7   ],[ 7,20],[ 7   ],[ 7,27],[ 7   ],[ 7,22],
					[   24],        [   17],        [   25],        [   19],        [   26],        [   20],        [   27],        [   22],
					[ 8,24],[ 8   ],[ 8,17],[ 8   ],[ 8,25],[ 8   ],[ 8,19],        [ 9,26],[ 9   ],[ 9,20],[ 9   ],[ 9,27],[ 9   ],[ 9,22],
					[   24],                        [   25],                        [   26],                        [   27],        [   22],
					[10,24],[10   ],[10,28],        [11,25],[11   ],[11,29],[11   ],[11,26],[11   ],[11,30],[11   ],[11,27],[11   ],        
					[   24],        [   28],        [   25],        [   29],        [   26],        [   30],        [   27],        [   31],
					[12,24],[12   ],[12,28],[12   ],[12,25],[12   ],[12,29],[12   ],[12,26],        [13,30],[13   ],[13,27],[13   ],[13,31],
					[   24],        [   28],        [   25],        [   29],        [   26],        [   30],        [   27],        [   31],
					[14,24],[14   ],[14,28],[14   ],[14,25],[14   ],        [15   ],[15,26],[15   ],[15,30],[15   ],[15,27],[15   ],[15,31]
				];*/
				
				
makeCellClues = function(sqRoles,sideLength) {
    var cellsCount=0;
    var curClueNum=0;
    var curCellNum=1;
    var cellClues=[];
    //for(i=0;i<sqRoles.length;i++){cellsCount+=sqRoles[i];}
    
    // find across clues
    if(sqRoles[0]==1 & sqRoles[1]==1){cellClues[0]=[0];}
    for(i=1;i<(sqRoles.length)-1;i++){
        if(sqRoles[i]==1){
            if(((i%sideLength===0 | sqRoles[i-1]==0) & sqRoles[i+1]==1 & i%sideLength!=sideLength-1) | 
               ((i%sideLength==sideLength-1 | sqRoles[i+1]==0) & sqRoles[i-1]==1 & i%sideLength!=0) |
               (sqRoles[i-1]==1 & sqRoles[i+1]==1)) {
                    cellClues[curCellNum] = [curClueNum];
                if(sqRoles[i+1]==0 | i%sideLength==14) {curClueNum+=1;}
            } else {cellClues[curCellNum] = [];}
            curCellNum+=1;
        }
    }
    if(sqRoles[sqRoles.length - 1]==1 & sqRoles[sqRoles.length - 2]==1){
        cellClues[curCellNum]=[curClueNum];
        curClueNum+=1;
    }
   
   curCellNum = 1;
   var i = 0;
   var k=0;
   var kk=0;
    //find down clues
    if(sqRoles[0]==1 & sqRoles[sideLength]==1){
		cellClues[0][cellClues[0].length]=curClueNum;
		curClueNum+=1;
	}

    for(i=1;i<(sqRoles.length)-1;i++){
		//i += sideLength;
		//if(i >= sqRoles.length) {i -= sqRoles.length-1;}
        if(sqRoles[i]==1){
            if(((i<sideLength | sqRoles[i-sideLength]===0) & sqRoles[i+sideLength]==1 & i+sideLength<sqRoles.length) | 
               ((i+sideLength>=sqRoles.length | sqRoles[i+sideLength]===0) & sqRoles[i-sideLength]==1 & i>=sideLength) |
               (sqRoles[i-sideLength]==1 & sqRoles[i+sideLength]==1)) {
				    if(sqRoles[i-sideLength]===0 | i<sideLength){
						cellClues[curCellNum][cellClues[curCellNum].length] = curClueNum;
						curClueNum += 1;
					}else{
						k=0;
						for(kk=0;kk<i-sideLength;kk++){k+=sqRoles[kk];}
						//var clueN = cellClues[k][cellClues[k].length - 1];
						cellClues[curCellNum][cellClues[curCellNum].length] = cellClues[k][cellClues[k].length - 1];
					}
            }
            curCellNum+=1;
        }
    }
    if(sqRoles[sqRoles.length - 1]==1 & sqRoles[sqRoles.length - sideLength]==1){
		k=0;
		for(kk=0;kk<i-sideLength;kk++){k+=sqRoles[kk];}
		//var clueN = cellClues[k][cellClues[k].length - 1];
		cellClues[curCellNum][cellClues[curCellNum].length] = cellClues[k][cellClues[k].length - 1];
        //cellClues[curCellNum]=[curClueNum];
        curClueNum+=1;
    }
    

    return cellClues;
};
cellClues = makeCellClues(squareRoles,15);

var gridSquares = document.getElementsByClassName("gridsq");
var clueNums = document.getElementsByClassName("cluenum");
var activeClue = 0;

var cluePrintSeq = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var cluesPrint = document.getElementsByClassName("clue");


var currentClue = document.getElementById("currentClue");
var clueTexts = document.getElementsByClassName("clue");

numberClues = function(sqRoles, cellClues, clueNums){
	var usedClues=[];
	var j=0;
	var curNum = 1;
	for(i=0; i<sqRoles.length;i++){
		if(sqRoles[i]==1) {
			if(usedClues.indexOf(cellClues[j][0])== -1) {
				clueNums[i].innerHTML = curNum;
				usedClues[usedClues.length]=cellClues[j][0];
				curNum++;
				if(cellClues[j].length==2){
					if(usedClues.indexOf(cellClues[j][1]== -1)) {
						usedClues[usedClues.length]=cellClues[j][1];
					}
				}
			} else if(cellClues[j].length==2){
				if(usedClues.indexOf(cellClues[j][1])== -1) {
					clueNums[i].innerHTML = curNum;
					usedClues[usedClues.length]=cellClues[j][1];
					curNum++;
				}
			}
			j++;
		}
	}
}
numberClues(squareRoles,cellClues,clueNums);

activateClue = function(clueNo) {
	activeClue = clueNo;
	for(i = 0; i < cellClues.length; i++) {
	cells[i].style.backgroundColor = "white";
		if(cellClues[i].indexOf(clueNo) !== -1) {
			cells[i].style.backgroundColor = "#defff6";
		}
	}
	cells[initialCells[clueNo]].focus();
	currentClue.innerHTML = clueTexts[clueNo].innerHTML;
}


for(i = 0; i < squareRoles.length; i++) {
	if(squareRoles[i]==0) {
		gridSquares[i].className += " block";
	} else {
		gridSquares[i].className += " cell";
	}
}

var cells = document.getElementsByClassName("cell");

var initialCells = [];
for(i=0;i<cluePrintSeq.length;i++) {
	for(j=0;j<cells.length;j++) {
		if(cellClues[j].indexOf(i) != -1) {
			initialCells[i] = j;
			break;
		}
	}
}

activateClue(0);

for (i = 0; i < cells.length; i++) {
    (function (iCopy) {
    cells[i].onkeyup = function(){
        moveFocus(iCopy);//cells[(iCopy+1) % cells.length].focus();
    };
	cells[i].onfocus=function(){this.select();};
	cells[i].onclick=function(){
	var itsClues = cellClues[iCopy];
	if(itsClues.length==1 && itsClues[0]!=activeClue) {
		activateClue(itsClues[0]);
	} else if(itsClues.length==2 && itsClues[0]==activeClue) {
		activateClue(itsClues[1]);
	} else if(itsClues.length==2) {
		activateClue(itsClues[0]);
	}
	cells[iCopy].focus();
	
	};
    }(i));
}

for(i = 0; i < cluePrintSeq.length; i++) {
	(function (iCopy) {
	cluesPrint[i].onclick = function(){
		activateClue(cluePrintSeq[iCopy]);
	}
	}(i));
}

function moveFocus(curFocus) {
	var moved = false;
	for(i = curFocus+1; i<cells.length; i++) {
		if(cellClues[i].indexOf(activeClue) !== -1) {
			cells[i].focus();
			moved = true;
			break;
		}
	}
	if(!moved) {
		for(i=0; i < cluePrintSeq.length; i++){
		if(cluePrintSeq[i] === activeClue) {
			activateClue(cluePrintSeq[(i+1)%cluePrintSeq.length]);
			break;
		}}
	}
		
}

/*function cellClicked(clickedNum) {
	var itsClues = cellClues[clickedNum];
	if(itsClues.length==1 && itsClues[0]!=activeClue) {
		activateClue(itsClues[0]);
	} else if(itsClues.length==2 && itsClues[0]==activeClue) {
		activateClue(itsClues[1]);
	} else if(itsClues.length==2) {
		activateClue(itsClues[0]);
	}
	cells[clickedNum].focus();
}*/
		

