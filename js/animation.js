export function animationOnClick() {

    this.revealContent = function() {
        const items = document.querySelectorAll('#button');
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', e => {
                const hiddenContent = document.querySelectorAll('#hidden');
                for (let j = 0; j < hiddenContent.length; j++) {
                    if (i === j) {
                        hiddenContent[j].classList.toggle('container--invisible');
                    }
                }
            });
        };
    }

    this.rotateArrow = function() {
        const arrows = document.querySelectorAll('.container__break');
        for (let i = 0; i < arrows.length; i++) {
            arrows[i].addEventListener('click', e => {
                const rotateArrow = document.querySelectorAll('.container__break__chevron');
                for (let j = 0; j < rotateArrow.length; j++) {
                    if (i === j) {
                        rotateArrow[j].classList.toggle('container__break__chevron--rotate--down');
                    }
                }
            });
        };
    }
}