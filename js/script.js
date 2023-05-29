const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}


const mobileMenu = $('.mobile-menu-board');
const _menu = $('.mobile-menu');

mobileMenu.on('click', function (){
    if(_menu.hasClass(active)){
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
})

function openMobileMenu(){
    mobileMenu.addClass(active);
    _menu.addClass(active);
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu(){
    mobileMenu.removeClass(active);
    _menu.removeClass(active);
    document.body.style.overflow = null;
}




$('#header-slider').slick({
    dots: true,
    prevArrow: `<button class="prev-slider"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="next-slider"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});






// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})
//
defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})

defaultInput.next('.password').on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        thisElem.removeClass(active);
        thisElem.html(`<i class="fa-regular fa-eye"></i>`)
        thisElem.prev('input').attr('type', 'password');
    } else {
        thisElem.addClass(active);
        thisElem.html(`<i class="fa-regular fa-eye-slash"></i>`);
        thisElem.prev('input').attr('type', 'text');
    }
})


const openingMenu = $('.opening-menu');

openingMenu.on('click', function (){
    const _thisElem = $(this);
    const _thisNextElem = $(this).children('.submenu');

    if(_thisElem.hasClass(active)){
        _thisElem.removeClass(active);
        _thisNextElem.removeClass(active);
    } else {
        _thisElem.addClass(active);
        _thisNextElem.addClass(active);
    }
})



const desktopMenu = $('.opening-desktop-menu');

desktopMenu.on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        thisElem.removeClass(active);
    } else {
        thisElem.addClass(active);
    }
})

const sliderGalleryImages = [
    '1.jpg',
    '2.jpeg',
    '3.jpg',
    '4.png',
    '5.jpeg',
    '6.jpg',
    '7.jpeg',
    '8.jpg',
    '9.jpeg',
    '10.jpg',
    '11.jpeg',
    '12.jpg',
    '13.jpeg',
    '13.jpg',
    '14.jpg',
    '15.jpeg',
    '16.jpg',
    '17.jpeg',
    '18.jpeg',
    '19.jpg',
    '20.jpeg',
    '21.jpg',
    '22.jpeg',
    '24.jpeg',
    '25.jpg',
    '26.jpeg',
    '27.jpg',
    '28.jpeg',
    '29.jpg',
    '30.jpeg',
    '31.jpg',
    '32.jpeg',
    '33.jpg',
    '34.jpeg',
    '35.jpg',
    '36.jpeg',
    '37.jpg',
    '38.jpeg',
    '39.jpg',
    '40.jpeg',
    '41.jpg',
    '42.jpeg',
    '43.jpg',
    '44.jpeg',
    '45.jpg',
    '46.jpeg',
    '47.jpg',
    '48.jpeg',
    '49.jpg',
    '50.jpeg',
    '51.jpg',
    '52.jpeg',
    '53.jpeg',
    '54.jpeg',
    '55.jpeg',
    '56.jpeg',
    '57.jpeg',
    '58.jpeg',
    '59.jpeg',
    '60.jpeg',
    '61.jpeg',
    '62.jpeg',
    '63.jpeg',
    '64.jpeg',
    '65.jpeg',
    '66.jpeg',
    '67.jpeg',
    '68.jpeg',
    '69.jpeg',
    '70.jpeg',
    '71.jpeg',
    '72.jpg',
    '73.jpg',
    '90.jpg',
    '99.jpg',
    '87.jpg',
    '79.jpg',
    '91.jpg',
    '77.jpg',
    '81.jpg',
    '80.jpg',
    '93.jpg',
    '83.jpg',
    '78.jpg',
    '82.jpg',
    '85.jpg',
    '92.jpg',
    '89.jpg',
    '98.jpg',
    '97.jpg',
    '75.jpg',
    '96.jpg',
    '95.jpg',
    '88.jpg',
    '84.jpg',
    '76.jpg',
    '86.jpg',
    '74.jpg',
]
const btnToTop = $('.btn-to-top');

$('window').on('load', function(){
    const siteForms = $('form.site-form');
    const thanksModal = new bootstrap.Modal(document.getElementById('thanksModal'), {
        keyboard: false
    })
})

$(window).on('scroll', function (e){
    const scrollTop = $(e.target).scrollTop();
    btnTop(scrollTop);
})

btnToTop.on('click', function (){
    $(window).scrollTop(0);
})

function btnTop(scrollTop){
    if(scrollTop > 200){
        btnToTop.addClass(active);
    } else {
        btnToTop.removeClass(active);
    }
}



const sliderHtmlTemplates = (arr) => {
    return `
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center">
                <a href="images/slider/${arr[0]}" data-fancybox="gallery" >
                  <div class="min-img"  style="background-image: url(images/slider/${arr[0]})"></div>
                </a>
                <a href="images/slider/${arr[1]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[1]})"></div>
                </a>
              </div>
              <a href="images/slider/${arr[2]}" data-fancybox="gallery" >
                <div class="max-min" style="background-image: url(images/slider/${arr[2]})"></div>
              </a>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center">
                <a href="images/slider/${arr[3]}" data-fancybox="gallery" >
                  <div class="min-img"  style="background-image: url(images/slider/${arr[3]})"></div>
                </a>
                <a href="images/slider/${arr[4]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[4]})"></div>
                </a>
              </div>
              <a href="images/slider/${arr[5]}" data-fancybox="gallery" >
                <div class="max-min" style="background-image: url(images/slider/${arr[5]})"></div>
              </a>
            </div>
            <a href="images/slider/${arr[6]}" data-fancybox="gallery" >
              <div class="max-img" style="background-image: url(images/slider/${arr[6]})"></div>
            </a>
            <div class="d-flex justify-content-start align-items-start flex-column">
              <a href="images/slider/${arr[7]}" data-fancybox="gallery" >
                <div class="max-min" style="background-image: url(images/slider/${arr[7]})"></div>
              </a>
              <div class="d-flex justify-content-start">
                <a href="images/slider/${arr[8]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[8]})"></div>
                </a>
                <a href="images/slider/${arr[9]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[9]})"></div>
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-start align-items-start flex-column">
              <a href="images/slider/${arr[10]}" data-fancybox="gallery" >
                <div class="max-min" style="background-image: url(images/slider/${arr[10]})"></div>
              </a>
              <div class="d-flex justify-content-start">
                <a href="images/slider/${arr[11]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[11]})"></div>
                </a>
                <a href="images/slider/${arr[12]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[12]})"></div>
                </a>
              </div>
            </div>
             <div class="d-flex flex-column">
              <div class="d-flex justify-content-start">
                <a href="images/slider/${arr[13]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[13]})"></div>
                </a>
                <a href="images/slider/${arr[14]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[14]})"></div>
                </a>
              </div>
              <div class="d-flex justify-content-start">
                <a href="images/slider/${arr[15]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[15]})"></div>
                </a>
                <a href="images/slider/${arr[16]}" data-fancybox="gallery" >
                  <div class="min-img" style="background-image: url(images/slider/${arr[16]})"></div>
                </a>
              </div>
            </div>
`
};

let ArrUrls = [];
let ArrUrlsCount = 0;

sliderGalleryImages.forEach((url, index) => {
    if(ArrUrlsCount < 18){
        ArrUrls.push(url);
    } else {
        $('.work-solid').append(sliderHtmlTemplates(ArrUrls));
        ArrUrlsCount = 0;
        ArrUrls = [];
    }

    if(index <= sliderGalleryImages.length - 1) {
        ArrUrlsCount++
    } else {
        $('.work-solid').append(sliderHtmlTemplates(ArrUrls));
        ArrUrlsCount = 0;
    }


})


// let allStyleImagesArr = [];
// const allStyleImages = $('*[data-style-image]');
// allStyleImages.map((index, elem) => {
//     const _elem = $(elem);
//     const imageLink = _elem.data('style-image').replace(/ /g, '');
//     allStyleImagesArr.push({
//         elem: elem,
//         url: `images/${imageLink}`
//     })
//     _elem.removeAttr('data-style-image');
// })
//
// function startConvertImage(){
//     allStyleImagesArr.forEach((arr) => {
//         const _elem = $(arr.elem);
//         _elem.css('background-image', `url(${arr.url})`);
//         _elem.removeAttr('data-style-image');
//     })
// }






// siteForms.on('submit', function (e){
//     e.preventDefault();
//     const thisForm = $(this);
//
//
//     $.ajax({
//         type: "POST",
//         url: '../form.php',
//         data: thisForm.serialize(),
//         dataType: "html",
//         success: function(response){
//             if(response === '1'){
//                 thanksModal.show()
//             }
//         }
//     });
// })

