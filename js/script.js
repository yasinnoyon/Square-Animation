let x = 50;
let y = 0;
window.onload = function () {
    const blueSquare = document.getElementById('blue-square');

    // axis is for make 1 second delay between move x axis and y axis
    let axis = false;

    // moveX is for go square up or down
    let moveX = 10;
    // moveY is for go square left or right
    let moveY = 10;
    setInterval(function () {
        if (axis) {
            axis = false;
            x += moveX;

            blueSquare.style.top = x + 'px';

            // if top position will be 620 then moveX will be negative
            // if top position will be 0 then moveX will positive
            if (x === 620 || x === 0) moveX = -moveX;
        }
        else {
            axis = true;
            y += moveY;
            blueSquare.style.left = y + 'px';

            // if left position will be 620 then moveY will be negative
            // if left position will be 0 then moveY will positive
            if (y === 1500 || y === 0) moveY = -moveY;
        }
    }, 1000);


}