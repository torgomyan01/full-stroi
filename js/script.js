const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}






// $('#reviews').slick({
//     dots: true,
//     prevArrow: `<button class="prev-slider"><i class="fas fa-chevron-left"></i></button>`,
//     nextArrow: `<button class="next-slider"><i class="fas fa-chevron-right"></i></button>`,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     responsive: [
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 1
//             }
//         }
//     ]
// });






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

// -------------- FOR DEFAULT INPUT FUNCTION -------------------
allStyleImagesArr = [];
const allStyleImages = $('*[data-style-image]');
allStyleImages.map((index, elem) => {
    const _elem = $(elem);
    const imageLink = _elem.data('style-image').replace(/ /g, '');
    allStyleImagesArr.push({
        elem: elem,
        url: `images/${imageLink}`
    })
    _elem.removeAttr('data-style-image');
})

function startConvertImage(){
    allStyleImagesArr.forEach((arr) => {
        const _elem = $(arr.elem);
        _elem.css('background-image', `url(${arr.url})`);
        _elem.removeAttr('data-style-image');
    })
}


const siteForms = $('form.site-form');
const thanksModal = new bootstrap.Modal(document.getElementById('thanksModal'), {
    keyboard: false
})


siteForms.on('submit', function (e){
    e.preventDefault();
    const thisForm = $(this);


    $.ajax({
        type: "POST",
        url: '../form.php',
        data: thisForm.serialize(),
        dataType: "html",
        success: function(response){
            if(response === '1'){
                thanksModal.show()
            }
        }
    });
})

