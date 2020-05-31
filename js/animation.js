export function animationOnClick() {

    this.revealContent = function() {
        let items = document.querySelectorAll('#button');
        items.forEach(item => {
            item.addEventListener('click', event => {
                console.log(event);
                const hiddenContent = document.querySelector('#hidden');
                hiddenContent.classList.toggle('container--invisible');
            });
        });
    }

    this.rotateArrow = function() {
        document.querySelectorAll('.container__break').forEach(item => {
            item.addEventListener('click', event => {
                console.log(event);
                const rotateArrow = document.querySelector('.container__break__chevron');
                rotateArrow.classList.toggle('container__break__chevron--rotate--down');
            });
        });
    }
}