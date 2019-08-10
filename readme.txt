	1. Download returneToTopStyle.min.css and js/returneToTopStyle.js in your project.
	2. Add returneToTopStyle.min.css in <head> before your style.css:

	<head>
		<link rel="stylesheet" href="css/returneToTopStyle.min.css">
	</head>

	3. Add these two rows in <body> before </body>:

	<body>
		<div class="returnToTop" title="return to top">&#10148;</div>
		<script src="js/returneToTopStyle.js"></script>
	</body>

	4. &#10148; - is Universal Coded Character - "Black Rightwards Arrowhead".
	If you want use another simbol just don't forget delete properties from returneToTopStyle.css:
	
	-webkit-transform:rotate(-90deg)
	-moz-transform:rotate(-90deg)
