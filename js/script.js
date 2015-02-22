$(function(){
	console.log( "ready!" );

	$("#input").keyup(function(event){
		if (event.keyCode == 13){
			$(".addPress").click();
		}
	});
	$(".addPress").click(function(){
		if ( $("#input").val().trim() == false ) {
			alert("WTF!?");
		} else {
			var newItem = '<span class="item">' + $("#input").val() + '</span>';
			var strikeButton = '<span class="strike">x</span>';
			var newLine = '<li class="line">' + newItem + strikeButton + '</p>';
			var hr = '<hr class="hr" display="false">';
			$("#listItems").prepend(hr);
			$("#listItems").prepend(newLine);
			$(".line")
			.css("font-family", "Maven Pro, sans-serif");
			$("#input").val("");
			$("#input").focus();
		};
	});
	$("#listItems").on("click", ".strike", function(){
		$(this).prev("span").toggleClass("complete");
		$(this).parent().toggleClass("ready");
		$(".ready + hr").addClass("ready");
		$(this).toggleClass("inactive");
	});
	$("#listFooter").on("click", ".clearPress", function(){
		$(".ready").addClass("delete");
	})

});