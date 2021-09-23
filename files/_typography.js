function generateTypography() {

var text = `\

//
//  Common
//  _____________________________________________

& when (@media-common = true) {
  .lib-font-face(
    @family-name: @font-family-name__base,
    @font-path: '@{baseDir}fonts/opensans/light/opensans-300',
    @font-weight: 300,
    @font-style: normal
  );

  .lib-font-face(
    @family-name: @font-family-name__base,
    @font-path: '@{baseDir}fonts/opensans/regular/opensans-400',
    @font-weight: 400,
    @font-style: normal
  );

  .lib-font-face(
    @family-name: @font-family-name__base,
    @font-path: '@{baseDir}fonts/opensans/semibold/opensans-600',
    @font-weight: 600,
    @font-style: normal
  );

  .lib-font-face(
    @family-name: @font-family-name__base,
    @font-path: '@{baseDir}fonts/opensans/bold/opensans-700',
    @font-weight: 700,
    @font-style: normal
  );

  //
  //  Headings with bottom border
  //  ---------------------------------------------

  h1.border-bottom,
  h2.border-bottom,
  h3.border-bottom,
  h4.border-bottom,
  h5.border-bottom,
  h6.border-bottom {
    padding-bottom: 10px;
    border-bottom: 1px solid @global-border-color;
    &:extend(.abs-global-border-color all);
  }

  .items {
    .lib-list-reset-styles();
  }
}

//
//  Desktop
//  _____________________________________________

//.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
//    h1 {
//        .lib-css(font-size, @h1__font-size-desktop);
//        // .lib-css(margin-bottom, @h1__margin-bottom__desktop);
//    }
//    h2 {
//        .lib-css(font-size, @h2__font-size-desktop);
//    }
//}

//
//  Common
//  _____________________________________________

// Custom typo variables
@hfonts: @custom-headings-font-family;
.hstyle() {
  line-height: 1.2;
}

//
//  Common
//  _____________________________________________
h1 {
  font-size: ${config.h.fs.e1};
  color: ${config.h.color.e1};
  font-weight: ${config.h.fw.e1};
  font-family: @hfonts;
  text-transform: ${config.h.tt.e1};
  .hstyle();
}

h2 {
  font-size: ${config.h.fs.e2};
  color: ${config.h.color.e2};
  font-weight: ${config.h.fw.e2};
  font-family: @hfonts;
  text-transform: ${config.h.tt.e2};
  .hstyle();
}

h3 {
  font-size: ${config.h.fs.e3};
  color: ${config.h.color.e3};
  font-weight: ${config.h.fw.e3};
  font-family: @hfonts;
  text-transform: ${config.h.tt.e3};
  .hstyle();
}

h4 {
  font-size: ${config.h.fs.e4};
  color: ${config.h.color.e4};
  font-weight: ${config.h.fw.e4};
  font-family: @hfonts;
  text-transform: ${config.h.tt.e4};
  .hstyle();
}

h5 {
  font-size: ${config.h.fs.e5};
  color: ${config.h.color.e5};
  font-weight: ${config.h.fw.e5};
  font-family: @hfonts;
  text-transform: ${config.h.tt.e5};
  .hstyle();
}

h6 {
  font-size: @custom-primary-font-size; //16
  color: @custom-headings-color;
  font-weight: 400;
  font-family: @hfonts;
  .hstyle();
}

.action.primary {
  background-color: @button-primary-bg-color !important;
  color: @button-primary-txt-color !important;
  font-size: @button-font-size;
  font-family: @button-font-family;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  line-height: 40px !important;
  text-transform: @button-text-transform;
  font-weight: @button-font-weight;
  border-radius: @button-border-radius;
  border: @button-border;

  &:hover,
  &:active {
    background-color: @button-primary-bg-color-hover !important;
    color: @button-primary-txt-color-hover !important;
  }
}

button,
.review-form .action.submit.primary,
.cart.table-wrapper .actions-toolbar > .action,
.action-gift,
.block-cart-failed .action.continue,
.cart-container .form-cart .action.continue,
.cart-gift-item .gift-item-block .title,
.gift-options .actions-toolbar .secondary .action,
#minicart-content-wrapper .actions .primary button {
  font-family: @button-font-family;
  background-color: @button-primary-bg-color;
  color: @button-primary-txt-color;
  font-size: @button-font-size;
  text-transform: @button-text-transform;
  font-weight: @button-font-weight;
  border-radius: @button-border-radius;
  border: @button-border;

  &:hover {
    background-color: @button-primary-bg-color-hover;
    color: @button-primary-txt-color-hover;
  }
}

.control {
  .ui-datepicker-trigger.v-middle {
    background-color: transparent;
  }
}

.actions-toolbar > .primary button,
.cart-summary .actions-toolbar > .primary button,
.cart-summary .form.giftregistry .fieldset .action.primary,
.paypal-review .block .actions-toolbar .action.primary,
.block-compare .action.compare,
.cart-summary .actions-toolbar > .primary .cart.table-wrapper .actions-toolbar > .action,
.cart-summary .actions-toolbar > .primary .action-gift .modal-footer .action.primary {
  font-family: @button-font-family;
  background-color: @button-primary-bg-color !important;
  color: @button-primary-txt-color !important;
  text-transform: @button-text-transform;
  font-weight: @button-font-weight;
  font-size: @button-font-size;
  border-radius: @button-border-radius;
  border: @button-border;

  &:hover {
    background-color: @button-primary-bg-color-hover !important;
    color: @button-primary-txt-color-hover !important;
  }
}

.column.main {
  .block {
    .title {
      strong {
        font-size: @custom-primary-font-size + 8px;
        color: @custom-additional-color;
      }
    }
  }
}

//
//  Desktop
//  _____________________________________________

p {
  font-family: @custom-primary-font-family;
  font-size: ${config.p.fs};
  color: ${config.p.color};
  font-weight: 400;
  line-height: ${config.p.lh};
}

.addto-links .ic {
  color: @add-link-bg-color !important;
  background-color: @add-link-icon-color !important;

  &:hover {
    color: @add-link-bg-color-hover !important;
    background-color: @add-link-icon-color-hover !important;
  }
}

div a,
.secondary a,
.header-mobile .skip-content--style .actions a {
  color: @custom-link-color;

  &:hover {
    color: @custom-link-color-hover;
  }
}

.welcome-msg {
  p {
    color: ${config.p.color};
  }
}

.account .column.main .block:not(.widget) .block-content .box-title {
  padding-bottom: 10px;
}

// Rating Stars
.rating-summary .rating-result > span::before,
.review-control-vote label::before {
  color: @star-rating-color-active !important;
}

ul.bullet {
  li {
    background: none !important;
    list-style: @custom-list-style-type;
    list-style-position: inside;
    padding-left: 0;
  }
}
//Footer Icons
.footer-secondary {
  .feature.feature-icon-hover {
    &:hover {
      .ib {
        border: @iconbox-border-hover;
      }
    }

    .ib {
      border-radius: @iconbox-border-radius;
      border: @iconbox-border;
    }
  }
}

//---------------------------------------------------------------------------------
@media screen and (max-width: 768px) {
  .action.primary {
    background-color: @button-primary-bg-color !important;
    color: @button-primary-txt-color !important;
    font-size: @button-font-size;
    font-family: @button-font-family;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    line-height: 40px !important;
    text-transform: @button-text-transform;
    font-weight: @button-font-weight;
    border-radius: @button-border-radius !important;
    border: @button-border !important;

    &:hover,
    &:active {
      background-color: @button-primary-bg-color-hover !important;
      color: @button-primary-txt-color-hover !important;
    }
  }

  button,
  .cart.table-wrapper .actions-toolbar > .action,
  .action-gift,
  .block-cart-failed .action.continue,
  .cart-container .form-cart .action.continue,
  .cart-gift-item .gift-item-block .title,
  .gift-options .actions-toolbar .secondary .action,
  #minicart-content-wrapper .actions .primary button {
    font-family: @button-font-family;
    background-color: @button-primary-bg-color;
    color: @button-primary-txt-color;
    font-size: @button-font-size;
    text-transform: @button-text-transform;
    font-weight: @button-font-weight;
    border-radius: @button-border-radius !important;
    border: @button-border;

    &:hover {
      background-color: @button-primary-bg-color-hover;
      color: @button-primary-txt-color-hover;
    }
  }

  .control {
    .ui-datepicker-trigger.v-middle {
      background-color: transparent;
    }
  }

  .review-form .action.submit.primary,
  .actions-toolbar > .primary button,
  .cart-summary .actions-toolbar > .primary button,
  .cart-summary .form.giftregistry .fieldset .action.primary,
  .paypal-review .block .actions-toolbar .action.primary,
  .block-compare .action.compare,
  .cart-summary .actions-toolbar > .primary .cart.table-wrapper .actions-toolbar > .action,
  .cart-summary .actions-toolbar > .primary .action-gift .modal-footer .action.primary {
    font-family: @button-font-family;
    background-color: @button-primary-bg-color !important;
    color: @button-primary-txt-color !important;
    text-transform: @button-text-transform;
    font-weight: @button-font-weight;
    font-size: @button-font-size;
    border-radius: @button-border-radius !important;
    border: @button-border !important;

    &:hover {
      background-color: @button-primary-bg-color-hover !important;
      color: @button-primary-txt-color-hover !important;
    }
  }
}
`;
//SAVE LESS
  download(text, '_typography.less', 'text/css');
  function download(text, name, type) {
    var a = document.getElementById("typography-save");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }
}

