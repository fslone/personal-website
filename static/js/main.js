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
	var name = $('#name').val();
	var nameField = $('#name');
	if(name){
		nameVerified = true;
		if(nameField.hasClass("unsuccessful")){
			nameField.removeClass("unsuccessful");
		}
	}
	else{
		if(!nameField.hasClass("unsuccessful")) {
			nameField.addClass("unsuccessful");
		}
		nameField.prop("placeholder", "Name is required");
	}
};

function confirmMessage() {
	var message = $('#message').val();
	var messageField = $('#message');
	if(message){
		messageVerified = true;
		if(messageField.hasClass("unsuccessful")){
			messageField.removeClass("unsuccessful");
		}
	}
	else{
		if(!messageField.hasClass("unsuccessful")) {
			messageField.addClass("unsuccessful");
		}
		messageField.prop("placeholder", "Message is required");
	}
};

function confirmEmail() {
	var email = $('#email').val();
	var emailField = $('#email');
	if(email){
	    var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			if(!emailField.hasClass("unsuccessful")) {
				emailField.addClass("unsuccessful");
				if(emailAlert == false){
					emailAlert = true;
					//alert('Email address is not valid');
					if(!emailField.hasClass("unsuccessful")) {
						emailField.addClass("unsuccessful");
					}
				}
			}
		}
		else {
			emailVerified = true;
			if(emailField.hasClass("unsuccessful")){
				emailField.removeClass("unsuccessful");
			}
		}
	}
	else {
		if(!emailField.hasClass("unsuccessful")) {
			emailField.addClass("unsuccessful");
		}
		emailField.prop("placeholder", "Email address is required");
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
