export const parallaxEffect = (element: Element, e?: MouseEvent) => {
    let xValue = 0, yValue = 0, rotateDegree = 0

    if (e) {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
    }

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    let speedX = Number(element.getAttribute('data-speedx'));
    let speedY = Number(element.getAttribute('data-speedy'));
    let speedZ = Number(element.getAttribute('data-speedz'));
    let rotateSpeed = Number(element.getAttribute('data-rotation'));

    let isInLeft = parseFloat(getComputedStyle(element).left) < (window.innerWidth / 2) ? 1 : -1;

    let zValue = (xValue - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;

    (element.childNodes[0] as HTMLElement).style.transform = `perspective(1920px) translateZ(${
        zValue * speedZ}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
        -xValue * speedX}px)) translateY(calc(-50% + ${yValue * speedY}px))`;
}