var loadFile = function(event) {
	var image = document.getElementById('image');
	image.src = URL.createObjectURL(event.target.files[0]);

    var image = document.getElementById('image2');
	image.src = URL.createObjectURL(event.target.files[0]);

    var image = document.getElementById('image3');
	image.src = URL.createObjectURL(event.target.files[0]);

    var image = document.getElementById('image4');
	image.src = URL.createObjectURL(event.target.files[0]);
}