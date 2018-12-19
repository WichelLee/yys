//小鬼们动起来
var ghostTimer;
ghostTimer = setInterval(function () {
    $('.ghost i').toggleClass('active');
    var left = parseInt($('.ghost ul').css('left'));
    if (left > 1400) {
        $('.ghost ul').css('left', -585);
    } else {
        $('.ghost ul').animate({
            left: left + 70,
        }, 300);
    };
}, 300);
$('.ghost').mouseenter(function () {
    $('.ghost').animate({
        opacity:0,
    },900,function () {
        clearInterval(ghostTimer);
        $('.ghost').css('display','none');
    });
});




//header广告显示隐藏
$('.header-ad').mouseenter(function () {
    $(this).css('visibility', 'hidden');
    $('.header-big-ad').css('display', 'block');
});
$('.header-big-ad').mouseleave(function (e) {
    console.log(e.offsetX);
    console.log(e.offsetY);
    if (e.offsetX > 149 && e.offsetX < 637 && e.offsetY < 0) {

    } else {
        $(this).css('display', 'none');
        $('.header-ad').css('visibility', 'visible');
    }

});
$('.header img').mouseenter(function () {
    $('.header-ad').css('visibility', 'visible');
    $('.header-big-ad').css('display', 'none');
});
$('.header .fr').mouseenter(function () {
    $('.header-ad').css('visibility', 'visible');
    $('.header-big-ad').css('display', 'none');
});
//nav栏固定
var v1 = $('.nav').offset().top;
$(window).scroll(function () {
    var v2 = $(window).scrollTop();
    if (v2 >= v1) {
        $('.nav').css({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            margin: 'auto',
        })
    } else {
        $('.nav').css({
            position: 'static',
        })
    }
})

// nav中的ul li 选中，背景改变
$('.nav ul .nav-able').mouseenter(function () {
    $(this).addClass('nav-active').find('span').addClass('span-active');
    $('.nav ul li').eq(0).addClass('nav-active');
    $(this).find('a').css('color', 'black');
});
$('.nav ul .nav-able').mouseleave(function () {
    $(this).removeClass('nav-active').find('span').removeClass('span-active');
    $(this).find('a').css('color', 'white');
});
// //nav中search翻转效果
// $('.search').mouseenter(function () {
//     $(this).find('img').animate({
//         transform: 'rotateY(180deg)'
// });

//banner中news推荐/新品提示
$('.banner-bottom-right .news-comment .psr').mouseenter(function () {
    $(this).find('i').eq(0).stop().animate({
        top: -20,
    }, 200)
});
$('.banner-bottom-right .news-comment .psr').mouseleave(function () {
    $(this).find('i').eq(0).stop().animate({
        top: 0,
    }, 200)
});

//banner-bottom中news轮播图
var newsNum = 0;
// $('.prev-next #prev-news').css('visibility','hidden');
$('.prev-next #prev-news').click(function () {
    // $('.prev-next #next-news').css('visibility','visible');

    if (newsNum == 0) {
        newsNum = 3;
        $('.news-comment ul').css('left', -3120);
        // $('.prev-next #prev-news').css('visibility','hidden');
    };
    newsNum--;
    // else {
    //     // $('.prev-next #prev-news').css('visibility','visible');
    // }
    $('.news-comment ul').stop().animate({
        left: -1040 * newsNum,
    }, 900);
});
$('.prev-next #next-news').click(function () {

    // $('.prev-next #prev-news').css('visibility','visible');
    if (newsNum == 3) {
        newsNum = 0;
        $('.news-comment ul').css('left', 0);
        // $('.prev-next #next-news').css('visibility','hidden');
    }
    // else {
    //     // $('.prev-next #next-news').css('visibility','visbile');
    // }
    newsNum++;
    $('.news-comment ul').stop().animate({
        left: -1040 * newsNum,
    }, 900);
});
var newsTimer = 0;
newsTimer = setInterval(function () {
    $('.prev-next #next-news').click();
}, 2500);
$('.news-comment,.prev-next').mouseenter(function () {
    clearInterval(newsTimer);
});
$('.news-comment,.prev-next').mouseleave(function () {
    clearInterval(newsTimer);
    newsTimer = setInterval(function () {
        $('.prev-next #next-news').click();
    }, 2500);
});
//banner-bottom 中二维码红线
var lineTimer = 0;
lineTimer = setInterval(function () {
    $('.red-line').animate({
        opacity: 1,
        top: 100,
    }, 1000);
    $('.red-line').animate({
        top: -7,
    }, 1000);
}, 2000);
$('.banner-bottom-left div').mouseenter(function () {
    $('.red-line').css('opacity', 0);
    clearInterval(lineTimer);
});
$('.banner-bottom-left div').mouseleave(function () {
    clearInterval(lineTimer);
    lineTimer = setInterval(function () {
        $('.red-line').animate({
            opacity: 1,
            top: 100,
        }, 1000);
        $('.red-line').animate({
            top: -7,
        }, 1000);
    }, 2000);
});
//section-one三个栏目
//栏目按钮切换
$('.section-one .god-main ul li a').click(function () {
    $('.section-one .god-main ul li a').removeClass('active');
    $(this).addClass('active');
});

