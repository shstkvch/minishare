Minishare
=========
A really simple sharing widget by David Hewitson.

Designed to be minimalist - does not require any FB SDKs or configuration of any kind.

Screenshot
----------
![Screenshot of Minishare](/screenshot.png)

Instructions
------------

Include jQuery and ./minishare-0.0.1.js

Call $.miniShare() to show the widget.

Options (all optional):
-----------------------

- url - url to share (default is the current page)
- message - message to show above the icons
- done_message - message to show after sharing
- twitter_message - message to include in the tweet. This prefaces the URL.
- html - a string of HTML to use for the widget.

Simple example
---------------

	$.miniShare( { 
		message: "hey!", 
		url: "http://google.com" 
	});

Finally
-------
To change the position/styling of the widget, go to /css/minishare.css and muck around with div#minishare.

License
-------
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see &lt;http://www.gnu.org/licenses/&gt;.