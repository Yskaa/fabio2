
function validateEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return reg.test(email);
}

$(document).ready(function() {
  
$(".send.send1").click( function(e){

    e.preventDefault();


	var $forma = $(this).parents("form");
    var nameval  = $forma.find(".name").val();

    var namelen    = nameval.length;
	var emailval = $forma.find(".email").val();
    var mailvalid = validateEmail(emailval);

    if(mailvalid == false) {
     $forma.find(".email").addClass("error");
     }
else if(mailvalid == true){
    $forma.find(".email").removeClass("error");
    }
    //console.log(nameval,phoneval);



    if((namelen < 2) || (nameval == 'Имя')) {
        $forma.find(".name").addClass("error");
    }
    else if((namelen >= 2)  && (nameval !== 'Имя')){
        $forma.find(".name").removeClass("error");
    }


if(namelen >= 2&&  (nameval !== 'Имя') && (mailvalid==true) ) {
    // если обе проверки пройдены
    // сначала мы скрываем кнопку отправки
    $forma.find(".send").replaceWith("<em class='sending'>отправка...</em>");




    $.ajax({
    type: 'POST',
    url: 'sendmessage.php',
    data: $forma.serialize(),
    success: function(data) {
       // console.log(data)
    if(data == "true") {
        $forma.find(".sending").replaceWith("<p><strong>Отправлено!</strong></p>");
}
}
});
}
});


    $(".send.send2").click( function(e){

        e.preventDefault();


        var $forma = $(this).parents("form");
        var nameval  = $forma.find(".name").val();
        var phoneval    = $forma.find(".phone").val();
        var phonelen    = phoneval.length;
        var namelen    = nameval.length;

        //console.log(nameval,phoneval);



        if((namelen < 2) || (nameval == 'Имя')) {
            $forma.find(".name").addClass("error");
        }
        else if((namelen >= 2)  && (nameval !== 'Имя')){
            $forma.find(".name").removeClass("error");
        }

        if((phonelen < 6)||phoneval == 'Телефон') {
            $forma.find(".phone").addClass("error");
        }
        else if((phonelen >= 6) && (phoneval !== 'Телефон')){
            $forma.find(".phone").removeClass("error");
        }

        if(phonelen >= 4&&namelen >= 2&& (phoneval !== 'Телефон') && (nameval !== 'Имя') ) {
            // если обе проверки пройдены
            // сначала мы скрываем кнопку отправки
            $forma.find(".send").replaceWith("<em class='sending'>отправка...</em>");




            $.ajax({
                type: 'POST',
                url: 'sendmessage.php',
                data: $forma.serialize(),
                success: function(data) {
                    // console.log(data)
                    if(data == "true") {
                        $forma.find(".sending").replaceWith("<p><strong>Отправлено!</strong></p>");
                    }
                }
            });
        }
    });
});