//轮播式神
var lis = [
    { src: 'god-bah1.png', src1: 'god-bah.png', name: '彼岸花' },
    { src: 'god-cmtz1.png', src1: 'god-cmtz.png', name: '茨木童子' },
    { src: 'god-jt1.png', src1: 'god-jt.png', name: '椒图' },
    { src: 'god-ym1.png', src1: 'god-ym.png', name: '阎魔' },
    { src: 'god-lyj1.png', src1: 'god-lyj.png', name: '鲤鱼精' },
    { src: 'god-qxd1.png', src1: 'god-qxd.png', name: '青行灯' },
    { src: 'god-bzz1.png', src1: 'god-bzz.png', name: '白藏主' },
    { src: 'god-yc1.png', src1: 'god-yc.png', name: '莹草' },
    { src: 'god-ydj1.png', src1: 'god-ydj.png', name: '妖刀姬' },
    { src: 'god-yqs1.png', src1: 'god-yqs.png', name: '妖琴师' },
    { src: 'god-yml1.png', src1: 'god-yml.png', name: '一目连' },
    { src: 'god-yzq1.png', src1: 'god-yzq.png', name: '玉藻前' },
    { src: 'god-swh1.png', src1: 'god-swh.png', name: '三尾狐' },
];
//左右按键悬停效果
$('#point-left').mouseenter(function () {
    $('#point-left').css({
        backgroundColor: '#ECDBBF',
        backgroundImage: 'url(images/zhuye-lxy/arrow9_cc8c370.png)',
    });
});
$('#point-left').mouseleave(function () {
    $('#point-left').css({
        backgroundColor: '#fff',
        backgroundImage: 'url(images/zhuye-lxy/arrow7_81e9fff.png)',
    });
});
$('#point-right').mouseenter(function () {
    $('#point-right').css({
        backgroundColor: '#ECDBBF',
        backgroundImage: 'url(images/zhuye-lxy/arrow10_573b117.png)',
    });
});
$('#point-right').mouseleave(function () {
    $('#point-right').css({
        backgroundColor: '#fff',
        backgroundImage: 'url(images/zhuye-lxy/arrow8_395366a.png)',
    });
});
//轮播图图片切换
var godNum = 0;
$('#point-left').click(function () {
    var nameNext;
    var namePrev;
    nameNext = lis[godNum].name;
    godNum--;
    if (godNum == 0) {
        namePrev = lis[lis.length - 1].name;
    } else if (godNum < 0) {
        godNum = lis.length - 1;
        namePrev = lis[godNum - 1].name;
    } else {
        namePrev = lis[godNum - 1].name;
    }
    var srcFirst = 'images/zhuye-lxy/' + lis[godNum].src;
    var srcSecond = 'images/zhuye-lxy/' + lis[godNum].src1;
    $('.this-god img').eq(0).stop().animate({
        left: -240,
        opacity: 0
    }, 500, function () {
        $('.prev-god .f18')[0].innerText = namePrev;
        $('.this-god img').eq(0)[0].src = srcFirst;
        $('.this-god img').eq(0).stop().animate({
            left: -140,
            opacity: 1
        }, 500);
    });
    $('.this-god img').eq(1).stop().animate({
        left: -40,
        opacity: 0
    }, 500, function () {
        $('.next-god .f18')[0].innerText = nameNext;
        $('.this-god img').eq(1)[0].src = srcSecond;
        $('.this-god img').eq(1).stop().animate({
            left: -140,
            opacity: 1
        }, 500);
    });
});
$('#point-right').click(function () {
    var nameNext;
    var namePrev;
    namePrev = lis[godNum].name;
    godNum++;
    if (godNum == lis.length - 1) {
        nameNext = lis[0].name;
    } else if (godNum > lis.length - 1) {
        godNum = 0;
        nameNext = lis[godNum + 1].name;
    } else {
        nameNext = lis[godNum + 1].name;
    }
    var srcFirst = 'images/zhuye-lxy/' + lis[godNum].src;
    var srcSecond = 'images/zhuye-lxy/' + lis[godNum].src1;
    $('.this-god img').eq(0).stop().animate({
        left: -240,
        opacity: 0
    }, 500, function () {
        $('.prev-god .f18')[0].innerText = namePrev;
        $('.this-god img').eq(0)[0].src = srcFirst;
        $('.this-god img').eq(0).stop().animate({
            left: -140,
            opacity: 1
        }, 500);
    });
    $('.this-god img').eq(1).stop().animate({
        left: -40,
        opacity: 0
    }, 500, function () {
        $('.next-god .f18')[0].innerText = nameNext;
        $('.this-god img').eq(1)[0].src = srcSecond;
        $('.this-god img').eq(1).stop().animate({
            left: -140,
            opacity: 1
        }, 500);
    });
});


