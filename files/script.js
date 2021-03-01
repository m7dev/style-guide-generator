var colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu;
var config, json;

var inputs = {
    colors: ["primary-color", "secondary-color", "additional-color"],
    buttons: ["button-padding", "button-bg", "button-color", "button-fs", "button-fw", "button-ff", "button-border", "button-br", "button-tt", "button-custom", "button-bg-h", "button-color-h", "button-custom-h"],
    socials: ["social-bg-p", "social-bg", "social-color", "social-preview-i1", "social-preview-i2", "social-preview-i3", "social-preview-i4","social-border","social-custom","social-bg-h","social-color-h"],
    mobMenu: ["mobmenu-el1", "mobmenu-el1", "mobmenu-el2", "mobmenu-el3", "mobmenu-el4", "mobmenu-bg", "mobmenu-color", "mobmenu-counter","mobmenu-bg-a","mobmenu-color-a","mobmenu-fs-a","mobmenu-fw-a","mobmenu-ff-a","mobmenu-tt-a","mobmenu-custom"],
    h: ["h1-color", "h2-color", "h3-color", "h4-color", "h5-color", "h1-fs", "h2-fs", "h3-fs", "h4-fs", "h5-fs", "h1-fw", "h2-fw", "h3-fw", "h4-fw", "h5-fw", "h1-ff", "h2-ff", "h3-ff", "h4-ff", "h5-ff", "h1-tt", "h2-tt", "h3-tt", "h4-tt", "h5-tt", "h1-custom", "h2-custom", "h3-custom", "h4-custom", "h5-custom"],
    p: ["p-color", "p-fs", "p-ff", "p-lh", "p-custom"], 
    banners: ["banner1-bg", "banner1-color", "banner1-fs-h2", "banner1-fs-h4", "banner1-ff", "banner1-tt", "banner1-custom", "banner2-bg", "banner2-color", "banner2-fs-h2", "banner2-fs-h4", "banner2-ff", "banner2-tt", "banner2-custom"],
    tabs: ["tabs-bg", "tabs-color", "tabs-bg-h", "tabs-color-h"],
    link: ["link-color", "link-fw", "link-td", "link-custom", "link-color-h", "link-custom-h"],
    catPromo: ["catpromo-padding", "catpromo-bg", "catpromo-color", "catpromo-fs", "catpromo-fw", "catpromo-ff", "catpromo-custom"],
    skuPromo: ["skupromo-padding", "skupromo-bg", "skupromo-color", "skupromo-fs", "skupromo-fw", "skupromo-ff", "skupromo-custom"], 
    badge: ["badge-bg", "badge-color", "badge-custom"], 
    tagLine: ["tagline-bg", "tagline-color", "tagline-fs", "tagline-fw", "tagline-ff", "tagline-custom"], 
    menu: ["menu-bg", "menu-custom-p", "menu-color", "menu-fs", "menu-fw", "menu-ff", "menu-tt", "menu-custom", "menu-bg-h", "menu-color-h", "menu-td-h", "menu-custom-h"], 
    subMenu: ["submenu-bg", "submenu-custom-p", "submenu-color", "submenu-fs", "submenu-fw", "submenu-ff", "submenu-tt", "submenu-custom", "submenu-bg-h", "submenu-color-h", "submenu-td-h", "submenu-custom-h"]
}

