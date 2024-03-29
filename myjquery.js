$(document).ready(function(){
    
console.log("I am in a new file.")
// JQuery Syntax would look like this 
// $('selecetor').action()


// clicks on all the p elements
$('p').click(function () {
    console.log("You clicked on p", this);
    // $('#id').hide();
    // $('.class').hide();


}); 

// $('p').dblclick(function(){
// console.log("You double clicked on p",this);


// });

// $('p').hover(function(){
//     console.log("You hovered on  ",this);
    
    
//     },function(){
//         console.log("Thanks for coming.");
//     });
    







//do this when we click on p 


// there are three main types of selectors in jquery
// 1.element selector
// 2.id selector
// 3. class selector 

// $('#second').click();



$(".odd").click(); ////yo .click() garyo bhane ek patak afai click hunxa().pragrammmer bata 
// ,mannaully click;




//=============== others selectors ==============================
// $('*').click(); // ==============================clicks on all elements. ==============================
// $('p.odd').click(); ///================================clicks on p which class is odd ==============================
// $('p.first').click();///================================clicks on p which class is first =============================




// Events in jQuery
// Mouse events =click,dbclick,mouseenter,mouseleave
// keyboardEvent = keypress,keydown,MediaKeyStatusMap
// form events=submit,change,focus,blur
// document/window events = load,resize,scroll,BeforeUnloadEvent








// ==============demonstrating on menthod of JQUERY ==============
$('p').on(
    {
    click:function(){

console.log("Thanks for clicking",this);


},
mouseleave:function(){
console.log("mouseleave");


}


})

// $('#wiki').hide(1000,function(){

// console.log("Hidden");


// });
// $('#wiki').show(1000,function(){

//     console.log("shown");
    
    
//     });
    

$('#but').click(function(){

// $('#wiki').toggle(1000);
$('#wiki').fadeOut(4000);


})


// fadeIn();
// fadeOut();
// fadeToggle();
// fadeTo();

// ====================slide methods - sppedd and callback parameters method are optional  ============================
// $('#wiki').slideDown(1000);
// $('#wiki').slideUp(1000);

// Duitai ko best use garna use slideToggle();



// ====================Animate function in JQUERY ====================================================

// $("#wiki").animate({


// opacity:0.3,
// height:'150px',
// width:'350px'

// },
// // 2000
// "slow"
// );




// ================Same animation function lai queue ma rakhna sakxau means FIFO Order ma 
//HENCE JUN ANIMATE AGADI XA TESKO MILLISECOND CODE CHALEPAXI BALLA ARKO CODE RUN HUNXA......... ====================
// $('#wiki').animate({width:'350px'},1000);

// $('#wiki').animate({width:'150px'},12000);
// $('#wiki').animate({opacity:0.3},4000);
// $('#wiki').animate({opacity:0.9},12000);

//================================================ FORM====================================================
// $('#inp').val();  ////return a value of a input.....
// $('#inp').val("Hel;lo i am good"); ///cahnge text content
// $("#ta").html("Setting into harry2");
// $("#wiki").empty();
// $("#wiki").text("You are good");

// $("#wiki").remove(); /// ==============================eliminate tags from DOM TOOOO ==========================================


//================================================ FORM====================================================


});





// ADD CLASS AND REMOVE CLASS IN TAG THROUGH JQUERY

$('#wiki').addClass("myclass");

$('#wiki').addClass("myclass2");

$('#wiki').removeClass("myclass2");

$('#wiki').css('background-color','green');


// AJAX USING JQUERY
$.get('https://code.jquery.com/jquery-3.7.1.js',function(data,status){alert(data)});
$.get('https://code.jquery.com/jquery-3.7.1.js',function (data,status) {alert(status); });

$.post('https://code.jquery.com/jquery-3.7.1.js',{name:'harry',channel:'code with harry'},function(data,status){

alert(status)
});