//section-two 
//gonglue-title攻略文章切换
//栏目float-two浮起运动
$('.section-two .gonglue-ph a').mouseenter(function () {
    $(this).find('.float-two').stop().animate({
        top: -15
    }, 200);
});
$('.section-two .gonglue-ph a').mouseleave(function () {
    $(this).find('.float-two').stop().animate({
        top: 5
    }, 200);
});

//内容切换
$('.section-two .mengnew a').click(function () {
    var glNum = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.gonglue-comment').hide();
    $('.gonglue-comment active').fadeOut(500);
    $('.gonglue-comment').eq(glNum).addClass('active').fadeIn(500);
});

//section-three 左边三个点和图片轮播
var iconNum;
var iconWhich = 0;
$('.hot-active .icon-3 a').click(function () {
    iconNum = $(this).index();
    iconWhich = iconNum;
    $(this).addClass('active').siblings().removeClass('active');
    $('.hot-ph li').eq(iconNum).fadeIn().siblings().hide();
});
var iconTimer = setInterval(function () {
    iconWhich++;
    if (iconWhich > 2) {
        iconWhich = 0;
    };
    $('.hot-active .icon-3 a').eq(iconWhich).addClass('active').siblings().removeClass('active');
    $('.hot-ph li').eq(iconWhich).fadeIn().siblings().hide();
}, 3000);
$('.hot-active .icon-3 a,.hot-ph li').mouseenter(function () {
    clearInterval(iconTimer);
});
$('.hot-active .icon-3 a,.hot-ph li').mouseleave(function () {
    clearInterval(iconTimer);
    iconTimer = setInterval(function () {
        iconWhich++;
        if (iconWhich > 2) {
            iconWhich = 0;
        };
        $('.hot-active .icon-3 a').eq(iconWhich).addClass('active').siblings().removeClass('active');
        $('.hot-ph li').eq(iconWhich).fadeIn().siblings().hide();
    }, 2800);
});
//section-three 右边热门趮切换
var hotIndex = 0;
$('.hot-comment-change').mousedown(function () {
    hotIndex++;
    if (hotIndex > 2) {
        hotIndex = 0;;
    };
    // $('.tongren-show ul').css('display','none');
    $('.tongren-show ul').hide();

    $('.tongren-show ul').eq(hotIndex).fadeIn();
});
//热门作品轮播
var hotCommentTimer = setInterval(function () {
    $('.hot-comment-change').mousedown();
}, 3400);
$('.tongren-show,.hot-comment-change').mouseenter(function () {
    clearInterval(hotCommentTimer);
});
$('.tongren-show,.hot-comment-change').mouseleave(function () {
    hotCommentTimer = setInterval(function () {
        $('.hot-comment-change').mousedown();
    }, 3400);
});
//section-six 泛娱乐滚动图
var funNum = 0;
$('.fun-button-left').click(function () {
    $('.fun-button-right').css('display', 'block');
    funNum--;
    if (funNum < 0) {
        funNum = 0;
        $('.fun-comment ul').css('left', 0);
    } else if (funNum == 0) {
        $('.fun-button-left').css('display', 'none');
        $('.fun-comment ul').animate({
            left: 0,
        }, 500);
    } else {
        $('.fun-comment ul').animate({
            left: -460 * funNum,
        }, 500);
    };
});
$('.fun-button-right').click(function () {
    $('.fun-button-left').css('display', 'block');
    funNum++;
    if (funNum > 2) {
        funNum = 2;
        $('.fun-comment ul').css('left', -920);
    } else if (funNum == 2) {
        $('.fun-button-right').css('display', 'none');
        $('.fun-comment ul').animate({
            left: -920,
        }, 500);
    } else {
        $('.fun-comment ul').animate({
            left: -460 * funNum,
        }, 500);
    };
});
//鼠标经过上移效果
var funComment = true;
$('.fun-comment li').mouseenter(function () {
    funComment = false;
    $(this).stop().animate({
        marginTop: 0,
    }, 200, function () {
        funComment = true;
    });
});
if (funComment) {
    $('.fun-comment li').mouseleave(function () {
        $(this).stop().animate({
            marginTop: 20,
        }, 200);
    });
};


