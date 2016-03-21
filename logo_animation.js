/* * * * * * * * *
 * ON  READY * * *
 * * * * * * * * */
$(document).ready(function(){
	$("#animation").click(function(){
		$("#ast1 > path").toggleClass("spin-clock");
		$("#ast2 > path").toggleClass("spin-counter");
	});
});