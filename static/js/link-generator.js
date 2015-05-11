var url = '';
var imageurl = '';
var tweet = '';
var title = '';
var description = '';
var summary = '';
var codeUpdate = '';


function updateSocial() {
	if(document.getElementById('Facebook').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/facebook.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/facebook.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/facebook.png";
		document.getElementById("SocialUpdate").innerHTML = "Facebook";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "none";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('Twitter').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/twitter.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/twitter.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/twitter.png";
		document.getElementById("SocialUpdate").innerHTML = "Twitter";
		document.getElementById("URL").style.display = "none";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "block";
		document.getElementById("Title").style.display = "none";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('Pinterest').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/pinterest.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/pinterest.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/pinterest.png";
		document.getElementById("SocialUpdate").innerHTML = "Pinterest";
		document.getElementById("URL").style.display = "none";
		document.getElementById("ImageURL").style.display = "block";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "none";
		document.getElementById("Description").style.display = "block";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('Tumblr').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/tumblr.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/tumblr.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/tumblr.png";
		document.getElementById("SocialUpdate").innerHTML = "Tumblr";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "block";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('LinkedIn').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/linkedin.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/linkedin.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/linkedin.png";
		document.getElementById("SocialUpdate").innerHTML = "LinkedIn";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "block";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "block";
	}
	else if(document.getElementById('Reddit').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/reddit.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/reddit.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/reddit.png";
		document.getElementById("SocialUpdate").innerHTML = "Reddit";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "block";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('StumbleUpon').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/stumbleupon.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/stumbleupon.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/stumbleupon.png";
		document.getElementById("SocialUpdate").innerHTML = "StumbleUpon";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "block";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	else if(document.getElementById('Google').checked) {
		document.getElementById("LargeImage").src="http://ericslone.io/static/images/icons/google.png";
		document.getElementById("MediumImage").src="http://ericslone.io/static/images/icons/google.png";
		document.getElementById("SmallImage").src="http://ericslone.io/static/images/icons/google.png";
		document.getElementById("SocialUpdate").innerHTML = "Google+";
		document.getElementById("URL").style.display = "block";
		document.getElementById("ImageURL").style.display = "none";
		document.getElementById("Tweet").style.display = "none";
		document.getElementById("Title").style.display = "none";
		document.getElementById("Description").style.display = "none";
		document.getElementById("Summary").style.display = "none";
	}
	updateCode();
};

function updateCode() {
	if(document.getElementById('Facebook').checked) {
		url = encodeURIComponent($('#URL').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/facebook.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/facebook.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/facebook.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" target="_blank">Share on Facebook</a>';
		}
	}
	else if(document.getElementById('Twitter').checked) {
		tweet = encodeURIComponent($('#Tweet').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="https://twitter.com/home?status=' + tweet + '" target="_blank"><img src="http://ericslone.io/static/images/icons/twitter.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="https://twitter.com/home?status=' + tweet + '" target="_blank"><img src="http://ericslone.io/static/images/icons/twitter.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="https://twitter.com/home?status=' + tweet + '" target="_blank"><img src="http://ericslone.io/static/images/icons/twitter.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="https://twitter.com/home?status=' + tweet + '" target="_blank">Share on Twitter</a>';
		}
	}
	else if(document.getElementById('Pinterest').checked) {
		imageurl = encodeURIComponent($('#ImageURL').val())
		description = encodeURIComponent($('#Description').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="https://pinterest.com/pin/create/button/?url=' + imageurl + '&description=' + description + '" target="_blank"><img src="http://ericslone.io/static/images/icons/pinterest.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="https://pinterest.com/pin/create/button/?url=' + imageurl + '&description=' + description + '" target="_blank"><img src="http://ericslone.io/static/images/icons/pinterest.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="https://pinterest.com/pin/create/button/?url=' + imageurl + '&description=' + description + '" target="_blank"><img src="http://ericslone.io/static/images/icons/pinterest.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="https://pinterest.com/pin/create/button/?url=' + imageurl + '&description=' + description + '" target="_blank">Share on Pinterest</a>';
		}
	}
	else if(document.getElementById('Tumblr').checked) {
		url = encodeURIComponent($('#URL').val())
		title = encodeURIComponent($('#Title').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="http://www.tumblr.com/share?v=3&u=' + url + '&t=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/tumblr.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="http://www.tumblr.com/share?v=3&u=' + url + '&t=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/tumblr.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="http://www.tumblr.com/share?v=3&u=' + url + '&t=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/tumblr.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="http://www.tumblr.com/share?v=3&u=' + url + '&t=' + title + '" target="_blank">Share on Tumblr</a>';
		}
	}
	else if(document.getElementById('LinkedIn').checked) {
		url = encodeURIComponent($('#URL').val())
		title = encodeURIComponent($('#Title').val())
		summary = encodeURIComponent($('#Summary').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary + '" target="_blank"><img src="http://ericslone.io/static/images/icons/linkedin.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary + '" target="_blank"><img src="http://ericslone.io/static/images/icons/linkedin.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary + '" target="_blank"><img src="http://ericslone.io/static/images/icons/linkedin.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title + '&summary=' + summary + '" target="_blank">Share on LinkedIn</a>';
		}
	}
	else if(document.getElementById('Reddit').checked) {
		url = encodeURIComponent($('#URL').val())
		title = encodeURIComponent($('#Title').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="http://www.reddit.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/reddit.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="http://www.reddit.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/reddit.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="http://www.reddit.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/reddit.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="http://www.reddit.com/submit?url=' + url + '&title=' + title + '" target="_blank">Share on Reddit</a>';
		}
	}
	else if(document.getElementById('StumbleUpon').checked) {
		url = encodeURIComponent($('#URL').val())
		title = encodeURIComponent($('#Title').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="http://www.stumbleupon.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/stumbleupon.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="http://www.stumbleupon.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/stumbleupon.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="http://www.stumbleupon.com/submit?url=' + url + '&title=' + title + '" target="_blank"><img src="http://ericslone.io/static/images/icons/stumbleupon.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="http://www.stumbleupon.com/submit?url=' + url + '&title=' + title + '" target="_blank">Share on StumbleUpon</a>';
		}
	}
	else if(document.getElementById('Google').checked) {
		url = encodeURIComponent($('#URL').val())
		if(document.getElementById('Large').checked) {
			codeUpdate = '<a href="https://plus.google.com/share?url=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/google.png"></a>';
		}
		else if(document.getElementById('Medium').checked) {
			codeUpdate = '<a href="https://plus.google.com/share?url=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/google.png" style="width:65px;"></a>';
		}
		else if(document.getElementById('Small').checked) {
			codeUpdate = '<a href="https://plus.google.com/share?url=' + url + '" target="_blank"><img src="http://ericslone.io/static/images/icons/google.png" style="width:30px;"></a>';
		}
		else if(document.getElementById('Text').checked) {
			codeUpdate = '<a href="https://plus.google.com/share?url=' + url + '" target="_blank">Share on Google+</a>';
		}
	}
	document.getElementById("SocialCode").innerHTML = codeUpdate;
};