//section-seven 拖动效果
var fnMove;
$('.move-box').mousedown(function () {
    // $(document).mousemove(function (e) {
    //     // console.log(e.clientX);
    //     var xx = e.clientX - 204.5 - 105;
    //     fnMove(xx);
    // if (xx <= 0) {
    //     xx = 0
    // } else if (xx >= 850) {
    //     xx = 850;
    // }
    // $('.thing ul').css('left', -xx * (432 / 85));
    // $('.move-box').css('left', xx);
    // });
    $(document).on('mousemove', fnMove = function (e) {
        var xx = e.clientX - 204.5 - 105;
        if (xx <= 0) {
            xx = 0
        } else if (xx >= 850) {
            xx = 850;
        }
        $('.thing ul').css('left', -xx * (432 / 85));
        $('.move-box').css('left', xx);
    });
});
$(document).mouseup(function () {
    $(document).off('mousemove', fnMove);
});
//鼠标进入上移效果
$('.thing li').mouseenter(function () {
    $(this).stop().animate({
        marginTop: -20,
    }, 200);
});
$('.thing li').mouseleave(function () {
    $(this).stop().animate({
        marginTop: 0,
    }, 200);
});


//section-eight 小女孩切换
$('.four-code-bg>div').mouseenter(function () {
    var codeNum = $(this).index();
    var codeNum2 = -2 - codeNum * 202 + 'px';
    $('.girl i').css({
        backgroundPosition: codeNum2 + ' ' + '0px',
    });
});

//月亮闪
var lightTimer1;
var lightTimer2;

lightTimer1 = setInterval(function () {
    $('#liang').animate({
        opacity: 0
    }, 500, function () {
        $('#liang').animate({
            opacity: 1
        }, 500);
    });
}, 1000);
$('.moon').mouseenter(function () {
    $('#bling1').animate({
        backgroundSize: 400,
        opacity: 1,
    }, 1600);
    $('#bling1').animate({
        backgroundSize: 415,
        opacity: 0.9,
    }, 200);
    $('#bling1').animate({
        backgroundSize: 425,
        opacity: 0.2,
    }, 150);
    $('#bling1').animate({
        backgroundSize: 336,
        opacity: 0,
    }, 50);
    lightTimer2 = setInterval(function () {
        $('#bling1').animate({
            backgroundSize: 400,
            opacity: 1,
        }, 1600);
        $('#bling1').animate({
            backgroundSize: 415,
            opacity: 0.9,
        }, 200);
        $('#bling1').animate({
            backgroundSize: 425,
            opacity: 0.2,
        }, 150);
        $('#bling1').animate({
            backgroundSize: 336,
            opacity: 0,
        }, 50);
    }, 2000);
    $('#moontop').stop().animate({
        top: -227,
        right: -227
    }, 800);
    $('#erweima').stop().animate({
        backgroundSize: 350,
        opacity: 1,
    }, 800);
});
$('.moon').mouseleave(function () {
    clearInterval(lightTimer2);
    $('#bling1').stop();
    $('#moontop').stop().animate({
        // top:-94,
        // right:-94
    }, 200, function () {
        $('#moontop').stop().animate({
            top: -94,
            right: -94,
        }, 600);
    });
    $('#erweima').stop().animate({
        opacity: 0,
        backgroundSize: 200,
    }, 600);
});