initialConfig = { 
    colors: {
        primary: "#d3aa80", 
        secondary: "#faf5f0", 
        additional: "#666"
    },
    buttons: {
        id: ["button-preview", "button-preview-h"],
        padding: "5px", 
        bg: "#d3aa80", 
        color: "#fff", 
        fs: "16px", 
        fw: "300",
        ff: 'Montserrat", Helvetica, sans-serif',
        border: "0px solid #fff",
        br: "unset",
        tt: "unset",
        custom: "",
        bgh: "#666",
        colorh: "#fff",
        customh: ""
    },
    socials: {
        parrentid: "social-preview",
        parrentbg: "#fff",
        id: ["social-preview-i1", "social-preview-i2", "social-preview-i3", "social-preview-i4"],
        bg: "#666", 
        color: "#fff",
        border: "0px solid #fff",
        custom: "",
        bgh: "#ddd", 
        colorh: "#fff"
    },
    mobMenu: {
        id: ["mobmenu-prev", "mobmenu-prev-counter", "mobmenu-prev-active"],
        eids: ["mobmenu-el1", "mobmenu-el2", "mobmenu-el3", "mobmenu-el4"],
        bg: "#fff", 
        color: "#666", 
        counterbg: "#666", 
        bga: "#ddd", 
        colora: "#fff",
        fsa: "14px",
        fwa: "400",
        ffa: '"Open Sans", sans-serif',
        tta: "uppercase",
        custom: ""
    },
    h: {
        id: ["h1-preview", "h2-preview", "h3-preview", "h4-preview", "h5-preview"],
        color: { e1:"#000", e2:"#000", e3:"#666", e4:"#000", e5:"#000" },
        fs: { e1:"32px", e2:"30px", e3:"26px", e4:"20px", e5:"16px" },
        fw: { e1:"500", e2:"500", e3:"500", e4:"500", e5:"500" },
        ff: { e1:'"Open Sans", Helvetica, sans-serif', e2:'"Open Sans", Helvetica, sans-serif', e3:'"Open Sans", Helvetica, sans-serif', e4:'"Open Sans", Helvetica, sans-serif', e5:'"Open Sans", Helvetica, sans-serif' },
        tt: { e1:"capitalize", e2:"capitalize", e3:"uppercase", e4:"capitalize", e5:"capitalize" },
        custom: { e1:"", e2:"", e3:"", e4:"", e5:"" }
    },
    p: {
        id: ["p-preview", "link-p-preview"],
        color: "#000",
        fs: "12px",
        ff: 'Montserrat", Helvetica, sans-serif',
        lh: "1.6",
        custom: ""
    },
    banners: {
        id: ["banner1-preview", "banner1-h2", "banner1-h4", "banner2-preview", "banner2-h2", "banner2-h4"],
        bg1: "#ddd",
        color1: "#fff",
        fs1h2: "22px",
        fs1h4: "14px",   
        ff1: '"Open Sans", Helvetica, sans-serif', 
        tt1: "uppercase",
        custom1: "",  
        bg2: "#666",
        color2: "#fff",
        fs2h2: "22px",
        fs2h4: "14px",
        ff2: '"Open Sans", Helvetica, sans-serif',  
        tt2: "uppercase",   
        custom2: ""    
    },
    tabs: {
        id: ["tab1", "tab2", "tab3"],
        bg: "#d3aa80",
        color: "#fff",
        bgh: "#333",
        colorh: "#fff"
    },
    link: {
        id: ["link-preview","link-preview-h"],
        color: getElValue("link-color", "color1"),
        fw: "300",
        td: "unset",
        custom:"",
        colorh: getElValue("link-color-h", "color2"),
        customh: ""
    },
    catPromo: {
        id: "catpromo-preview",
        padding: "10px",
        bg: "#f5f5f5",
        color: "#ddd",
        fs: "18px",
        fw: "700",
        ff: 'Montserrat", Helvetica, sans-serif',
        custom: ""
    },
    skuPromo: {
        id: "skupromo-preview",
        padding: "10px",
        bg: "#f5f5f5",
        color: "#ddd",
        fs: "16px",
        fw: "500",
        ff: 'Montserrat", Helvetica, sans-serif',
        custom: ""
    },
    badge: {
        id: "badge-preview",
        bg: "#d3aa80",
        color: "#fff",
        custom: ""
    },
    tagLine: {
        id: "tagline-preview",
        bg: "#ddd",
        color: "#fff",
        fs: "32px",
        fw: "400",
        ff: '"Open Sans", Helvetica, sans-serif',
        custom: ""
    },
    menu: {
        id: ["menu-prev", "nav1-prev", "nav2-prev", "nav3-prev"],
        bg: "#fff",
        customp: "",
        color: "#666",
        fs: "16px",
        fw: "400",
        ff: '"Open Sans", Helvetica, sans-serif',
        tt: "uppercase",
        custom: "",
        bgh: "transparent",
        colorh: "#ddd",
        tdh: "unset",
        customh: ""
    },
    subMenu: {
        id: ["sub-prev", "sub1-prev", "sub2-prev", "sub3-prev", "sub4-prev"],
        bg: "#fff",
        customp: "",
        color: "#666",
        fs: "14px",
        fw: "500",
        ff: '"Open Sans", Helvetica, sans-serif',
        tt: "capitalize",
        custom: "",
        bgh: "#ddd",
        colorh: "#666",
        tdh: "unset",
        customh: ""
    },
    listStyle: {
        type: "disc"
    },
    bannerSize: {
        selected: "1500 * 730"
    },
    productName: {
        default: true,
        color: "#666",
        tt: "uppercase",
        fs: "18px",
        fw: "400"
    }
}

console.log(initialConfig);

