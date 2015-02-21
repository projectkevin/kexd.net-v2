var ballButton = document.getElementById('menu-icon-ball');
	var menuContent = document.getElementById('menu-content');
	var closeMenu = document.getElementById('close-menu');

	ballButton.addEventListener('click', function(e) {
		this.className = 'expand-ball';
		setTimeout(function(){
			menuContent.className = 'show-menu-content';
		}, 250);
	});

	closeMenu.addEventListener('click', function(){
		menuContent.className = '';
		ballButton.className = '';
	});