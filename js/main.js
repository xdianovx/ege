//header burger 
const burgerBtn = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__nav')
const overlay = document.querySelector('#overlay')
const navLink = document.querySelectorAll('.header__link')

burgerBtn.addEventListener('click', function () {
    headerMenu.classList.toggle('active')
    document.body.classList.toggle('active')
    overlay.classList.toggle('active')



    navLink.forEach(function (item) {
        item.addEventListener('click', function () {
            headerMenu.classList.remove('active')
            document.body.classList.remove('active')
            overlay.classList.remove('active')
        })
    })
})

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none"
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })

    }

    function showTabContent(i = 0) {
        content[i].style.display = "flex"
        tab[i].classList.add('active')
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i)
                }

            })
        }
    })
}

const sections = document.querySelectorAll('.anchor')

var lastId,
    topMenu = $(".header__nav > ul"),
    topMenuHeight = $('.header__wrap').outerHeight(),
    menuItems = topMenu.find("li > a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });




menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

$(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;

        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});


tabs('.tab__wrap', '.button-tab', '.content__item', 'active')

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.choose__select_item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML;
        let contentText = this.closest('.select').querySelector('.choose__select')
        this.closest('.select').classList.remove('is-active')
        console.log(contentText);
        contentText.innerHTML = text

    }

};


select();
tabs('.select__body', '.choose__select_item', '.choose__options', 'is-active')


const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target) {
                    e.preventDefault
                }

                modal.style.display = "block"
                document.body.style.overflow = 'hidden'
            })

        })
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = ''
        })
    }

    bindModal('.header__right_btn', '.modal__callback', '.modal__close')
    bindModal('.hero__button', '.modal__callback', '.modal__close')
    bindModal('.button__choose', '.modal__callback', '.modal__close')
    bindModal('.button__masterclass', '.modal__callback', '.modal__close')
    bindModal('.start__button', '.modal__callback', '.modal__close')

    bindModal('.button__teacher_4', '.modal__teacher_4', '.modal__close_4')
    bindModal('.button__teacher_5', '.modal__teacher_5', '.modal__close_5')
    bindModal('.button__teacher_6', '.modal__teacher_6', '.modal__close_6')
    bindModal('.button__teacher_7', '.modal__teacher_7', '.modal__close_7')
    bindModal('.button__teacher_8', '.modal__teacher_8', '.modal__close_8')
    bindModal('.button__teacher_9', '.modal__teacher_9', '.modal__close_9')
    bindModal('.button__teacher_10', '.modal__teacher_10', '.modal__close_10')
    bindModal('.button__teacher_11', '.modal__teacher_11', '.modal__close_11')
    bindModal('.button__teacher_12', '.modal__teacher_12', '.modal__close_12')
    bindModal('.button__teacher_13', '.modal__teacher_13', '.modal__close_13')
    bindModal('.button__teacher_14', '.modal__teacher_14', '.modal__close_14')
    bindModal('.button__teacher_15', '.modal__teacher_15', '.modal__close_15')
    bindModal('.button__teacher_16', '.modal__teacher_16', '.modal__close_16')
    bindModal('.button__teacher_17', '.modal__teacher_17', '.modal__close_17')
    bindModal('.button__teacher_18', '.modal__teacher_18', '.modal__close_18')
    bindModal('.button__teacher_19', '.modal__teacher_19', '.modal__close_19')
    bindModal('.button__teacher_20', '.modal__teacher_20', '.modal__close_20')
    bindModal('.button__teacher_21', '.modal__teacher_21', '.modal__close_21')
    bindModal('.button__teacher_22', '.modal__teacher_22', '.modal__close_22')
    bindModal('.button__teacher_23', '.modal__teacher_23', '.modal__close_23')
    bindModal('.button__teacher_24', '.modal__teacher_24', '.modal__close_24')
    bindModal('.button__teacher_25', '.modal__teacher_25', '.modal__close_25')
    bindModal('.button__teacher_26', '.modal__teacher_26', '.modal__close_26')
    bindModal('.cost__item_button', '.cost__modal', '.cost__close')
    bindModal('.modal__teacher_btn', '.modal__callback', '.modal__close')
}

modals()

$('.phone').inputmask("+7 (999) 999 99 99");






