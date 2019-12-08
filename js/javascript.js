var link = document.querySelector(".buttom_to_detailed_information_button");
var popup = document.querySelector(".container_request");
var close = document.querySelector(".close");
var input_name = document.querySelector(".input_name");
var form = document.querySelector(".input_form");
var emaeil = document.querySelector(".input_email");
var message = document.querySelector(".input_message");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("emaeil");
} catch (err) {
	isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
	popup.classList.add("container_request_show");

	if (storage){
		emaeil.value = storage;
	} 
	input_name.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("container_request_show");
	popup.classList.remove("modal_error");
});

form.addEventListener("submit", function (evt) {
	if (!input_name.value || !emaeil.value || !message.value){
		evt.preventDefault();
		console.log("Введите данные");
		popup.classList.remove("modal_error");
     	popup.offsetWidth = popup.offsetWidth;
	} else {
		if (isStorageSupport) {
			localStorage.setItem("emaeil", emaeil.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27){
		evt.preventDefault();
		if (popup.classList.contains("container_request_show")) {
			popup.classList.remove("container_request_show");
		}
	}
});

var maplink = document.querySelector(".img_map");
var popupmap = document.querySelector(".map_form");
var closemap = document.querySelector(".close_map");

maplink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.add("map_show");
});

closemap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupmap.classList.remove("map_show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27){
		evt.preventDefault;
		if (popupmap.classList.contains("map_show")) {
			popupmap.classList.remove("map_show");
			popup.classList.remove("modal_error");
		}
	}
});
