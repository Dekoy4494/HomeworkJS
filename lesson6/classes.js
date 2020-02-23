window.addEventListener('DOMContentLoaded', function () {
'use strict';

class Options {
    constructor(height, width, fontSize, bg, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    addNewDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'Рандомный текст';
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        div.style.cssText = param;
    }
}

const addDiv = new Options(200,500,24,"red","center");
    addDiv.addNewDiv();
});