var dimensions = 16;

$(document).ready(function() {

    createBlocks();

    $('#reset').click(function() {
	$('.block').css('background-color', '#fff');

	dimensions = prompt("Enter a number between 1 and 64", "");

	if (isNaN(dimensions))
	    alert("Not a number");
	else if (dimensions < 1)
	    dimensions = 1;
	else if (dimensions > 64)
	    dimensions = 64;

	var size = 800 / dimensions;

	reset();

	$('.block').css({'width':size+'px', 'height':size + 'px'});

	$('.block').hover(function() {
	    $(this).css('background-color', '#000');
	});
    });

    $('.block').hover(function() {
	$(this).css('background-color', '#000');
    });

});



function createBlocks() {

    for (var i = 0; i < dimensions; i++)
    {
	for (var j = 0; j < dimensions; j++)
	{
	    $('.grid').append("<div class='block'></div>");
	}
    }

}

function reset() {
    $('.block').remove();
    createBlocks();
}
