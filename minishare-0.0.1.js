/********************************
MiniShare - Simple Sharing Widget for jQuery
v0.0.1
Copyright (C) 2013 David Hewitson

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*********************************/
(function($) {
	$.miniShare = function(options) {
		if($('#minishare').length > 0) {
			console.error('Minishare widget already on the page (or there\'s a naming conflict.)');
			return false;
		}
		var def_html = 
			[	"<div id=\"minishare\">"
			,		"<p id=\"message\">Share</p>"
			,		"<div class=\"facebook\">"
			,			"<a href=\"#\">Share</a>"
			,		"</div>"
			,		"<div class=\"twitter\">"
			,			"<a href=\"#\">Tweet</a>"
			,		"</div>"
			,	"</div>"
			].join('');

		var services = {
			twitter: "https://twitter.com/intent/tweet?text=",
			facebook: "https://www.facebook.com/sharer/sharer.php?u="
		};

		var defaults = {
			url: document.location,
			message: "Share This",
			done_message: "Thanks!",

			twitter_message: 'Check this out', // article title or something

			html: def_html
		}

		var opts = $.extend(defaults, options);

		// inject the MiniShare widget
		widget = $('body').append(opts.html);		

		// inject the css
		$('head').append('<link rel="stylesheet" id="minishare-styles" href="./css/minishare.css"></link>');

		// set the message
		$('p#message').html(opts.message);

		$('#minishare div').click(function() {
			$(this).children()[0].click(); // quick & dirty fix
		});

		$('#minishare a').click(function() {
			var parent_class = $(this).parent().attr('class');
			if(services[parent_class] == undefined) {
				return false; // SANITY CHEKKKKKKKCKCK
			};
			var the_url = '';
			if(parent_class == "twitter") { // add a  wee message for twitter users
				message = opts.twitter_message;
				the_url = services[parent_class] + opts.twitter_message + "&url=" + opts.url;
			} else {
				the_url = services[parent_class] + opts.url;
			};
			var share_window = window.open(the_url, 'sharer', 'width=600,height=400,top=200,left=200');
			var watchClose = setInterval(function() {
			    try {
			        if (share_window.closed) {
			            clearTimeout(watchClose);
			            $('p#message').html(opts.done_message)
			        }
			    } catch (e) {}
			}, 200);
		});
	};
})(jQuery);