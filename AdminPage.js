const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');





//buttons
const prevBtn = document.querySelector('#prevbtn');
const nextBtn = document.querySelector('#nextbtn');





//conter 
let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlider.style.transform='translateX(' + (-size * counter) + 'px)';




//buttons listener 
 nextBtn.addEventListener('click', () => {
            if(counter>=carouselImages.length -1)return;

            carouselSlider.style.transition="transfrom 0.4s ease-in-out";
            counter++;
            carouselSlider.style.transform='translateX(' + (-size * counter) + 'px)';

 });
 prevBtn.addEventListener('click', () => {

        carouselSlider.style.transition="transfrom 0.4s ease-in-out";
        counter--;
        carouselSlider.style.transform='translateX(' + (-size * counter) + 'px)';

 });
 
//******************************* */





 carouselSlider.addEventListener('transitionend', () => {
    if(carouselp[counter].id === 'lastclone'){
        carouselSlider.style.transition = "none";
        counter=carouselp.length - 2 ;
        carouselSlider.style.transform='translateX(' + (-size * counter) + 'px)';
        console.log('none');
    }
    if(carouselp[counter].id === 'firstclone'){
        carouselSlider.style.transition = "none";
        counter=carouselp.length - counter ;
        carouselSlider.style.transform='translateX(' + (-size * counter) + 'px)';
        console.log('none');
    }
 });
 