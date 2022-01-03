$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
});

// click cartitem
window.onload = function () {
    //icon show cart home page
    var btnBashet = document.querySelector(".basket-btn");
    //element cart-sidebar
    var cartSidebar = document.querySelector(".cart-sidebar");
    //element overlay
    var overlay = document.querySelector(".cart-overlay");
    //btn close cart side bar
    var btnClose = document.querySelector(".card-close");
    btnBashet.onclick = function () {
        cartSidebar.classList.add("show");
    };

    if (overlay !== null) {
        overlay.onclick = function () {
            cartSidebar.classList.remove("show");
        };
    }

    btnClose.onclick = function () {
        cartSidebar.classList.remove("show");
    };

    //show anh hide menu-mobile
    const btnToggleMenu = document.querySelector(".btn-menu");
    const menuSidebar = document.querySelector(".menu-sidebar");
    const menuOverlay = document.querySelector(".menu-mobile-overlay");
    const btnCloseMenu = document.querySelector(".menu-close");

    btnToggleMenu.onclick = function () {
        menuSidebar.classList.add("show");
    };

    if (menuOverlay !== null) {
        menuOverlay.onclick = function () {
            menuSidebar.classList.remove("show");
        };
    }

    if (btnCloseMenu !== null) {
        btnCloseMenu.onclick = function () {
            menuSidebar.classList.remove("show");
        };
    }

    var prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos && currentScrollPos > 1000) {
            menuSticky.classList.add("header-hidden");
        } else {
            menuSticky.classList.remove("header-hidden");
        }
        prevScrollPos = currentScrollPos;

        checkHeightSticky();
        // bringmenu()
        if (checkHeightSidebarMenuShopPage === "function") {
            checkHeightSidebarMenuShopPage();
        }
    };
    //Sticky menu
    //element stickey menu
    let menuSticky = document.querySelector(".header__sticky");
    //khoảng cách từ sticky menu đến đỉnh trang web
    let stickyToTop = menuSticky.offsetTop;

    function checkHeightSticky() {
        if (window.pageYOffset >= stickyToTop) {
            menuSticky.classList.add("sticky");
        } else {
            menuSticky.classList.remove("sticky");
        }
    }

    //click mobile menu second change icon
    const liMenuFirst = document.querySelectorAll(".li-menu-first");

    for (let i = 0; i < liMenuFirst.length; i++) {
        const element = liMenuFirst[i];
        element.addEventListener("click", function () {
            let attrLink = this.children[0].getAttribute("aria-expanded");

            //change class show
            this.classList.toggle("show");

            //Change aria expanded
            if (attrLink === "true") {
                this.children[0].setAttribute("aria-expanded", "false");
            }
            if (attrLink === "false") {
                this.children[0].setAttribute("aria-expanded", "true");
            }
        });
    }

    // Click toggle show/hide dropdown list shop page
    const btnSortShopPage = document.querySelector(".sort-shop-page");
    const menuSortShop = document.querySelector(".dropdown-menu-sort-shop");

    if (btnSortShopPage !== null) {
        btnSortShopPage.addEventListener("click", function (e) {
            e.preventDefault();
            menuSortShop.classList.toggle("show");
        });
    }

    //fixed menu shop page
    const sidebarMenuShopPage = document.querySelector(
        ".primary-sidebar-inner"
    );
    const footer = document.querySelector("footer");
    let footerToTop = footer.offsetTop;

    let sidebarMenuShopPageToTop;
    if (sidebarMenuShopPage !== null) {
        sidebarMenuShopPageToTop = sidebarMenuShopPage.offsetTop;

        function checkHeightSidebarMenuShopPage() {
            if (window.pageYOffset >= sidebarMenuShopPageToTop) {
                sidebarMenuShopPage.classList.add("fixedMenuShopPage");
            } else {
                sidebarMenuShopPage.classList.remove("fixedMenuShopPage");
            }

            if (window.pageYOffset + window.innerHeight >= footerToTop) {
                sidebarMenuShopPage.classList.remove("fixedMenuShopPage");
            }

            if (window.scrollX <= 670) {
                sidebarMenuShopPage.classList.remove("fixedMenuShopPage");
            }
        }
    }

    //click color to select option product page

    //Lấy ra tất cả các màu
    const listColor = document.querySelectorAll(
        ".form-group-color .card__body-lists .color-item a"
    );

    const selectColor = document.querySelector(".swatches-select");
    let prevActive = null;
    if (listColor !== null && selectColor !== null) {
        for (let i = 0; i < listColor.length; i++) {
            const element = listColor[i];
            if (element.parentElement.classList.contains("active")) {
                prevActive = element.parentElement;
            }
            element.addEventListener("click", function (e) {
                e.preventDefault();
                const data = this.getAttribute("data-var");
                this.parentElement.classList.add("active");
                if (prevActive) {
                    prevActive.classList.remove("active");
                }
                prevActive = this.parentElement;
                const listOption = selectColor.querySelectorAll("option");
                for (let j = 0; j < listOption.length; j++) {
                    const element2 = listOption[j];
                    //set data to select option
                    if (element2.getAttribute("value") === data) {
                        element2.selected = true;
                    }
                }
            });
        }
    }

    //Tab nav product page
    const tabPane = document.querySelectorAll(".tab-pane-m");
    const tabLinks = document.querySelectorAll(".tabLinks");
    const tabLinksMobile = document.querySelectorAll('.box-tab-pane-title')
    const tabPaneContentMobile = document.querySelectorAll('.box-tab-pane-content')
    //Vùa vào thì ẩn tất cả các tab

    if(window.screenX > 670) {
        if (tabPane != null) {
            for (let i = 0; i < tabPane.length; i++) {
    
                tabPane[0].style.display = "block"
                const element = tabPane[i];
                element.style.display = "none";
            }
        }
        let prevActive2 = null;
        for (let i = 0; i < tabLinks.length; i++) {
            const element = tabLinks[i];
            if (element.classList.contains("active")) {
                prevActive2 = element;
            }
            let data = element.getAttribute("data-var");
            element.onclick = function (e) {
                e.preventDefault();
                prevActive2.classList.remove("active");
                for (let j = 0; j < tabPane.length; j++) {
                    const element1 = tabPane[j];
                    element1.style.display = "none";
                }
                document.getElementById(data).style.display = "block";
                e.currentTarget.className += " active";
                prevActive2 = element;
            };
        }
    }else {
        //Vừa vào ẩn 2 tab dưới và show tab treên cùng
        if(tabPaneContentMobile !== null) {
            for (let i = 0; i < tabPaneContentMobile.length; i++) {
                const element = tabPaneContentMobile[i];
                element.style.display = "none"
                tabPaneContentMobile[0].style.display = "block"
            }
        }
        let prevActive3 = null
        if(tabLinksMobile !== null) {
            for (let i = 0; i < tabLinksMobile.length; i++) {
                const element = tabLinksMobile[i];
                tabLinksMobile[0].classList.add('active')

                if(element.classList.contains('active')) {
                    prevActive3 = element
                }
                let data2 = element.getAttribute('data')
                element.addEventListener('click', function(event) {
                    prevActive3.classList.remove('active')
                    for (let j = 0; j < tabPaneContentMobile.length; j++) {
                        const element2 = tabPaneContentMobile[j];
                        element2.style.display = "none"
                    }

                    document.getElementById(data2).style.display = "block"
                    event.currentTarget.className += " active"
                    prevActive3 = element
                })
            }
        }
    }
    



    //Show comment box
    const btnAddReview = document.querySelector('.btn-add-review')
    const boxReview = document.querySelector('.card-review')
    if(btnAddReview !== null && boxReview !== null) {
        btnAddReview.addEventListener('click', function(e) {
            e.preventDefault()
            boxReview.classList.toggle('showReview')
        })
    }
};
