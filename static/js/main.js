$('#slide').click(function(){
    var hidden = $('.slider');
    if (hidden.hasClass('visible')){
        hidden.animate({"right":"-200px"}, "slow").removeClass('visible');
    } else {
        hidden.animate({"right":"0px"}, "slow").addClass('visible');
    }
});
$('#slide2').click(function(){
    var hidden = $('.slider');
    if (hidden.hasClass('visible')){
        hidden.animate({"right":"-150px"}, "fast").removeClass('visible');
    } else {
        hidden.animate({"right":"0px"}, "slow").addClass('visible');
    }
});

function confirmName() {
	var name = document.getElementById("name").value;
	var namefield = document.getElementById("name");
	if(name){
		nameVerified = true;
		if($('#name').hasClass("unsuccessful")){
			$('#name').removeClass("unsuccessful");
		}
	}
	else{
		if(!$('#name').hasClass("unsuccessful")) {
			$('#name').addClass("unsuccessful");
		}
		namefield.setAttribute("placeholder", "Name is required");
	}
};

function confirmMessage() {
	var message = document.getElementById("message").value;
	var messagefield = document.getElementById("message");
	if(message){
		messageVerified = true;
		if($('#message').hasClass("unsuccessful")){
			$('#message').removeClass("unsuccessful");
		}
	}
	else{
		if(!$('#message').hasClass("unsuccessful")) {
			$('#message').addClass("unsuccessful");
		}
		messagefield.setAttribute("placeholder", "Message is required");
	}
};

function confirmEmail() {
	var email = document.getElementById("email").value;
	var emailfield = document.getElementById("email");
	if(email){
	    var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			if(!$('#email').hasClass("unsuccessful")) {
				$('#email').addClass("unsuccessful");
				if(emailAlert == false){
					emailAlert = true;
					//alert('Email address is not valid');
					if(!$('#email').hasClass("unsuccessful")) {
						$('#email').addClass("unsuccessful");
					}
				}
			}
		}
		else {
			emailVerified = true;
			if($('#email').hasClass("unsuccessful")){
				$('#email').removeClass("unsuccessful");
			}
		}
	}
	else {
		if(!$('#email').hasClass("unsuccessful")) {
			$('#email').addClass("unsuccessful");
		}
		emailfield.setAttribute("placeholder", "Email address is required");
	}
};

function enable_submit(){
    if(nameVerified == true && emailVerified == true && messageVerified == true) {
		goodtogo = true;
	}
}

function submit_signup(){
	confirmName();
	confirmEmail();
	confirmMessage();
	enable_submit();
	if(goodtogo == true){
		$('#contactform').submit();
	}
	else{
		//alert('Check the red fields for errors');
	}
}
