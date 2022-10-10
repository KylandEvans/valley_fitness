const app = {
	init: () => {
		app.loadScript();
	},
	loadScript: () => {
		const navOpen = document.querySelector("[data-nav-open]");
		const navClose = document.querySelector("[data-nav-close]");
		const navbar = document.querySelector("[data-navbar]");

		const toggleNavOpen = () => {
			console.log(getComputedStyle(navbar));

			if (getComputedStyle(navbar).display === "none") {
				navbar.style.display = "flex";
				navClose.style.display = "flex";
				navOpen.style.display = "none";
				navOpen.style.zIndex = 1;
			}
		};

		const toggleNavClose = () => {
			if (getComputedStyle(navbar).display === "flex") {
				navClose.style.display = "none";
				navOpen.style.display = "flex";
				navbar.style.display = "none";
				navOpen.style.zIndex = 10;
			}
		};

		const navResizeEvent = () => {
			if (window.innerWidth < 768) {
				toggleNavClose();
			} else if (window.innerWidth >= 768) {
				toggleNavOpen();
				navClose.style.display = "none";
			}
		};

		navOpen.addEventListener("click", toggleNavOpen);
		navClose.addEventListener("click", toggleNavClose);
		window.addEventListener("resize", navResizeEvent);
	},
};

document.addEventListener("DOMContentLoaded", app.init);