function getElValue(id, def) {
    value = document.getElementById(id).value;
    if (value == "" && def == "color1" && document.getElementById("primary-color").value !== "") {
        value = document.getElementById("primary-color").value;
        document.getElementById(id).setAttribute("placeholder", value);
        return value;
    }
    else if (value == "" && def == "color2" && document.getElementById("secondary-color").value !== "") {
        value = document.getElementById("secondary-color").value;
        document.getElementById(id).setAttribute("placeholder", value);
        return value;
    }
    else if (value == "" && def == "color3" && document.getElementById("additional-color").value !== "") {
        value = document.getElementById("additional-color").value;
        document.getElementById(id).setAttribute("placeholder", value);
        return value;
    }
    else if (value == "" && def == "font" && document.getElementById("button-ff").value !== "") {
        value = document.getElementById("button-ff").value;
        document.getElementById(id).setAttribute("placeholder", value);
        return value;
    }
    else if (value !== "") {
        return value;
    }
    else {
        return
    }
}

function setProperties(id, padding, bgColor, color, fsize, fweight, ffamily, border, bradius, lineh, tt, td, custom) {
    if (ffamily !== undefined) {
        font = ffamily.split (',');
    } else {
        font = ""
    }
    font = font[0];
    var newCssText = 
    "padding:" + padding + ";" +
    "background-color:" + bgColor + ";" + 
    "color:" + color + ";" + 
    "font-size:" + fsize + ";"+ 
    "font-weight:" + fweight + ";" +
    "font-family:" + font + ";" +
    "border:" + border + ";" +
    "border-radius:" + bradius + ";" +
    "line-height:" + lineh + ";" +
    "text-transform:" + tt + ";" +
    "text-decoration:" + td + ";" +
    custom + ";";
    document.getElementById(id).style.cssText = newCssText;
}

