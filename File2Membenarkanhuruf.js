    function Nama (){
    var correct_way = /^[A-Za-z]+$/;
    var i = document.getElementById("Berikan sapaan pagi untuk temanmu"). value;
    
    if(a==""){
        document.getElementById("Message") .innerHTML="** Mohon Diisi"
        return false;
    }
    if(a.length<3){
        document.getElementById("Message") .innerHTML="** Harus Lebih Dari 3 Huruf"
        return false;
        }
    if(a.length>38){
        document.getElementById("Message") .innerHTML="** Jangan Lebih 20 Huruf"
        return false;
    }
    if(a.match(correct_way))
    true;
    else{
        document.getElementById("Message") .innerhtml="**Hanya Huruf Saja";
        return false;
    }
}

