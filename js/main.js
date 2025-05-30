$(function () {

  // gnb_depth2
  $('.depth2_wrap').hide()

  $('.gnb li, .ham').click(function () {
    $('.depth2_wrap').stop().fadeIn()
  })

  $('.exit').click(function () {
    $('.depth2_wrap').stop().fadeOut()
  })

  // gnb_depth3
  $('.depth3').hide()

  $('.depth2>li').click(function () {
    $(this).find('.depth3').stop().slideDown()
  })

  // Our Story -뉴스 스와이퍼
  setInterval(() => {
    $(".wrapper").delay(2000).animate({
      marginTop: -180
    });
    $(".wrapper").delay(2000).animate({
      marginTop: -360
    });
    $(".wrapper").delay(2000).animate({
      marginTop: -360
    })
    $(".wrapper").delay(2000).animate({
      marginTop: -0
    });
  },);

  const article = new Swiper(".article", {

    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 2, //모바일 기준
    spaceBetween: 20, //모바일 기준

    autoplay: {
      delay: 2000,
      disableOnIneraction: false,
    },

    navigation: {
      nextEl: ".next",
      prevEl: ".right",
    },

    pagination: { // 슬라이드 갯수(불릿) - 태그추가
      el: ".swiper-pagination", //el=요소
      type: "progressbar", // "bullets", "fraction", "progressbar"
      clickable: true, // false(기본값) 클릭가능여부
    },

    breakpoints: {
      650: { //min-width 기준
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }

  });

  // Family_Site -푸터 모달
  $('#footer .area_family_site, .close').hide()

  $('#footer .select').click(function () {
    $('#footer .area_family_site,.close').fadeIn()
  })

  $('#footer .close').click(function () {
    $('#footer .area_family_site, #footer .close').fadeOut()
  })

  // Our business - 사업 탭메뉴
  $("#business .content:not(:first-child)").hide();
  $("#business .tab_menu li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $("#business .content").eq(idx).fadeIn(500).siblings().fadeOut(0); //eq=값을 부여하는 것!
  });

  // Our business -사업 스와이퍼
  const left_box = new Swiper(".left_box", {

    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1, //모바일 기준
    spaceBetween: 20, //모바일 기준

    autoplay: {
      delay: 3000,
      disableOnIneraction: false,
    },

    navigation: {
      nextEl: ".next",
      prevEl: ".right",
    },

    pagination: { // 슬라이드 갯수(불릿) - 태그추가
      el: ".page_bar", //el=요소
      type: "progressbar", // "bullets", "fraction", "progressbar"
      clickable: true, // false(기본값) 클릭가능여부
    },

  });

  // ====================================================
  // // features- 최상단 주 정보 노출
  // const swiper_wrap = new Swiper(".swiper_wrap", {

  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnIneraction: false,
  //   },
  //   speed: 1000,
  //   direction: "vertical", // 세로 슬라이드: 슬라이드 자체에 높이 필수
  // });

});