function setAllProperties(colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu) {
    //SET COLORS
    document.getElementById("primary-color-preview").style.backgroundColor = colors.primary;
    document.getElementById("secondary-color-preview").style.backgroundColor = colors.secondary;
    document.getElementById("additional-color-preview").style.backgroundColor = colors.additional;

    //SET PROPERTIES id, padding, bgColor, color, fsize, fweight, ffamily, border, bradius, lh, tt, td, custom
    setProperties (buttons.id[0], buttons.padding, buttons.bg, buttons.color, buttons.fs, buttons.fw, buttons.ff, buttons.border, buttons.br, "", buttons.tt, "", buttons.custom);
    setProperties (buttons.id[1], buttons.padding, buttons.bgh, buttons.colorh, buttons.fs, buttons.fw, buttons.ff, buttons.border, buttons.br, "", buttons.tt, "", buttons.customh);

    setProperties (socials.parrentid, "", socials.parrentbg, "", "", "", "", "", "", "", "", "", "");
    socials.id.forEach(element => {
        setProperties (element, "", socials.bg, socials.color, "", "", "", socials.border, "", "", "", "", socials.custom);
    });
    setProperties (socials.id[3], "", socials.bgh, socials.colorh, "", "", "", socials.border, "", "", "", "", socials.custom);


    setProperties (mobMenu.id[0], "", mobMenu.bg, mobMenu.color, "", "", "", "", "", "", "", "", "");
    setProperties (mobMenu.id[1], "", mobMenu.counterbg, "", "", "", "", "", "", "", "", "", "");
    setProperties (mobMenu.id[2], "", mobMenu.bga, mobMenu.colora, "", "", "", "", "", "", "", "", "");
    mobMenu.eids.forEach(element => {
        setProperties (element, "", mobMenu.bga, mobMenu.colora, mobMenu.fsa, mobMenu.fwa, mobMenu.ffa, "", "", "", mobMenu.tta, "", mobMenu.custom);
    });

    setProperties (h.id[0], "", "", h.color.e1, h.fs.e1, h.fw.e1, h.ff.e1, "", "", "", h.tt.e1, "", h.custom.e1);
    setProperties (h.id[1], "", "", h.color.e2, h.fs.e2, h.fw.e2, h.ff.e2, "", "", "", h.tt.e2, "", h.custom.e2);
    setProperties (h.id[2], "", "", h.color.e3, h.fs.e3, h.fw.e3, h.ff.e3, "", "", "", h.tt.e3, "", h.custom.e3);
    setProperties (h.id[3], "", "", h.color.e4, h.fs.e4, h.fw.e4, h.ff.e4, "", "", "", h.tt.e4, "", h.custom.e4);
    setProperties (h.id[4], "", "", h.color.e5, h.fs.e5, h.fw.e5, h.ff.e5, "", "", "", h.tt.e5, "", h.custom.e5);

    setProperties (p.id[0], "", "", p.color, p.fs, p.fw, p.ff, "", "", p.lh, p.tt, "", p.custom);
    setProperties (p.id[1], "", "", p.color, p.fs, p.fw, p.ff, "", "", p.lh, p.tt, "", p.custom);

    setProperties (link.id[0], "", "", link.color, "", link.fw, "", "", "", "", "", link.td, link.custom);
    setProperties (link.id[1], "", "", link.colorh, "", link.fw, "", "", "", "", "", link.td, link.customh);
    setProperties ("banner-link", "", "", "", "", link.fw, "", "", "", "", "", "", link.custom);

    setProperties (catPromo.id, catPromo.padding, catPromo.bg, catPromo.color, catPromo.fs, catPromo.fw, catPromo.ff, "", "", "", "", "", catPromo.custom);
    setProperties (skuPromo.id, skuPromo.padding, skuPromo.bg, skuPromo.color, skuPromo.fs, skuPromo.fw, skuPromo.ff, "", "", "", "", "", skuPromo.custom);

    setProperties (badge.id, "", badge.bg, badge.color, "", "", "", "", "", "", "", "", badge.custom);
    setProperties (tagLine.id, "", tagLine.bg, tagLine.color, tagLine.fs, tagLine.fw, tagLine.ff, "", "", "", "", "", tagLine.custom);

    setProperties (menu.id[0], "", menu.bg, "", "", "", "", "", "", "", "", "", menu.customp);
    setProperties (menu.id[1], "", "", menu.color, menu.fs, menu.fw, menu.ff, "", "", "", menu.tt, "", menu.custom);
    setProperties (menu.id[2], "", "", menu.color, menu.fs, menu.fw, menu.ff, "", "", "", menu.tt, "", menu.custom);
    setProperties (menu.id[3], "", menu.bgh, menu.colorh, menu.fs, menu.fw, menu.ff, "", "", "", menu.tt, menu.tdh, menu.customh);

    setProperties (subMenu.id[0], "", subMenu.bg, "", "", "", "", "", "", "", "", "", subMenu.customp);
    setProperties (subMenu.id[1], "", "", subMenu.color, subMenu.fs, subMenu.fw, subMenu.ff, "", "", "", subMenu.tt, "", subMenu.custom);
    setProperties (subMenu.id[2], "", subMenu.bgh, subMenu.colorh, subMenu.fs, subMenu.fw, subMenu.ff, "", "", "", subMenu.tt, subMenu.tdh, subMenu.customh);
    setProperties (subMenu.id[3], "", "", subMenu.color, subMenu.fs, subMenu.fw, subMenu.ff, "", "", "", subMenu.tt, "", subMenu.custom);
    setProperties (subMenu.id[4], "", "", subMenu.color, subMenu.fs, subMenu.fw, subMenu.ff, "", "", "", subMenu.tt, "", subMenu.custom);

    setProperties (banners.id[0], "", banners.bg1, banners.color1, "", "", "", "", "", "", "", "", "");
    setProperties (banners.id[1], "", "", "", banners.fs1h2, "", banners.ff1, "", "", "", banners.tt1, "", banners.custom1);
    setProperties (banners.id[2], "", "", "", banners.fs1h4, "", banners.ff1, "", "", "", banners.tt1, "", banners.custom1);
    setProperties (banners.id[3], "", banners.bg2, banners.color2, "", "", "", "", "", "", "", "", "");
    setProperties (banners.id[4], "", "", "", banners.fs2h2, "", banners.ff2, "", "", "", banners.tt2, "", banners.custom2);
    setProperties (banners.id[5], "", "", "", banners.fs2h4, "", banners.ff2, "", "", "", banners.tt2, "", banners.custom2);    

    setProperties (tabs.id[0], "", tabs.bg, tabs.color, "", "", banners.ff1, "", "", "", "", "", "");
    setProperties (tabs.id[1], "", tabs.bgh, tabs.colorh, "", "", banners.ff1, "", "", "", "", "", "");
    setProperties (tabs.id[2], "", tabs.bg, tabs.color, "", "", banners.ff1, "", "", "", "", "", "");
}

