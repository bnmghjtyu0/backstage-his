// 宣告DOM
var btnMenu = document.querySelector('.navbar-toggler');
var headerL = document.querySelector('.header-l');
var headerR = document.querySelector('.header-r');
var sidebar = document.querySelector('.sidebar');
var main = document.querySelector('main');
var btnSearch = document.querySelector('#btnSearch');
var sidebarBox = document.querySelectorAll('.sidebarBox');
// 監聽
btnMenu.addEventListener('click', toggleFunc, false);
btnSearch.addEventListener('click', SearchFunc, false);

function SearchFunc() {
  var SearchInput = document.querySelector('.header-search');
  SearchInput.classList.toggle('active');
}

function toggleFunc() {
  sidebar.classList.toggle('active');
  headerL.classList.toggle('active');
  headerR.classList.toggle('active');
  main.classList.toggle('active');
  for (var i = 0; sidebarBox.length > i; i++) {
    sidebarBox[i].classList.toggle('active')
  }
}

const mq = window.matchMedia("(max-width: 992px)");
const xs = window.matchMedia("(max-width: 767px)");

function ifMatch() {
  if (xs.matches) {
    sidebar.classList.add('xs');
    headerL.classList.add('xs');
    headerR.classList.add('xs');
    main.classList.add('xs');
    sidebar.classList.remove('active');
    headerL.classList.remove('active');
    headerR.classList.remove('active');
    main.classList.remove('active');
    $('.sidebar .dropdown').on('show.bs.dropdown', function () {
      return true
    })


  } else if (mq.matches) {
    sidebar.classList.remove('active');
    headerL.classList.remove('active');
    headerR.classList.remove('active');
    main.classList.remove('active');
    sidebar.classList.add('md');
    headerL.classList.add('md');
    headerR.classList.add('md');
    main.classList.add('md');
    for (var i = 0; sidebarBox.length > i; i++) {
      sidebarBox[i].classList.toggle('md')
    }
    $('.sidebar .dropdown').on('show.bs.dropdown', function () {
      return true
    })


  } else {
    sidebar.classList.remove('active', 'xs', 'md');
    headerL.classList.remove('active', 'xs', 'md');
    headerR.classList.remove('active', 'xs', 'md');
    main.classList.remove('active', 'xs', 'md');
    for (var i = 0; sidebarBox.length > i; i++) {
      sidebarBox[i].classList.remove('active', 'md')
    }
    $('.sidebar .dropdown').on('show.bs.dropdown', function () {
      return false
    })

  }
}
ifMatch();

// 移動視窗觸發
window.onresize = function () {
  ifMatch();
}
