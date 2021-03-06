'use strict'

$(function initPage() {
    $('.hidden').hide();
})

function backToTop() {
    const toTopBtn = document.querySelector('#to-top-button');
    toTopBtn.addEventListener('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 'slow');
    })
}

function smoothScroll() {
    $('.scroll').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (window.innerWidth > 810 && scroll > 200) {
                $('#to-top-button').show();
        }
        else if (window.innerWidth <= 810) {
            if (scroll > 200) {
                $('#to-top-button').show();
                $('.menu a, .show-menu').css('color', '#4d241f');
            }
            else {
                $('#to-top-button').hide();
                $('.show-menu').css('color', '#ffc847');
            }
        }
        else {
            $('#to-top-button').hide();
        }
    })
}

function viewProjects() {
    $('#view-project-button,#arrow-down').on('click', function () {
        $('header').fadeIn();
        $('.hidden').show();
        $('html,body').animate({
            scrollTop: $('#project-container').offset().top
        }, 800);
    })
}

function toggleMenu() {
    $('.menu a').on('click', function () {
        $('.hide-menu').click();
    })
}

function showPortfolio() {
    backToTop();
    smoothScroll();
    viewProjects();
    toggleMenu();
}

showPortfolio();