function getFonts (fonts) {
    function arrayUnique(arr){
        return arr.filter((e,i,a)=>a.indexOf(e)==i)
    }
    fonts = arrayUnique(fonts);
    var filtered = fonts.filter(function (el) {
        return el !== "" && el !== undefined;
    });
    for (let i = 0; i < filtered.length; i++) {
        font = filtered[i].split(',');
        font = font[0].replace(/"/g,"");

        WebFont.load({
            google: {
                families: [font]
            }
        });
    }
}

//OPEN JSON CONFIG
function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object
	f = files[0];
    var reader = new FileReader();
    reader.readAsText(f);
    reader.onload = (function () {
        return function (e) {
            // console.log('e readAsText target = ', e.target.result);
            try {
                json = JSON.parse(e.target.result);
                // alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
            } catch (ex) {
                alert('Error when trying to parse json = ' + ex);
            }
            console.log(json);
        }
    })(f);
}
document.getElementById('json-open').addEventListener('change', handleFileSelect, false);

//SHOW JSON
function showJson() {
    var colors = json.colors, buttons = json.buttons, socials = json.socials, mobMenu = json.mobMenu, h = json.h, p = json.p, banners = json.banners, tabs = json.tabs, link = json.link, catPromo = json.catPromo, skuPromo = json.skuPromo, badge = json.badge, tagLine = json.tagLine, menu = json.menu, subMenu = json.subMenu;

    function setValues(id, values) {
        for (let i = 0; i < id.length; i++) {
            document.getElementById(id[i]).value = values[i];
        }
    }

    //SET FONTS
    var fonts = [buttons.ff, mobMenu.ffa, h.ff.e1, h.ff.e2, h.ff.e3, h.ff.e4, h.ff.e5, p.ff, banners.ff1, banners.ff2, catPromo.ff, skuPromo.ff, tagLine.ff, menu.ff, subMenu.ff];
    getFonts(fonts);

    setAllProperties(colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu);
    setValues(inputs.colors, [colors.primary, colors.secondary, colors.additional]);
    setValues(inputs.buttons, [buttons.padding, buttons.bg, buttons.color, buttons.fs, buttons.fw, buttons.ff, buttons.border, buttons.br, buttons.tt, buttons.custom, buttons.bgh, buttons.colorh, buttons.customh]);
    setValues(inputs.socials, [socials.parrentbg, socials.bg, socials.color, socials.id[0], socials.id[1], socials.id[2], socials.id[3], socials.border, socials.custom, socials.bgh, socials.colorh]);
    setValues(inputs.mobMenu, [mobMenu.eids[0], mobMenu.eids[1], mobMenu.eids[2], mobMenu.eids[3], mobMenu.eids[4], mobMenu.bg, mobMenu.color, mobMenu.counterbg, mobMenu.bga, mobMenu.colora, mobMenu.fsa, mobMenu.fwa, mobMenu.ffa, mobMenu.tta, mobMenu.custom]);
    setValues(inputs.h, [h.color.e1, h.color.e2, h.color.e3, h.color.e4, h.color.e5, h.fs.e1, h.fs.e2, h.fs.e3, h.fs.e4, h.fs.e5, h.fw.e1, h.fw.e2, h.fw.e3, h.fw.e4, h.fw.e5, h.ff.e1, h.ff.e2, h.ff.e3, h.ff.e4, h.ff.e5, h.tt.e1, h.tt.e2, h.tt.e3, h.tt.e4, h.tt.e5, h.custom.e1, h.custom.e2, h.custom.e3, h.custom.e4, h.custom.e5]);
    setValues(inputs.p, [p.color, p.fs, p.ff, p.lh, p.custom]);
    setValues(inputs.banners, [banners.bg1, banners.color1, banners.fs1h2, banners.fs1h4, banners.ff1, banners.tt1, banners.custom1, banners.bg2, banners.color2, banners.fs2h2, banners.fs2h4, banners.ff2, banners.tt2, banners.custom2]);
    setValues(inputs.tabs, [tabs.bg, tabs.color, tabs.bgh, tabs.colorh]);
    setValues(inputs.link, [link.color, link.fw, link.td, link.custom, link.colorh, link.customh]);
    setValues(inputs.catPromo, [catPromo.padding, catPromo.bg, catPromo.color, catPromo.fs, catPromo.fw, catPromo.ff, catPromo.custom]);
    setValues(inputs.skuPromo, [skuPromo.padding, skuPromo.bg, skuPromo.color, skuPromo.fs, skuPromo.fw, skuPromo.ff, skuPromo.custom]);
    setValues(inputs.badge, [badge.bg, badge.color, badge.custom]);
    setValues(inputs.tagLine, [tagLine.bg, tagLine.color, tagLine.fs, tagLine.fw, tagLine.ff, tagLine.custom]);
    setValues(inputs.menu, [menu.bg, menu.customp, menu.color, menu.fs, menu.fw, menu.ff, menu.tt, menu.custom, menu.bgh, menu.colorh, menu.tdh, menu.customh]);
    setValues(inputs.subMenu, [subMenu.bg, subMenu.customp, subMenu.color, subMenu.fs, subMenu.fw, subMenu.ff, subMenu.tt, subMenu.custom, subMenu.bgh, subMenu.colorh, subMenu.tdh, subMenu.customh]);

    config = {colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu};
}

