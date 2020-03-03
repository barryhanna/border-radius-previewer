const borderRadiusSliderTopLeft = document.getElementById('border-slider-tl');
const borderRadiusSliderTopRight = document.getElementById('border-slider-tr');
const borderRadiusSliderBottomRight = document.getElementById('border-slider-br');
const borderRadiusSliderBottomLeft = document.getElementById('border-slider-bl');

const brTopLeftDisplay = document.getElementById('tl');
const brTopRightDisplay = document.getElementById('tr');
const brBottomLeftDisplay = document.getElementById('bl');
const brBottomRightDisplay = document.getElementById('br');

const box = document.getElementById('box');

borderRadiusSliderTopLeft.addEventListener('change', () => {
	box.style.borderTopLeftRadius = `${borderRadiusSliderTopLeft.value}` + '%';
	brTopLeftDisplay.innerText = box.style.borderTopLeftRadius;
});

borderRadiusSliderTopRight.addEventListener('change', () => {
	box.style.borderTopRightRadius = `${borderRadiusSliderTopRight.value}` + '%';
	brTopRightDisplay.innerText = box.style.borderTopRightRadius;
});

borderRadiusSliderBottomRight.addEventListener('change', () => {
	box.style.borderBottomRightRadius = `${borderRadiusSliderBottomRight.value}` + '%';
	brBottomRightDisplay.innerText = box.style.borderBottomRightRadius;
});

borderRadiusSliderBottomLeft.addEventListener('change', () => {
	box.style.borderBottomLeftRadius = `${borderRadiusSliderBottomLeft.value}` + '%';
	brBottomLeftDisplay.innerText = box.style.borderBottomLeftRadius;
});