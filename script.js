var docList = document.querySelectorAll('.item');
var sources = []; //SOURCES OF IMAGES

for (var i=0; i<docList.length; i++){
    docList[i].addEventListener('click', viewImg);

    docList[i].setAttribute('id', i);//SET ID TO DIVs FOR LISTEN WHAT ELEMENT WAS CLICKED
    sources.push(docList[i].childNodes[1].getAttribute('src'));//GET ALL SOURCES OF IMAGES
}
console.log(sources);

document.getElementById('close').addEventListener('click', function () {
    var popup = document.getElementById('popup_item');
    popup.style.display = 'none';
});


function viewImg(event) {
    
    var popupItem = document.getElementById('popup_item');
    popupItem.style.display = 'block';
    
    //var source = event.currentTarget.childNodes[1].getAttribute('src');
    //document.getElementById('img_full').setAttribute('src', source);

    var idEventBlock = event.currentTarget.getAttribute('id');
    document.getElementById('img_full').setAttribute('src', sources[idEventBlock]);

    document.getElementById('prevImg').addEventListener('click', function(){
        
        idEventBlock--;
        if (idEventBlock < 0){
            idEventBlock = docList.length-1;
        }

        document.getElementById('img_full').setAttribute('src', sources[idEventBlock]);
        console.log(idEventBlock);
    });
    
    document.getElementById('nextImg').addEventListener('click', function(){
        
        idEventBlock++;
        if (idEventBlock > docList.length-1){
            idEventBlock = 0;
        }

        document.getElementById('img_full').setAttribute('src', sources[idEventBlock]);
        console.log(idEventBlock);

    });
}

function viewPrevImg(event) {
    
}