function generateVariablesUMG() {
    //FONTS-----------------------------
    var fonts = [config.buttons.ff, config.h.ff.e1, config.h.ff.e2, config.h.ff.e3, config.h.ff.e4, config.h.ff.e5, config.p.ff, config.catPromo.ff, config.skuPromo.ff, config.tagLine.ff, config.menu.ff, config.subMenu.ff];
    function arrayUnique(arr){
      return arr.filter((e,i,a)=>a.indexOf(e)==i)
    }
    fonts = arrayUnique(fonts);
    var filtered = fonts.filter(function (el) {
      return el != "";
    });
    console.log(filtered);
    var newFonts = ["", "", "", "", "", "", ""];
    for (let i = 0; i < filtered.length; i++) {
      font = filtered[i].split(',');
      font = font[0].replace(/"/g,"");
      font = font.replace(/ /g,"+");
      font = "@import url('https://fonts.googleapis.com/css?family=" + font + ":300,400,500,600,700&display=swap');"
      newFonts[i] = font;
    }
    var hfont = config.h.ff.e1.split(',');
    hfont = hfont[0].replace(/"/g,"");
    //------------------------------------
  
  var text = `\
  //
  //  Infortis Base theme variables,
  //
  // Base Google Font theme
  ${newFonts[0]}
  ${newFonts[1]}
  ${newFonts[2]}
  @import url('https://use.fontawesome.com/releases/v5.6.3/css/all.css');
  
  //
  //  Layout grid
  //  _____________________________________________
  
  //  Variables for layout columns depending on layout used
  @layout-column-sidebar__width__layout-3columns: 4;
  @layout-column-main__width__layout-3columns: @layout-column__width - @layout-column-sidebar__width__layout-3columns - @layout-column-sidebar__width__layout-3columns;
  @layout-column-sidebar__offset: 2%;
  
  //
  //  Interface elements
  //  _____________________________________________
  
  @interface-element__height__base: 40px;
  
  //
  //  Sidebar
  //  _____________________________________________
  
  @sidebar-block__title__vert-padding: 15px;
  @sidebar-block__title__margin-bottom: 15px;
  @sidebar-block__title__line-height: 24px;
  @sidebar-block__title__font-size: 19px;
  @sidebar-block__margin-bottom: 30px;
  
  //
  //  Design
  //  _____________________________________________
  
  //
  //  Product listings
  //  _____________________________________________
  
  @product-listing__swatch__bottom-space: 5px;
  
  // Base color theme
  @custom-primary-color: ${config.colors.primary};
  @custom-secondry-color: ${config.colors.secondary};
  @custom-tertiary-color: ${config.colors.additional};
  @custom-headings-color: ${config.h.color.e1};
  @custom-additional-color: ${config.colors.additional};
  
  @custom-color-1: #ffffff;
  @custom-color-2: #d5d5d5;
  @custom-color-3: #f5f5f5;
  @custom-color-4: #f1f1f1;
  
  // Base Font Family theme
  @custom-headings-font-family:  ${config.h.ff.e1};
  @custom-primary-font-family:   ${config.p.ff};
  @custom-secondry-font-family:  ${config.buttons.ff};
  
  @custom-icons: @icon-font;
  @custom-fontawesome: 'FontAwesome';
  
  // Base Font Size theme
  @custom-primary-font-size: 16px;
  
  //Base Links
  @custom-link-color: ${config.link.color};
  @custom-link-color-hover: ${config.link.colorh};
  @custom-link-weight: 400;
  @custom-link-weight-hover: 400;
  @custom-link-decoration: unset;
  @custom-link-decoration-hover: underline;
  
  //Primary Buttons
  @button-primary-bg-color: ${config.buttons.bg};
  @button-primary-txt-color: ${config.buttons.color};
  @button-primary-bg-color-hover: ${config.buttons.bgh};
  @button-primary-txt-color-hover: ${config.buttons.colorh};
  @button-primary-active-bg-color: ${config.buttons.bgh};
  @button-primary-active-txt-color: ${config.buttons.colorh};
  @button-text-transform: ${config.buttons.tt};
  @button-font-weight: ${config.buttons.fw};
  @button-letter-spacing: 2px;
  @button-transition: 0.2s all;
  @button-font-family: @custom-secondry-font-family;
  @button-border-radius: ${config.buttons.br || 0};
  @button-border: ${config.buttons.border};
  @button-border-hover: ${config.buttons.border};
  @button-font-size: ${config.buttons.fs};
  
  //GO TO CHECKOUT, PLACE ORDER, SAVE SUBSCRIPTION BUTTONS
  @main-button-font-size: @button-font-size + 2px;
  
  //Header Custom Colors
  @header-custom-txt-color: @custom-additional-color;
  @header-custom-link-color: @custom-link-color;
  @header-custom-link-bg: transparent;
  @header-custom-link-color-hover: @custom-link-color-hover;
  @header-custom-link-bg-hover: transparent;
  @header-primary-container-bg: #fff;
  @header-counter-bg-color: @custom-primary-color;
  @header-counter-txt-color: #fff;
  
  //Header border
  @header-border-width: 0;
  @header-border-color: @custom-secondry-color;
  
  //Counter
  @counter-bg-color: ${config.mobMenu.counterbg};
  @counter-txt-color: @custom-color-1;
  
  //List Style Types
  @custom-list-style-type: none;
  
  //Menu Tabs
  @menu-bg-parent: ${config.menu.bg};
  @menu-bg-color: ${config.menu.bg};
  @menu-txt-color: ${config.menu.color};
  @menu-border: 0px solid transparent;

  @menu-bg-color-hover: ${config.menu.bgh};
  @menu-txt-color-hover: ${config.menu.colorh};
  @menu-border-hover: 0px solid transparent;
  @menu-txt-decoration-hover: unset;

  @menu-bg-color-active: ${config.menu.bgh};
  @menu-txt-color-active: ${config.menu.colorh};
  @menu-txt-decoration-active: unset;

  @menu-text-transform: ${config.menu.tt};
  @menu-font-size: ${config.menu.fs};
  @menu-font-weight: ${config.menu.fw};
  @custom-menu-font: @custom-primary-font-family;
  @menu-letter-spacing: normal;
  @menu-item-border: 0px solid transparent;
  @menu-item-border-hover: 0px solid transparent;
  
  //Dropdown Sub-Menu
  @dropdown-menu-bg: ${config.subMenu.bg};
  @dropdown-menu-color: ${config.subMenu.color};

  @dropdown-menu-bg-hover: ${config.subMenu.bgh};
  @dropdown-menu-color-hover: ${config.subMenu.colorh};
  @dropdown-item-decoration: unset;

  @dropdown-item-active-bg: ${config.subMenu.bgh};
  @dropdown-item-active-color: ${config.subMenu.color};

  @dropdown-menu-text-transform: ${config.subMenu.tt};
  @dropdown-menu-font-weight: ${config.subMenu.fw};
  @dropdown-menu-font-size: ${config.subMenu.fs};
  @dropdown-menu-letter-spacing: normal;

  @dropdown-parent-border-top: 3px #a6d8f1 solid;
  @dropdown-item-border: 0px solid @custom-primary-color;
  @dropdown-item-border-hover: 0px solid @custom-primary-color;
  @dropdown-item-border-top: 0px solid transparent;

  //SKU & Category Promos
  @sku-promo-background-color: ${config.skuPromo.bg};
  @sku-promo-txt-color: ${config.skuPromo.color};
  @sku-promo-font-family: ${config.skuPromo.ff};
  @sku-promo-font-size: ${config.skuPromo.fz};
  @sku-promo-font-weight: ${config.skuPromo.fw};
  @category-promo-background-color: ${config.catPromo.bg};
  @category-promo-txt-color: ${config.catPromo.color};
  @category-promo-font-family: ${config.catPromo.ff};
  @category-promo-font-size: ${config.catPromo.fz};
  @category-promo-font-weight: ${config.catPromo.fw};
  
  //Interface icons /category view toolbar icons, pagination/
  @custom-icon-bg-color: @custom-primary-color;
  @cusom-icon-color: @custom-color-1;
  @custom-icon-bg-color-hover:@custom-secondry-color;
  @cusom-icon-color-hover:#fff;
  @cusom-icon-active-bg-color:@custom-secondry-color;
  @cusom-icon-active-color:#fff;
  @custom-pagination-active-bg-color: @custom-secondry-color;
  @custom-pagination-active-txt-color: #fff;
  
  //'Add to' Links
  @add-link-bg-color: @custom-primary-color;
  @add-link-icon-color:@custom-color-1;
  @add-link-bg-color-hover: @custom-secondry-color;
  @add-link-icon-color-hover: @custom-color-1;
  @add-link-label-color: @custom-primary-color;
  @add-link-label-color-hover: @custom-secondry-color;
  @add-link-border: 0px solid @custom-primary-color;
  @add-link-border-hover: 0px solid @custom-primary-color;
  
  //Card price
  @custom-price-color: @custom-primary-color;
  @custom-price-font-size: @custom-primary-font-size + 4px;
  @custom-price-font-weight: normal;
  
  //Star ratings color
  @star-rating-color-active: @custom-primary-color;
  
  //Iconbox(icon with class 'ib')
  //TODO: need to test
  @iconbox-bg-color: @custom-primary-color;
  @iconbox-icon-color:#fff;
  @iconbox-bg-color-hover:@custom-secondry-color;
  @iconbox-icon-color-hover: #fff;
  @iconbox-border-radius: 50%;
  @iconbox-border: 0 solid @custom-primary-color;
  @iconbox-border-hover: 0 solid @custom-primary-color;
  
  //Social Icons
  @social-icon-bg-color: ${config.socials.bg};
  @social-icon-color: ${config.socials.color};
  @social-icon-bg-color-hover: ${config.socials.bgh};
  @social-icon-color-hover: ${config.socials.colorh};
  @social-icon-radius: 4px;
  @social-icon-border: ${config.socials.border};
  
  //Promobanners on checkout
  @promo-shipping-bg: ${config.banners.bg1};
  @promo-shipping-color: ${config.banners.color1};
  @promo-shipping-title-font-size: ${config.banners.fs1h2};
  @promo-shipping-desc-font-size: ${config.banners.fs1h4};
  @promo-shipping-text-transform: ${config.banners.tt1};
  @promo-shipping-font-family: ${config.banners.ff1};
  @promo-login-bg: ${config.banners.bg2};
  @promo-login-color: ${config.banners.color2};
  @promo-login-title-font-size: ${config.banners.fs2h2};
  @promo-login-desc-font-size: ${config.banners.fs2h4};
  @promo-login-text-transform: ${config.banners.tt2};
  @promo-login-font-family: ${config.banners.ff2};
  
  //Headings
  //H1
  @heading-h1-color: ${config.h.color.e1};
  @heading-h1-font-size: ${config.h.fs.e1};
  @heading-h1-font-weight: ${config.h.fw.e1};
  @heading-h1-font-family: ${config.h.ff.e1};
  @heading-h1-text-transform: ${config.h.tt.e1};
  @heading-h1-line-height: 1.8;
  
  //H2
  @heading-h2-color: ${config.h.color.e2};
  @heading-h2-font-size: ${config.h.fs.e2};
  @heading-h2-font-weight: ${config.h.fw.e2};
  @heading-h2-font-family: ${config.h.ff.e2};
  @heading-h2-text-transform: ${config.h.tt.e2};
  @heading-h2-line-height: 1.8;
  
  //H3
  @heading-h3-color: ${config.h.color.e3};
  @heading-h3-font-size: ${config.h.fs.e3};
  @heading-h3-font-weight: ${config.h.fw.e3};
  @heading-h3-font-family: ${config.h.ff.e3};
  @heading-h3-text-transform: ${config.h.tt.e3};
  @heading-h3-line-height: 1.8;
  
  //H4
  @heading-h4-color: ${config.h.color.e4};
  @heading-h4-font-size: ${config.h.fs.e4};
  @heading-h4-font-weight: ${config.h.fw.e4};
  @heading-h4-font-family: ${config.h.ff.e4};
  @heading-h4-text-transform: ${config.h.tt.e4};
  @heading-h4-line-height: 1.8;
  
  //H5
  @heading-h5-color: ${config.h.color.e5};
  @heading-h5-font-size: ${config.h.fs.e5};
  @heading-h5-font-weight: ${config.h.fw.e5};
  @heading-h5-font-family: ${config.h.ff.e5};
  @heading-h5-text-transform: ${config.h.tt.e5};
  @heading-h5-line-height: 1.8;
  
  //Paragraphs
  @paragraph-color: ${config.p.color};
  @paragraph-font-size: ${config.p.fs};
  @paragraph-font-family: ${config.p.ff};
  @paragraph-line-height: ${config.p.lh};
  
  //Horizontal Links
  //links inside an 'ul' with 'links' class
  //TODO: need to test
  @links-color-hover: '';
  @links-bg-color-hover: '';
  
  //Product Lables (NEW, SALE, etc.)
  @label-new-bg-color: ${config.badge.bg};
  @label-new-txt-color: ${config.badge.color};
  @label-sale-bg-color: ${config.badge.bg};
  @label-sale-txt-color: ${config.badge.color};
  @label-custom-bg-color: ${config.badge.bg};
  @label-custom-txt-color: ${config.badge.color};

  //Product page tabs
  @product-tab-bg-color: @custom-secondry-color;
  @product-tab-txt-color: @custom-color-1;
  @product-tab-bg-color-active: @custom-primary-color;
  @product-tab-txt-color-active: @custom-color-1;
  @produc-tab-border: 0 solid @custom-primary-color;
  
  //Mini-Cart
  @cart-bg-color: #fff;
  @cart-txt-color: @custom-additional-color;
  @cart-link-color: @custom-link-color;
  @cart-link-color-hover: @custom-link-color-hover;
  @cart-border-width: 0px;
  @cart-border-color: @custom-primary-color;
  
  //Mobile Menu Tabs
  @mobile-menu-bg-color: ${config.mobMenu.bg};
  @mobile-menu-txt-color: ${config.mobMenu.color};

  @mobile-menu-bg-color-hover: ${config.mobMenu.bga};
  @mobile-menu-txt-color-hover: ${config.mobMenu.colora};

  @mobile-menu-bg-color-active: ${config.mobMenu.bga};
  @mobile-menu-txt-color-active: ${config.mobMenu.colora};
  @mobile-header-bg-color: @header-primary-container-bg;
  
  //Content of Mobile Headers Tabs
  @mobile-submenu-bg-color: ${config.mobMenu.bga};
  @mobile-submenu-txt-color: ${config.mobMenu.colora};
  @mobile-submenu-bg-color-hover: @mobile-menu-bg-color-hover;
  @mobile-submenu-txt-color-hover: @mobile-menu-txt-color-hover;
  @mobile-submenu-bg-color-active: @mobile-menu-bg-color-hover;
  @mobile-submenu-txt-color-active: @mobile-menu-txt-color-hover;
  @mobile-submenu-item-border: 1px solid rgba(189,190,192,0.3);
  @mobile-submenu-item-border-hover: @mobile-submenu-item-border;
  @mobile-submenu-item-border-active: @mobile-submenu-item-border;
  @mobile-submenu-item-border-top: 0 solid transparent;
  @mobile-content-txt-transform: ${config.mobMenu.tta};
  @mobile-content-font-size: ${config.mobMenu.fsa};
  @mobile-content-font-family: ${config.mobMenu.ffa};
  @mobile-content-font-weight: ${config.mobMenu.fwa};
  
  @mobile-content-link-color: ${config.link.color};
  @mobile-content-link-color-hover: ${config.link.colorh};
  
  //HomeTabs(Bestsellers, Trendings, ...)
  @tabs-bg-color: ${config.tabs.bg};
  @tabs-txt-color: ${config.tabs.color};
  @tabs-bg-color-hover: ${config.tabs.bgh};
  @tabs-txt-color-hover: ${config.tabs.colorh};
  @tabs-bg-color-active: ${config.tabs.bgh};
  @tabs-txt-color-active: ${config.tabs.colorh};
  
  //Footer
  @footer-bg-color: ${config.footer.bg};
  @footer-txt-color: ${config.footer.color};
  @footer-border-width: 0;
  @footer-border-top-color: ${config.tagLine.bg};
  @footer-tagline-color: ${config.tagLine.color};
  @footer-tagline-font-size: ${config.tagLine.fs};
  @footer-tagline-font-weight: ${config.tagLine.fw};
  @footer-tagline-font-family: ${config.tagLine.ff};
  
  //Footer Top Container
  @footer-top-bg-color: ${config.tagLine.bg};
  @footer-top-txt-color: ${config.tagLine.color};
  
  //Footer Primary Container
  @footer-primary-bg-color: ${config.footer.bg};
  @footer-primary-txt-color: ${config.footer.color};
  
  //Footer links
  @footer-link-color: ${config.footer.linkColor};
  @footer-link-color-hover: ${config.footer.linkColorH};
  
  //Footer Bottom Container
  @footer-bottom-bg-color: ${config.footerBottom.bg};
  @footer-bottom-txt-color: ${config.footerBottom.color};
  @footer-copyright-color: ${config.footerBottom.linkColor};
  @footer-copyright-color-hover: ${config.footerBottom.linkColorH};
  //  Infortis Base theme variables
  //
  
  //
  //  Layout grid
  //  _____________________________________________
  
  //  Variables for layout columns depending on layout used
  @layout-column-sidebar__width__layout-3columns: 4;
  @layout-column-main__width__layout-3columns: @layout-column__width - @layout-column-sidebar__width__layout-3columns - @layout-column-sidebar__width__layout-3columns;
  @layout-column-sidebar__offset: 2%;
  
  //
  //  Interface elements
  //  _____________________________________________
  
  @interface-element__height__base: 40px;
  
  //
  //  Sidebar
  //  _____________________________________________
  
  @sidebar-block__title__vert-padding: 15px;
  @sidebar-block__title__margin-bottom: 15px;
  @sidebar-block__title__line-height: 24px;
  @sidebar-block__title__font-size: 19px;
  @sidebar-block__margin-bottom: 30px;
  
  //
  //  Design
  //  _____________________________________________
  
  //
  //  Main colors
  //  ---------------------------------------------
  
  @theme-color__primary__light: #e4f7fc;
  @theme-color__primary__lighter: #b6ebf6;
  @theme-color__primary: #5bd2ec;
  @theme-color__primary__darker: #27b4d3;
  @theme-color__primary__dark: #12829b;
  @theme-color__primary__transparent: rgba(91, 210, 236, 0.85);
  
  @theme-color__secondary__light: #f55856;
  @theme-color__secondary__lighter: #f88887;
  @theme-color__secondary: #f55856;
  @theme-color__secondary__darker: #f4413e;
  @theme-color__secondary__dark: #d9100d;
  
  @theme-color__gray__light: #ddd;
  @theme-color__gray__lighter: #c5c5c5;
  @theme-color__gray: #aaa;
  @theme-color__gray__darker: #888;
  @theme-color__gray__dark: #666;
  
  @theme-color__bg-gray__light: #fafafa;
  @theme-color__bg-gray__lighter: #f5f5f5;
  @theme-color__bg-gray: #eee;
  
  @theme-color__sale: #f12b63;
  
  //
  //  Borders
  //  ---------------------------------------------
  
  @global-border-color__dark: #ccc;
  @global-border-color: #e5e5e5;
  @global-border-color__light: #f5f5f5;
  
  //
  //  Product
  //  _____________________________________________
  
  @product__interface-element__height: @interface-element__height__base;
  @product__addto-icon-onimage__padding: 4px;
  @product__addto-icon__space-between: 3px;
  @product__addto-icon__size: @product__interface-element__height;
  
  //
  //  Product listings
  //  _____________________________________________
  
  @product-listing__swatch__bottom-space: 5px;
  
  //
  //  Typography
  //  _____________________________________________
  
  @h2__font-size-desktop: ceil((@font-size__base * 2.14)); //30
  
  //
  //  Focus
  //  ---------------------------------------------
  
  @focus__border-color: #51a7e8;
  
  //
  //  Blank theme variables (copy from Blank theme)
  //  _____________________________________________
  
  //
  //  Typography
  //  ---------------------------------------------
  
  //  Fonts
  @font-family-name__base: 'Open Sans';
  @font-family__base: @font-family-name__base, @font-family__sans-serif;
  
  //
  //  Sidebar
  //  ---------------------------------------------
  
  @sidebar__background-color: @color-white-smoke;
  
  .customer-toplink {
    img {
      margin: 10px 0;
    }
  }
  `;
  //SAVE LESS
    download(text, '_variables.less', 'text/css');
    function download(text, name, type) {
      var a = document.getElementById("variables-save-umg");
      var file = new Blob([text], {type: type});
      a.href = URL.createObjectURL(file);
      a.download = name;
    }
  }
  