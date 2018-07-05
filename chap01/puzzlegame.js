var body;
var randNumArr = new Array();
var size=16;
var cells;
setRandNumArr = function(){
    for(var i=0;i<size;){
        var idx = Math.floor(Math.random()*size);
        if(randNumArr[idx]==undefined){
            randNumArr[idx] = String.fromCharCode(i%8+65);
            i++;
        }
    }
};

function init(){
    body = document.getElementsByTagName("body")[0];
    var heading = document.createElement("h1");
    heading.innerText="짝 맞추기 게임";
    body.appendChild(heading);
    var puzzle = document.createElement("div");
    puzzle.id="puzzle";
    body.appendChild(puzzle);

    setRandNumArr();

    for(var i=0;i<size;i++){
        var cell = document.createElement("div");
        cell.className ="cell";
        cell.id = "cell"+randNumArr[i];
        cell.innerText=randNumArr[i];
        cell.code = randNumArr[i];
        puzzle.appendChild(cell);
    }
};

function compare(){
    alert("게임시작");
    var tmp=null;
    for(var i=0;i<cells.length;i++){
        cells[i].onclick = function(){
            this.innerText = this.code;
            this.style.background="yellow";
            if(tmp==null){
                tmp=this;
                tmp.style.background='';
            }
            else{
                if(tmp ==this){
                    alert("같은 셀을 클릭했습니다");
                    return;
                }
                if(tmp.code ==this.code){
                    alert("정답");
                }
                else{
                    alert("같지 않습니다");
                    tmp.innerText ='';
                    this.innerText='';
                    tmp.style.background='';
                    this.style.background='';
                }
                tmp=null;
            }
        }
    }
}
function start(){
    var message = document.createElement('p');
    message.innerText='5초 후에 게임이 시작됩니다.';
    body.appendChild(message);
    var sec=5;
    var fn=setInterval(function(){
        sec--;
        message.innerText=sec+'초 후에 게임이 시작됩니다';
        if(sec==0){
            message.innerText="같은 알파벳의 위치를 찾으세요.";
            clearInterval(fn);
        }
    },1000);

setTimeout(function(){
    cells = document.getElementById('puzzle').getElementsByTagName('div');
    for(var i=0;i<size;i++){
        cells[i].innerText="";
    }
    compare();
},5000);
}
function main(){
    init();
    start();
}

window.onload=main;