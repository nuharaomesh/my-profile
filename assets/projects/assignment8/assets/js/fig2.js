let clr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function clrChange() {

    let lastClr = clr.pop();
    clr.unshift(lastClr);

    $("section> .clr-box:nth-last-of-type(3)").css({backgroundColor: clr[0]});
    $("div> .clr-box:nth-last-of-type(4)").css({backgroundColor: clr[1]});
    $("div> .clr-box:nth-last-of-type(3)").css({backgroundColor: clr[2]});
    $("div> .clr-box:nth-last-of-type(2)").css({backgroundColor: clr[3]});
    $("div> .clr-box:nth-last-of-type(1)").css({backgroundColor: clr[4]});
    $("section> .clr-box:nth-last-of-type(1)").css({backgroundColor: clr[5]});
}

let startBtn = $("#btnStart");
let interval = null;

startBtn.on('click', () => {

    if (startBtn.text() === "Start") {
        startBtn.text('Stop');
        startBtn.addClass("btnClr");
        interval = setInterval(clrChange, 500);
    } else {
        startBtn.text('Start');
        startBtn.removeClass("btnClr");
        clearInterval(interval);
    }
});