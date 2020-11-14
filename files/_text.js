function generateText() {
console.log(config);
var text = `\

PRIMARY COLOR: ${config.colors.primary};
SECONDARY COLOR: ${config.colors.secondary};
ADDITIONAL COLOR:  ${config.colors.additional};

BUTTON: 
background-color: ${config.buttons.bg};
color:  ${config.buttons.color};
font-size:  ${config.buttons.fs};
font-weight:  ${config.buttons.fw};
font-family:  ${config.buttons.ff};
border:  ${config.buttons.border};
border-radius:  ${config.buttons.br};
text-transform:  ${config.buttons.tt};
${config.buttons.custom}

Hover: 
background-color:  ${config.buttons.bgh};
color:  ${config.buttons.colorh};
${config.buttons.customh}


HEADING STYLES:
<h1> 
color: ${config.h.color.e1}; 
font-size: ${config.h.fs.e1};
font-weight: ${config.h.fw.e1}; 
font-family: ${config.h.ff.e1};
text-transform: ${config.h.tt.e1};
${config.h.custom.e1}
 
<h2>
color: ${config.h.color.e2}; 
font-size: ${config.h.fs.e2};
font-weight: ${config.h.fw.e2}; 
font-family: ${config.h.ff.e2};
text-transform: ${config.h.tt.e2};
${config.h.custom.e2}

<h3> 
color: ${config.h.color.e3}; 
font-size: ${config.h.fs.e3};
font-weight: ${config.h.fw.e3}; 
font-family: ${config.h.ff.e3};
text-transform: ${config.h.tt.e3};
${config.h.custom.e3}

<h4>
color: ${config.h.color.e4}; 
font-size: ${config.h.fs.e4};
font-weight: ${config.h.fw.e4}; 
font-family: ${config.h.ff.e4};
text-transform: ${config.h.tt.e4};
${config.h.custom.e4}

<h5> 
color: ${config.h.color.e5}; 
font-size: ${config.h.fs.e5};
font-weight: ${config.h.fw.e5}; 
font-family: ${config.h.ff.e5};
text-transform: ${config.h.tt.e5};
${config.h.custom.e5}


PARAGRAPH STYLES:
<p>
color: ${config.p.color};
font-size: ${config.p.fs};
font-family: ${config.p.ff};
Line-height: ${config.p.lh};
${config.p.custom}


PRODUCT NAME STYLE for homepage and category page grid/list view
font-size: 18px;
color: ${config.colors.additional};
font-family: ${config.p.ff};
font-weight: 400;
text-transform: uppercase;

TEXT LINKS:

color: ${config.link.color};
font-weight: ${config.link.fw};
text-decoration: ${config.link.td};
${config.link.custom};
Hover:  
color: ${config.link.colorh};
${config.link.customh};

HOMEPAGE TAB STYLES (if applicable)
Unselected:
background-color: #fff;
color: ${config.colors.primary};
font-size: 22px;
font-family: ${config.tagLine.ff};
Active:
background-color: ${config.colors.primary};
color: #fff;

LIST STYLES:
Standard (list-style-type: like live site;)

SOCIAL ICONS:
background-color: ${config.socials.bg};
color: ${config.socials.color};
border: ${config.socials.border};
${config.socials.custom}
Hover:
background-color: ${config.socials.bgh};
color: ${config.socials.colorh};

As like JPG Style Guide

Social Icons Placement
Left side (left above the footer)

NEWSLETTER Signup Placement

Right side (right above the footer)

MAIN MENU STYLE:

Main Menu
background-color: ${config.menu.bg};
color: ${config.menu.color};
font-size: ${config.menu.fs};
font-weight: ${config.menu.fw};
font-family: ${config.menu.ff}; 
text-transform: ${config.menu.tt};
${config.menu.custom}

Hover/Active:
color: ${config.menu.colorh};
color: ${config.menu.tdh};
${config.menu.customh}
 
Sub Menu
background-color: ${config.subMenu.bg};
${config.subMenu.customp}
color: ${config.subMenu.color};
font-size: ${config.subMenu.fs};   
font-weight: ${config.subMenu.fw}; 
font-family: ${config.subMenu.ff};     
text-transform: ${config.subMenu.tt};
${config.subMenu.custom}
Hover:
color: ${config.subMenu.colorh};
text-decoration: ${config.subMenu.tdh};
${config.subMenu.customh}
 
CATEGORY PROMO:
class=”categoryPromo”

padding: ${config.catPromo.padding};
background-color: ${config.catPromo.bg};
color: ${config.catPromo.color};
font-size: ${config.catPromo.fs}; 
font-weight: ${config.catPromo.fw};
font-family: ${config.catPromo.ff};
${config.catPromo.custom}


SKU PROMO:
p class=”SkuPromo”

padding: ${config.skuPromo.padding};
background-color: ${config.skuPromo.bg};
color: ${config.skuPromo.color};
font-size: ${config.skuPromo.fs}; 
font-weight: ${config.skuPromo.fw};
font-family: ${config.skuPromo.ff};
${config.skuPromo.ff}

TAG LINE:
background-color: ${config.tagLine.bg};
color: ${config.tagLine.color};
font-size: ${config.tagLine.fs}; 
font-weight: ${config.tagLine.fw};
font-family: ${config.tagLine.ff};
${config.tagLine.custom}

BADGE:
background-color: ${config.badge.bg};
color: ${config.badge.color};
${config.badge.custom}

CHECKOUT BANNERS:
Banner1:
background-color: ${config.banners.bg1};
color: ${config.banners.color1};
font-size: ${config.banners.fs1}; 
font-weight: ${config.banners.fw1};
font-family: ${config.banners.ff1};
text-transform: ${config.banners.tt1};
${config.banners.custom1}

Banner2:
background-color: ${config.banners.bg2};
color: ${config.banners.color2};
font-size: ${config.banners.fs2}; 
font-weight: ${config.banners.fw2};
font-family: ${config.banners.ff2};
text-transform: ${config.banners.tt2};
${config.banners.custom2}


`;
//SAVE LESS
  download(styles, '_text.txt', 'text');
  function download(text, name, type) {
    var a = document.getElementById("text-save");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
  }
}