$('.teachers__wrap').slick({
    slidesToShow: 3,
    dots: true,

    appendArrows: $('.teacher__arrows'),
    prevArrow: '<button id="prev" class="slider__btn slider__btn_l"></button>',
    nextArrow: '<button id="next" class="slider__btn slider__btn_r"></button>',
    responsive: [
        {
            breakpoint: 1151,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 621,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
})





if (window.outerWidth < 800) {
    var dots = $('.teachers__wrap .slick-dots>li');
    //вешаем обработчик на наши точки

    dots.on('click', function () {
        var $this = $(this);
        dots.removeClass('before after');
        //отображаем 2 предыдущие точки
        $this
            .prev().addClass('before')
            .prev().addClass('before');
        //отображаем 2 следующие точки
        $this
            .next().addClass('after')
            .next().addClass('after');


        //если мы в самом начале - добавляем пару последующих точек
        if (!$this.prev().length) {
            $this.next().next().next()
                .addClass('after').next()
                .addClass('after');
        }
        //на 2й позиции - добавляем одну точку
        if (!$this.prev().prev().length) {
            $this.next().next().next()
                .addClass('after');
        }
        //в самом конце - добавляем пару доп. предыдущих точек
        if (!$this.next().length) {
            $this.prev().prev().prev()
                .addClass('before').prev()
                .addClass('before');
        }
        //предпоследний элемента - добавляем одну пред. точку
        if (!$this.next().next().length) {
            $this.prev().prev().prev()
                .addClass('before');
        }
    });
    // dots.eq(0).on('click');//кликаем на первую точку

}






$('.cost__wrap').slick({
    slidesToShow: 4,
    dots: false,
    arrows: true,
    infinite: true,
    appendArrows: $('.cost__arrows'),
    prevArrow: '<button id="prev" class="slider__btn slider__btn_l"></button>',
    nextArrow: '<button id="next" class="slider__btn slider__btn_r"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
})


let accordion = (function () {

    let $accordion = $('.js-accordion');
    let $accordion_header = $accordion.find('.accordion-header.js-accordion-header');
    let $accordion_item = $('.js-accordion-item');

    let settings = {
        speed: 400,
        oneOpen: false
    };

    return {
        init: function ($settings) {
            $accordion_header.on('click', function () {
                accordion.toggle($(this));

            });

            $.extend(settings, $settings);

            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function ($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$('.up-arrow').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

accordion.init({ speed: 300, oneOpen: true })

var $status = $('.rewievs__count');
var $slickElement = $('.rewievs__wrap');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if (!slick.$dots) {
        return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + (slick.$dots[0].children.length));
});

$slickElement.slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    appendArrows: $('.rewievs__arrows'),
    prevArrow: '<button id="prev" class="slider__btn slider__btn_l"></button>',
    nextArrow: '<button id="next" class="slider__btn slider__btn_r"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {

            }
        },
        {
            breakpoint: 770,
            settings: {

            }
        },
        {
            breakpoint: 550,
            settings: {

            }
        },
    ]
});


$(function () {
    $('.reviews__info_text').readmore({
        moreLink: '<a href="#" class"readmore__btn" >Читать полностью</a>',
        lessLink: '<a href="#" class"readmore__btn" >Скрыть</a>',
        collapsedHeight: 90,
        speed: 200,
        afterToggle: function (trigger, element, expanded) {
            if (!expanded) { // The "Close" link was clicked 
                $('html, body').animate({ scrollTop: $(element).offset().top }, { duration: 100 });
            }
        }
    });
});




const calcForm = document.querySelectorAll('.cost__item')

