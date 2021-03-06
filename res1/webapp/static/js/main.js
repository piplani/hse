// Submit post on submit
$('#post-form').on('submit', function(event){
	event.preventDefault();
	console.log("form submitted!")  // sanity check
	create_post();
});

// AJAX for posting
function create_post() {
	console.log("create post is working!"); // sanity check
	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
				xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
			}
		}
	});
	$.ajax({
		url : "submit/", // the endpoint
		type : "POST", // http method
		data : { id_file : $('#id_file').val(), id_email : $('#id_email').val()}, // data sent with the post request

		// handle a successful response
		success : function(json) {
			$('#id_file').val(''); // remove the value from the input
			$('#id_email').val(''); // remove the value from the input
			console.log(json); // log the returned json to the console
			console.log("success"); // another sanity check
		},

		// handle a non-successful response
		error : function(xhr,errmsg,err) {
			$('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
				" <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
			console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
		}
	});
};

// using jQuery
function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie != '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) == (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}