//GENERATE STYLE GUIDE
function generateStyleGuide() {
    //GET PROPERTIES
    colors = {
        primary: getElValue("primary-color"), 
        secondary: getElValue("secondary-color"), 
        additional: getElValue("additional-color")
    }
    buttons = {
        id: ["button-preview", "button-preview-h"],
        padding: getElValue("button-padding"), 
        bg: getElValue("button-bg", "color1"), 
        color: getElValue("button-color"), 
        fs: getElValue("button-fs"), 
        fw: getElValue("button-fw"),
        ff: getElValue("button-ff"),
        border: getElValue("button-border", "unset"),
        br: getElValue("button-br"),
        tt: getElValue("button-tt"),
        custom: getElValue("button-custom"),
        bgh: getElValue("button-bg-h", "color2"),
        colorh: getElValue("button-color-h"),
        customh: getElValue("button-custom-h")
    }
    socials = {
        parrentid: "social-preview",
        parrentbg: getElValue("social-bg-p"),
        id: ["social-preview-i1", "social-preview-i2", "social-preview-i3", "social-preview-i4"],
        bg: getElValue("social-bg", "color3"), 
        color: getElValue("social-color"),
        border: getElValue("social-border"),
        custom: getElValue("social-custom"),
        bgh: getElValue("social-bg-h", "color1"), 
        colorh: getElValue("social-color-h")
    }
    mobMenu = {
        id: ["mobmenu-prev", "mobmenu-prev-counter", "mobmenu-prev-active"],
        eids: ["mobmenu-el1", "mobmenu-el2", "mobmenu-el3", "mobmenu-el4"],
        bg: getElValue("mobmenu-bg"), 
        color: getElValue("mobmenu-color", "color3"), 
        counterbg: getElValue("mobmenu-counter", "color2"), 
        bga: getElValue("mobmenu-bg-a", "color1"), 
        colora: getElValue("mobmenu-color-a", "color3"),
        fsa: getElValue("mobmenu-fs-a"),
        fwa: getElValue("mobmenu-fw-a"),
        ffa: getElValue("mobmenu-ff-a"),
        tta: getElValue("mobmenu-tt-a"),
        custom: getElValue("mobmenu-custom")
    }
    h = {
        id: ["h1-preview", "h2-preview", "h3-preview", "h4-preview", "h5-preview"],
        color: { e1:getElValue("h1-color"), e2:getElValue("h2-color"), e3:getElValue("h3-color"), e4:getElValue("h4-color"), e5:getElValue("h5-color") },
        fs: { e1:getElValue("h1-fs"), e2:getElValue("h2-fs"), e3:getElValue("h3-fs"), e4:getElValue("h4-fs"), e5:getElValue("h5-fs") },
        fw: { e1:getElValue("h1-fw"), e2:getElValue("h2-fw"), e3:getElValue("h3-fw"), e4:getElValue("h4-fw"), e5:getElValue("h5-fw") },
        ff: { e1:getElValue("h1-ff"), e2:getElValue("h2-ff"), e3:getElValue("h3-ff"), e4:getElValue("h4-ff"), e5:getElValue("h5-ff") },
        tt: { e1:getElValue("h1-tt"), e2:getElValue("h2-tt"), e3:getElValue("h3-tt"), e4:getElValue("h4-tt"), e5:getElValue("h5-tt") },
        custom: { e1:getElValue("h1-custom"), e2:getElValue("h2-custom"), e3:getElValue("h3-custom"), e4:getElValue("h4-custom"), e5:getElValue("h5-custom") }
    }
    p = {
        id: ["p-preview", "link-p-preview"],
        color: getElValue("p-color", "color3"),
        fs: getElValue("p-fs"),
        ff: getElValue("p-ff", "font"),
        lh: getElValue("p-lh"),
        custom: getElValue("p-custom")
    }
    banners = {
        id: ["banner1-preview", "banner1-h2", "banner1-h4", "banner2-preview", "banner2-h2", "banner2-h4"],
        bg1: getElValue("banner1-bg", "color1"),
        color1: getElValue("banner1-color"),
        fs1h2: getElValue("banner1-fs-h2"),
        fs1h4: getElValue("banner1-fs-h4"),   
        ff1: getElValue("banner1-ff"), 
        tt1: getElValue("banner1-tt"),
        custom1: getElValue("banner1-custom"),  
        bg2: getElValue("banner2-bg", "color3"),
        color2: getElValue("banner2-color"),
        fs2h2: getElValue("banner2-fs-h2"),
        fs2h4: getElValue("banner2-fs-h4"),
        ff2: getElValue("banner2-ff"),  
        tt2: getElValue("banner2-tt"),   
        custom2: getElValue("banner2-custom")     
    }
    tabs = {
        id: ["tab1", "tab2", "tab3"],
        bg: getElValue("tabs-bg", "color2"),
        color: getElValue("tabs-color"),
        bgh: getElValue("tabs-bg-h", "color1"),
        colorh: getElValue("tabs-color-h")
    }
    link = {
        id: ["link-preview","link-preview-h"],
        color: getElValue("link-color", "color1"),
        fw: getElValue("link-fw"),
        td: getElValue("link-td"),
        custom: getElValue("link-custom"),
        colorh: getElValue("link-color-h", "color2"),
        customh: getElValue("link-custom-h")
    }
    catPromo = {
        id: "catpromo-preview",
        padding: getElValue("catpromo-padding"),
        bg: getElValue("catpromo-bg"),
        color: getElValue("catpromo-color", "color1"),
        fs: getElValue("catpromo-fs"),
        fw: getElValue("catpromo-fw"),
        ff: getElValue("catpromo-ff", "font"),
        custom: getElValue("catpromo-custom")
    }
    skuPromo = {
        id: "skupromo-preview",
        padding: getElValue("skupromo-padding"),
        bg: getElValue("skupromo-bg"),
        color: getElValue("skupromo-color","color1"),
        fs: getElValue("skupromo-fs"),
        fw: getElValue("skupromo-fw"),
        ff: getElValue("skupromo-ff", "font"),
        custom: getElValue("skupromo-custom")
    }
    badge = {
        id: "badge-preview",
        bg: getElValue("badge-bg", "color1"),
        color: getElValue("badge-color"),
        custom: getElValue("badge-custom")
    }
    tagLine = {
        id: "tagline-preview",
        bg: getElValue("tagline-bg", "color1"),
        color: getElValue("tagline-color","color3"),
        fs: getElValue("tagline-fs"),
        fw: getElValue("tagline-fw"),
        ff: getElValue("tagline-ff", "font"),
        custom: getElValue("tagline-custom")
    }
    menu = {
        id: ["menu-prev", "nav1-prev", "nav2-prev", "nav3-prev"],
        bg: getElValue("menu-bg"),
        customp: getElValue("menu-custom-p"),
        color: getElValue("menu-color","color3"),
        fs: getElValue("menu-fs"),
        fw: getElValue("menu-fw"),
        ff: getElValue("menu-ff", "font"),
        tt: getElValue("menu-tt"),
        custom: getElValue("menu-custom"),
        bgh: getElValue("menu-bg-h"),
        colorh: getElValue("menu-color-h","color1"),
        tdh: getElValue("menu-td-h"),
        customh: getElValue("menu-custom-h")
    }
    subMenu = {
        id: ["sub-prev", "sub1-prev", "sub2-prev", "sub3-prev", "sub4-prev"],
        bg: getElValue("submenu-bg"),
        customp: getElValue("submenu-custom-p"),
        color: getElValue("submenu-color","color3"),
        fs: getElValue("submenu-fs"),
        fw: getElValue("submenu-fw"),
        ff: getElValue("submenu-ff", "font"),
        tt: getElValue("submenu-tt"),
        custom: getElValue("submenu-custom"),
        bgh: getElValue("submenu-bg-h", "color1"),
        colorh: getElValue("submenu-color-h"),
        tdh: getElValue("submenu-td-h"),
        customh: getElValue("submenu-custom-h")
    }
    listStyle = {
        type: getElValue("list-style")
    }
    bannerSize = {
        selected: getElValue("banner-size")
    }
    productName = {
        default: true,
        color: getElValue("additional-color"),
        tt: "uppercase",
        fs: "18px",
        fw: "400"
    }

    //SET FONTS
    var fonts = [buttons.ff, mobMenu.ffa, h.ff.e1, h.ff.e2, h.ff.e3, h.ff.e4, h.ff.e5, p.ff, banners.ff1, banners.ff2, catPromo.ff, skuPromo.ff, tagLine.ff, menu.ff, subMenu.ff];
    getFonts(fonts);

    setAllProperties(colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu);
    let newConfig = {colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu, listStyle, bannerSize, productName};
    Object.keys({...initialConfig.colors,...newConfig.colors}).map(key=>{
        colors[key]=newConfig.colors[key]||initialConfig.colors[key]
    })
    Object.keys({...initialConfig.buttons,...newConfig.buttons}).map(key=>{
        buttons[key]=newConfig.buttons[key]||initialConfig.buttons[key]
    })
    Object.keys({...initialConfig.socials,...newConfig.socials}).map(key=>{
        socials[key]=newConfig.socials[key]||initialConfig.socials[key]
    })
    Object.keys({...initialConfig.mobMenu,...newConfig.mobMenu}).map(key=>{
        mobMenu[key]=newConfig.mobMenu[key]||initialConfig.mobMenu[key]
    })
    Object.keys({...initialConfig.h,...newConfig.h}).map(key=>{
        h[key]=newConfig.h[key]||initialConfig.h[key]
    })
    Object.keys({...initialConfig.p,...newConfig.p}).map(key=>{
        p[key]=newConfig.p[key]||initialConfig.p[key]
    })
    Object.keys({...initialConfig.banners,...newConfig.banners}).map(key=>{
        banners[key]=newConfig.banners[key]||initialConfig.banners[key]
    })
    Object.keys({...initialConfig.tabs,...newConfig.tabs}).map(key=>{
        tabs[key]=newConfig.tabs[key]||initialConfig.tabs[key]
    })
    Object.keys({...initialConfig.link,...newConfig.link}).map(key=>{
        link[key]=newConfig.link[key]||initialConfig.link[key]
    })
    Object.keys({...initialConfig.catPromo,...newConfig.catPromo}).map(key=>{
        catPromo[key]=newConfig.catPromo[key]||initialConfig.catPromo[key]
    })
    Object.keys({...initialConfig.skuPromo,...newConfig.skuPromo}).map(key=>{
        skuPromo[key]=newConfig.skuPromo[key]||initialConfig.skuPromo[key]
    })
    Object.keys({...initialConfig.badge,...newConfig.badge}).map(key=>{
        badge[key]=newConfig.badge[key]||initialConfig.badge[key]
    })
    Object.keys({...initialConfig.tagline,...newConfig.tagline}).map(key=>{
        tagline[key]=newConfig.tagline[key]||initialConfig.tagline[key]
    })
    Object.keys({...initialConfig.menu,...newConfig.menu}).map(key=>{
        menu[key]=newConfig.menu[key]||initialConfig.menu[key]
    })
    Object.keys({...initialConfig.subMenu,...newConfig.subMenu}).map(key=>{
        subMenu[key]=newConfig.subMenu[key]||initialConfig.subMenu[key]
    })
    Object.keys({...initialConfig.listStyle,...newConfig.listStyle}).map(key=>{
        listStyle[key]=newConfig.listStyle[key]||initialConfig.listStyle[key]
    })
    Object.keys({...initialConfig.bannerSize,...newConfig.bannerSize}).map(key=>{
        bannerSize[key]=newConfig.bannerSize[key]||initialConfig.bannerSize[key]
    })
    Object.keys({...initialConfig.productName,...newConfig.productName}).map(key=>{
        productName[key]=newConfig.productName[key]||initialConfig.productName[key]
    })

    config = {colors, buttons, socials, mobMenu, h, p, banners, tabs, link, catPromo, skuPromo, badge, tagLine, menu, subMenu, listStyle, bannerSize, productName};
}

//SET LOGO
function previewFile() {
    var preview = document.getElementById('logo');
    var file    = document.getElementById('logo-btn').files[0];
    var reader  = new FileReader();
    
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "no file";
    }
}

//SAVE JSON
function generateJson() {
    config = JSON.stringify(config);
    download(config, 'style-guide-config.json', 'application/json');
}
function download(text, name, type) {
    var a = document.getElementById("json-save");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
}

//GENERATE SNAP-SHOT
function generateSnapShot() {
    var canvas = document.getElementById("style-guide");
    html2canvas(canvas).then(canvas => {
        // document.body.appendChild(canvas)
        document.getElementById("canvas").appendChild(canvas);
        window.location.href = '#canvas';
        document.getElementById("message").style.display = "block";
    });
}

//SHOW CONTENT BUTTONS
function contentDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//KEY EVENTS
window.addEventListener("keyup", (e) => {
    var key = e.which || e.keyCode;
    if (key === 13) {
        generateStyleGuide();
    }
    if (key === 35) {
        generateSnapShot();
    }
});