calcForm.forEach(form => {
    let countNum = form.querySelector('.cost__item_count')
    let plusBtn = form.querySelector('.cost__item_count-plus')
    let minusBtn = form.querySelector('.cost__item_count-minus')
    let checkPeriodPay = form.querySelector('.checkbox__all')
    let checkPreference = form.querySelector('.checkbox__preference')

    let lessonPrice = 1660
    let lessonOlymp = 2000
    let lessonInt = 24000
    let lessonPersonal = 4500
    let lessonElementary = 75000
    let lessonAverage = 80000
    let lessonHigh = 85000
    let lessonCareer = 5000
    let lessonChild = 50000
    let priceList = {
        lesson: 2000 * 4,
        lessonOlymp: 2500 * 4,
        lessonInt: 30000,
        lessonPersonal: 6000,
        lessonElementary: 90000,
        lessonAverage: 90000,
        lessonHigh: 90000,
        lessonCareer: 8000,
        lessonChild: 70000,
        discount: {
            family: .95,
            pay: .9
        },
        lessonsCount: 4
    }

    let oldPrice = form.querySelector('.cost__item_price-old > span')
    let price = form.querySelector('.cost__item_price > span')
    let priceSave = form.querySelector('.cost__item_eco > span')
    let priceOlymp = form.querySelector('.cost__item_price-olymp > span')
    let priceInt = form.querySelector('.cost__item_price_intence > span')
    let pricePersonal = form.querySelector('.cost__item_price-personal > span')
    let priceElementary = form.querySelector('.cost__item_price-elementary > span')
    let priceAverage = form.querySelector('.cost__item_price-average > span')
    let priceHigh = form.querySelector('.cost__item_price-high > span')
    let priceCareer = form.querySelector('.cost__item_price-career > span')
    let priceChild = form.querySelector('.cost__item_price-child > span')


    checkPeriodPay.addEventListener('change', () => {
        if (checkPeriodPay.checked) {
            price.innerHTML = Math.round(price.innerHTML * priceList.discount.pay)
            console.log(price.innerHTML);
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML


        } else {
            price.innerHTML = Math.round(price.innerHTML / priceList.discount.pay)
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML

        }
    })

    checkPreference.addEventListener('change', () => {
        if (checkPreference.checked) {
            price.innerHTML = Math.round(price.innerHTML * priceList.discount.family)
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML


        } else {
            price.innerHTML = Math.round(price.innerHTML / priceList.discount.family)
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML

        }
    })





    oldPrice.innerHTML = priceList.lesson
    price.innerHTML = lessonPrice * priceList.lessonsCount
    priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML


    if (priceInt) {
        priceInt.innerHTML = lessonInt
        oldPrice.innerHTML = priceList.lessonInt
        priceSave.innerHTML = oldPrice.innerHTML - priceInt.innerHTML
    }


    if (priceOlymp) {
        priceOlymp.innerHTML = lessonOlymp * priceList.lessonsCount
        oldPrice.innerHTML = priceList.lessonOlymp
        priceSave.innerHTML = oldPrice.innerHTML - priceOlymp.innerHTML

        let plusBtnOl = form.querySelector('.cost__item_count-olymp-plus')
        let minusBtnOl = form.querySelector('.cost__item_count-olymp-minus')

        plusBtnOl.addEventListener('click', () => {
            countNum.innerHTML = ++countNum.innerText

            calcOlymp(countNum.innerHTML, 2000)
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML

        })

        minusBtnOl.addEventListener('click', () => {
            if (countNum.innerHTML > 1) {
                countNum.innerHTML = --countNum.innerText

                calcOlymp(countNum.innerHTML, 2000)
                priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML
            }
        })

    }

    if (pricePersonal) {
        pricePersonal.innerHTML = lessonPersonal
        oldPrice.innerHTML = priceList.lessonPersonal
        priceSave.innerHTML = oldPrice.innerHTML - lessonPersonal
    }

    if (priceElementary) {
        priceElementary.innerHTML = lessonElementary
        oldPrice.innerHTML = priceList.lessonElementary
        priceSave.innerHTML = oldPrice.innerHTML - priceElementary.innerHTML
    }

    if (priceAverage) {
        priceAverage.innerHTML = lessonAverage
        oldPrice.innerHTML = priceList.lessonAverage
        priceSave.innerHTML = oldPrice.innerHTML - priceAverage.innerHTML
    }

    if (priceHigh) {
        priceHigh.innerHTML = lessonHigh
        oldPrice.innerHTML = priceList.lessonHigh
        priceSave.innerHTML = oldPrice.innerHTML - priceHigh.innerHTML
    }

    if (priceCareer) {
        priceCareer.innerHTML = lessonCareer
        oldPrice.innerHTML = priceList.lessonCareer
        priceSave.innerHTML = oldPrice.innerHTML - priceCareer.innerHTML
    }

    if (priceChild) {
        priceChild.innerHTML = lessonChild
        oldPrice.innerHTML = priceList.lessonChild
        priceSave.innerHTML = oldPrice.innerHTML - priceChild.innerHTML
    }


    let calc = function updatePrice(count, priceLesson) {

        if (count == 1) {
            lessonPrice = 1660
        } else if (count == 2) {
            lessonPrice = 1610
        } else if (count == 3) {
            lessonPrice = 1560
        } else {
            lessonPrice = 1510
        }


        oldPrice.innerHTML = count * priceList.lesson
        price.innerHTML = Math.floor(count * (lessonPrice * priceList.lessonsCount))
        let priceSaved = oldPrice.innerHTML - price.innerHTML
        priceSave.innerHTML = priceSaved

        if (checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.pay))

        }

        if (checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.family))

        }

        if (checkPeriodPay.checked && checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.family * priceList.discount.pay))
            console.log(price.innerHTML);
        }
    }

    let calcOlymp = function updatePrice(count, priceLesson) {
        oldPrice.innerHTML = count * priceList.lesson
        price.innerHTML = Math.floor(count * (priceLesson * priceList.lessonsCount))
        let priceSaved = oldPrice.innerHTML - price.innerHTML
        priceSave.innerHTML = priceSaved

        if (checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.pay))

        }

        if (checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.family))

        }

        if (checkPeriodPay.checked && checkPeriodPay.checked) {
            price.innerHTML = Math.floor(count * ((lessonPrice * priceList.lessonsCount) * priceList.discount.family * priceList.discount.pay))
            console.log(price.innerHTML);
        }

    }



    if (plusBtn) {
        plusBtn.addEventListener('click', () => {

            countNum.innerHTML = ++countNum.innerText
            calc(countNum.innerHTML)
            priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML

        })


        minusBtn.addEventListener('click', () => {
            if (countNum.innerHTML > 1) {
                countNum.innerHTML = --countNum.innerText
                calc(countNum.innerHTML)
                priceSave.innerHTML = oldPrice.innerHTML - price.innerHTML

            }
        })
    }



})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let cartBtn = document.querySelectorAll('.cost__item_button')
cartBtn.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.modal-cost__subjects').style.display = "none"
        let parentForm = item.parentNode
        let title = parentForm.querySelector('h3').innerText
        let modalTitle = document.querySelector('.modal-cost__title')
        let toMailSubject = document.querySelector('.tomailname')
        let toMailCost = document.querySelector('.tomailcost')

        let totalPrice = parentForm.querySelector('.cost__item_price > span').innerText
        let modalPrice = document.querySelector('.modal-cost__price > span')
        modalPrice.innerHTML = totalPrice + 'руб'
        modalTitle.innerHTML = title
        toMailSubject.value = title
        toMailCost.value = totalPrice + 'руб'

        console.log(toMailSubject.value);
        console.log(toMailCost.value);

        if (parentForm.querySelector('.cost__item_counter')) {
            let subjects = parentForm.querySelector('.cost__item_count').innerText
            let toMailCount = document.querySelector('.tomailcount')
            let modalSubjects = document.querySelector('.modal-cost__subjects > span')
            document.querySelector('.modal-cost__subjects').style.display = "block"
            modalSubjects.innerHTML = subjects
            toMailCount.value = subjects

            console.log(toMailCount.value);
        }

    })

})


const thanksModal = document.querySelector('.thanks')
const thanksClose = thanksModal.querySelector('button')

thanksClose.addEventListener('click', () => {
    thanksModal.style.display = "none"
})

const allModals = document.querySelectorAll('.modal')


const closeModals = () => {
    allModals.forEach(item => {

        if (!item.classList.contains('thanks')) {
            item.style.display = "none"
            document.body.style.overflow = ''
        }

    })
}



$(".rewievs__arrows button").on('click', function (e) {
    e.preventDefault();
    $(".rewievs__arrows button").removeClass('active');
    $(this).addClass('active');
})

const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    phoneInputs = document.querySelectorAll('input[name="phone"]'),
    nameInputs = document.querySelector('input[name="name"]')


const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInputs = () => {
    inputs.forEach(item => {
        item.value = '';
    });
};

form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        let thanks = document.querySelector('.thanks');
        thanks.style.display = "block"
        setTimeout(() => {
            thanks.style.display = "none"
        }, 10000)
        const formData = new FormData(item);

        postData('server.php', formData)
            .then(res => {
                console.log(res);
            })
            .finally(() => {

                clearInputs()
                closeModals()

            });
    });
});

