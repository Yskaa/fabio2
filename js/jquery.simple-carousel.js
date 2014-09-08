$(document).ready(function(){
    var carWrap = $(".c-wrap"),
        rightBt = $(".bt-right"),
        leftBt = $(".bt-left"),
        pos = carWrap.position().left,
        carWidth = $(".carousel").width(),
        itemWidth = $(".item").outerWidth(true);

    var contWidth = itemWidth*$(".item").length;
    var endCar = carWidth-contWidth;
    carWrap.width(contWidth);


    rightBt.click(function(event){
        event.preventDefault;
        if (pos<=endCar){
            carWrap.animate({left:pos = 0},1100) //(4)
        }
        else {
            carWrap.animate({left:pos -= itemWidth*2},500)}
    })

    leftBt.click(function(event){
        event.preventDefault;

        if (pos>=0){
            carWrap.animate({left:pos = endCar},1100) //(4)
        }
        else {
            carWrap.animate({left:pos += itemWidth*2},500)}
    })
})