const width = document.getElementById("width-range");
const borderRadius =  document.getElementById("border-radius-range");
const padding =  document.getElementById("padding-range");
const bluring =  document.getElementById("blur-range");
const img = document.getElementsByTagName("img")[0];
const colorPicker = document.getElementById("color-picker");
const text = document.getElementById("js");

colorPicker.oninput = () => {
    text.style.color = colorPicker.value;
    colorPicker.style.backgroundColor = colorPicker.input;
    img.style.borderColor = colorPicker.value;
}

width.oninput = () => {
    img.style.width = `${width.value}px`;
    img.style.height = `${width.value}px`;
    img.style.borderColor = colorPicker.value;
}

borderRadius.oninput = () => {
    img.style.borderRadius = `${borderRadius.value}px`; 
}

padding.oninput = () => {
    text.style.padding = `${padding.value}px`;
    img.style.borderWidth = `${padding.value}px`
}

bluring.oninput = () => {
    img.style.filter = `blur(${blur.value}px)`
}