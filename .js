let color_input = document.getElementById('bgColorInput');

let font_input = document.getElementById('fontColorInput');

let font_size = document.getElementById('fontSizeInput');

let font_weight = document.getElementById('fontWeightInput');

let padding_input = document.getElementById('paddingInput');

let border_input = document.getElementById('borderRadiusInput');

let my_button = document.getElementById("customButton");







function applly() {

    let color_value = color_input.value;

    let font_value = font_input.value;

    let font_size_value = font_size.value;

    let font_w_value = font_weight.value;

    let padding_value = padding_input.value;

    let border_value = border_input.value;



    my_button.style.backgroundColor = color_value;

    my_button.style.color = font_value;

    my_button.style.fontSize = font_size_value;

    my_button.style.fontWeight = font_w_value;

    my_button.style.padding = padding_value;

    my_button.style.borderRadius = border_value;

}