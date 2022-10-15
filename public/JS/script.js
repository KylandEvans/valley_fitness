const app = {
	init() {
		app.loadScript();
	},
	loadScript() {
		const navOpen = document.querySelector("[data-nav-open]");
		const navClose = document.querySelector("[data-nav-close]");
		const navbar = document.querySelector("[data-navbar]");
		const htmlEle = document.querySelector("html");
		const bodyEle = document.querySelector("body");

		const toggleNavOpen = () => {
			if (getComputedStyle(navbar).display === "none") {
				navbar.style.display = "flex";
				navClose.style.display = "flex";
				navOpen.style.display = "none";
				navOpen.style.zIndex = 1;
				htmlEle.classList.add("noscroll");
				bodyEle.classList.add("noscroll");
			}
		};

		const toggleNavClose = () => {
			if (getComputedStyle(navbar).display === "flex") {
				navClose.style.display = "none";
				navOpen.style.display = "flex";
				navbar.style.display = "none";
				navOpen.style.zIndex = 10;
				htmlEle.classList.remove("noscroll");
				bodyEle.classList.remove("noscroll");
			}
		};

		const navResizeEvent = () => {
			if (window.innerWidth < 768) {
				toggleNavClose();
				htmlEle.classList.remove("noscroll");
				bodyEle.classList.remove("noscroll");
			} else if (window.innerWidth >= 768) {
				toggleNavOpen();
				navClose.style.display = "none";
				htmlEle.classList.remove("noscroll");
				bodyEle.classList.remove("noscroll");
			}
		};

		navOpen.addEventListener("click", toggleNavOpen);
		navClose.addEventListener("click", toggleNavClose);
		window.addEventListener("resize", navResizeEvent);

		const excusesText = document.querySelector("[data-excuses-text]");
		const typewriter = new Typewriter(excusesText, {
			loop: true,
		});

		typewriter
			.pauseFor(1000)
			.typeString("EXCUSES")
			.pauseFor(2000)
			.deleteAll(100)
			.pauseFor(1000)
			.typeString("CRYING")
			.pauseFor(2000)
			.deleteAll(100)
			.pauseFor(1000)
			.typeString("COMPLAINTS")
			.pauseFor(2000)
			.deleteAll(100)
			.pauseFor(1000)
			.typeString("WHINING")
			.pauseFor(2000)
			.deleteAll(100)
			.start();
	},
};

document.addEventListener("DOMContentLoaded", app.init);
