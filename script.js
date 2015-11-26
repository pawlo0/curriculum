//Defines variable to number 1,
//then hides all texts and shows the text with the number defined in variable
var number = 1;
$('.texts').hide();
$('#text' + number).show();

//when a button is clicked, first hides the old text,
$('.btn').click(function(){
  $('#text'+number).hide();
//then changes the look of the clicked button
  $('#button'+number).removeClass('btn-primary').addClass('btn-default');
//then changes the variable number
  number = parseInt($(this).attr('id').slice(-1))
//shows the corresponding text
  $('#text'+ number).show();
//and finally changes the corresponding button.
  $('#button'+number).removeClass('btn-default').addClass('btn-primary');
});
