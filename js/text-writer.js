(function () {
    this.ScrollText = function (textArray, id) {
        let parent = document.querySelector(id),
            wl = 0,
            i = 1,
            el = document.createElement("div");
        parent.style.display = "flex";
        parent.append(el);
        el.parentElement.append(addCursor());
        el.style.display = "inline-block";
        el.style.fontWeight = '700';
        let isForward = true;
        setInterval(() => {
            if (!isForward && i === -1) {
                wl++;
                i++;
                isForward = true;
            }
            if (wl === textArray.length) {
                wl = 0;
            }
            if (i <= textArray[wl]["text"].length) {
                el.style.color = textArray[wl]["color"];
                el.innerHTML = textArray[wl]["text"].slice(0, i);
                if (i === textArray[wl]["text"].length) isForward = false;
                isForward ? i++ : i--;
            }
        }, 200);
    };
    this.addCursor = function () {
        const span = document.createElement("span");
        span.innerHTML = "|";
        span.style.animation = "flicker 0.5s ease-in infinite";
        return span;
    };
})();

const text = new ScrollText(
    [
        { text: "ВАШ ПОИСК ЗАКОНЧЕН.", color: "#FFB800" },
    ],
    "#header-text"
);
