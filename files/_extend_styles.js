function generateExtendStyles() {

var text = `\
//You can override custom theme styles here

.categoryPromo {
  padding: 10px;
  background-color: @category-promo-background-color;
  color: @category-promo-txt-color;
  font-size: @category-promo-font-size !important;
  font-weight: @category-promo-font-weight !important;
  font-family: @category-promo-font-family;

  & * {
    font-size: @category-promo-font-size;
  }
}

.skuPromo {
  padding: 10px;
  background-color: @sku-promo-background-color;
  color: @sku-promo-txt-color;
  font-size: @sku-promo-font-size !important;
  font-weight: @sku-promo-font-weight !important;
  font-family: @sku-promo-font-family;

  & * {
    font-size: @sku-promo-font-size;
  }
}
//Fix overlap product page --More from this brand--
#related\.brand\.product\.tab li.item.product.product-item {
  height: 432px !important;
  padding-bottom: 74px !important;
}

//Checkout Banners
.promorule-shpping,
.promorule-checkout {
  background-color: @promo-shipping-bg;
  color: @promo-shipping-color;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 20px;
  text-transform: @promo-shipping-text-transform;

  h3,
  h2 {
    font-size: @promo-shipping-title-font-size;
    font-weight: 700;
    font-family: @promo-shipping-font-family;
    color: @custom-color-1;
  }

  h5,
  h4 {
    font-size: @promo-shipping-desc-font-size;
    font-weight: 400;
    font-family: @promo-shipping-font-family;
    color: @custom-color-1;
  }

  a {
    color: @custom-additional-color;

    &:hover {
      color: @custom-color-1;
    }
  }
}

.promorule-checkout {
  &.login-reminder-block {
    background-color: @promo-login-bg;
    color: @promo-login-color;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    text-transform: @promo-login-text-transform;

    h2 {
      font-size: @promo-login-title-font-size;
      font-weight: 700;
      font-family: @promo-login-font-family;
      color: @custom-color-1;
    }

    h4 {
      font-size: @promo-login-desc-font-size;
      font-weight: 400;
      font-family: @promo-login-font-family;
      color: @custom-color-1;
    }

    a {
      color: @custom-additional-color;

      &:hover {
        color: @custom-color-1;
      }
    }
  }
}

`;
//SAVE LESS
  download(text, '_extend_styles.less', 'text/css');
  function download(text, name, type) {
    var a = document.getElementById("extend-save");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }
}

