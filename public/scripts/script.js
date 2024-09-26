window.onscroll = () => {
	scrollNavbar();
};
scrollNavbar = () => {
	var navBar = document.getElementById("navbar");
	const nav = document.querySelectorAll("#nav");
	if (document.documentElement.scrollTop > 50) {
		navBar.classList.add("fixed-header");
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.add("scrolled-active");
		}
		navbar.style.width = "100%";
		navbar.style.marginLeft = "0px";
	} else {
		navBar.classList.remove("fixed-header");
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.remove("scrolled-active");
		}
		navbar.style.width = "calc(100% - 2vw)";
		navbar.style.marginLeft = "1vw";
	}
};
