'use strict';

var React = require('react');
var cn = require('classnames');
var Select = require('react-select');
var reactRouterDom = require('react-router-dom');
var formik = require('formik');
var reactDropzone = require('react-dropzone');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$V = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.title {\n  line-height: 20px;\n}\n.title h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.title_size_10 {\n  font: normal 400 10px e_Ukraine_Regular, sans-serif;\n}\n.title_size_12 {\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.title_size_14 {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n}\n.title_size_16 {\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.title_size_20 {\n  font: normal 400 20px e_Ukraine_Regular, sans-serif;\n}\n.title_size_24 {\n  font: normal 400 24px e_Ukraine_Regular, sans-serif;\n}\n.title_size_32 {\n  font: normal 400 32px e_Ukraine_Regular, sans-serif;\n}\n.title_size_36 {\n  font: normal 400 36px e_Ukraine_Regular, sans-serif;\n}\n.title_size_48 {\n  font: normal 400 48px e_Ukraine_Regular, sans-serif;\n}\n.title_weight_700 {\n  font-weight: 700;\n}";
styleInject(css_248z$V);

var Title = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 16 : _b, _c = _a.weight, weight = _c === void 0 ? 400 : _c, _d = _a.className, className = _d === void 0 ? "" : _d, children = _a.children;
    return (React.createElement("h4", { className: cn("title", className, "title_size_".concat(size), "title_weight_".concat(weight)), "data-testid": "title" }, children));
};

var css_248z$U = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.expand h1 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.expand.expand_last {\n  border-bottom: 2px solid #000000;\n}\n.expand .expand__header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 44px 100px 44px 0;\n  font: normal 400 24px e_Ukraine_Regular, sans-serif;\n  line-height: 32px;\n  letter-spacing: -0.02em;\n  color: #000000;\n  transition: padding 0.4s, background 0.4s;\n  cursor: pointer;\n}\n.expand .expand__header:hover:not(.expand_active) {\n  padding-left: 35px;\n  background: #000000;\n  color: #ffffff;\n}\n.expand .expand__header:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -12px;\n  right: 3px;\n  width: 24px;\n  height: 24px;\n  transition: 0.2s ease-in-out;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(../../assets/images/icons/plus.svg);\n}\n.expand .expand__header:hover:not(.expand_active):before {\n  right: 35px;\n  background-image: url(../../assets/images/icons/plus-white.svg);\n}\n.expand .expand__header.expand_active:before {\n  background-image: url(../../assets/images/icons/minus.svg);\n}\n.expand .expand__header:not(.expand_active) + .expand__content {\n  display: none;\n}\n.expand .expand__content {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n  padding-bottom: 44px;\n  pointer-events: none;\n  max-width: 875px;\n}\n\n@media (max-width: 991px) {\n  .expand .expand__header {\n    font: normal 400 16px e_Ukraine_Regular, sans-serif;\n    line-height: 28px;\n    padding: 15px 25px 15px 0;\n    min-height: auto;\n  }\n  .expand .expand__header:hover:not(.expand_active) {\n    padding-left: 10px;\n  }\n  .expand .expand__header:hover:not(.expand_active):before {\n    right: 3px;\n  }\n}";
styleInject(css_248z$U);

var Expand = function (_a) {
    var _b, _c;
    var children = _a.children, title = _a.title, _d = _a.open, open = _d === void 0 ? false : _d, _e = _a.isLast, isLast = _e === void 0 ? false : _e, titleClassName = _a.titleClassName;
    var _f = React.useState(open), isOpen = _f[0], setOpen = _f[1];
    var handleToggle = function () {
        setOpen(function (prevState) { return !prevState; });
    };
    return (React.createElement("section", { className: cn("expand", (_b = {},
            _b["expand_last"] = isLast,
            _b)) },
        React.createElement("h2", { className: cn("expand__header", (_c = {},
                _c["expand_active"] = isOpen,
                _c), titleClassName), onClick: handleToggle }, title),
        React.createElement("p", { className: cn("expand__content") }, children)));
};

var css_248z$T = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.status {\n  display: none;\n  height: 18px;\n  padding: 2px 4px;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  color: #ffffff;\n  text-transform: uppercase;\n  word-break: keep-all;\n}\n.status h3 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.status_received {\n  display: inline-block;\n  background: #19be6f;\n}\n.status_canceled {\n  display: inline-block;\n  background: #f44336;\n}\n.status_ordered {\n  display: inline-block;\n  background: #ffd600;\n  color: #000000;\n}\n.status_draft {\n  display: inline-block;\n  color: #000000;\n  background: #dadada;\n}\n.status_annul {\n  display: inline-block;\n  background: #464849;\n}\n.status_passed {\n  display: inline-block;\n  color: #000000;\n  background: #badaec;\n}\n.status_not-passed {\n  display: inline-block;\n  color: #000000;\n  background: #feeceb;\n}";
styleInject(css_248z$T);

var Status = function (_a) {
    var _b;
    var type = _a.type, _c = _a.className, className = _c === void 0 ? "" : _c, children = _a.children;
    return (React.createElement("h3", { className: cn("status", className, (_b = {},
            _b["status_received"] = type === "RECEIVED",
            _b["status_canceled"] = type === "CANCELED",
            _b["status_ordered"] = type === "ORDERED",
            _b["status_annul"] = type === "ANNUL",
            _b["status_draft"] = type === "DRAFT",
            _b["status_passed"] = type === "PASSED",
            _b["status_not-passed"] = type === "NOT-PASSED",
            _b)), "data-testid": "status" }, children));
};

var css_248z$S = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.select-container {\n  cursor: pointer;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.select-container .select__menu-portal {\n  font: normal 400 10px e_Ukraine_Regular, sans-serif;\n}\n.select-container .select__control {\n  border: none;\n  border-radius: 0;\n  border-bottom: 2px solid #000000;\n  box-shadow: none;\n  max-height: 31px;\n  min-height: 0;\n  padding-bottom: 8px;\n  background: transparent;\n  font: inherit;\n}\n.select-container .select__control:hover {\n  border-color: #000000;\n}\n.select-container .select__control .select__value-container {\n  padding: 0;\n}\n.select-container .select__control .select__value-container .select__input-container {\n  margin: 0;\n  padding: 0;\n}\n.select-container .select__control--menu-is-open .select__indicators .select__dropdown-indicator {\n  transform: rotateX(180deg);\n  color: #000000;\n}\n.select-container .select__indicators .select__indicator-separator {\n  display: none;\n}\n.select-container .select__indicators .select__dropdown-indicator {\n  padding: 0;\n  color: #000000;\n}";
styleInject(css_248z$S);

var SelectInput = function (_a) {
    var name = _a.name, options = _a.options, _b = _a.placeholder, placeholder = _b === void 0 ? "" : _b, onChange = _a.onChange, onBlur = _a.onBlur, className = _a.className, styles = _a.styles;
    return (React.createElement(Select, { options: options, className: cn("select-container", className), classNamePrefix: "select", placeholder: placeholder, name: name, onChange: onChange, onBlur: onBlur, styles: styles, menuPortalTarget: document.body }));
};

var css_248z$R = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.navigation {\n  display: flex;\n  flex-direction: column;\n}\n.navigation a {\n  text-decoration: none;\n}\n.navigation a:active {\n  color: inherit;\n}\n.navigation a:visited {\n  color: inherit;\n}\n.navigation .navigation__tabs-wrapper .navigation__tabs {\n  display: flex;\n  gap: 50px;\n  list-style: none;\n}\n.navigation .navigation__tabs-wrapper .navigation__tabs .navigation__tab {\n  white-space: nowrap;\n  min-width: -moz-max-content;\n  min-width: max-content;\n  padding-bottom: 10px;\n  color: #000000;\n}\n.navigation .navigation__tabs-wrapper .navigation__tabs .navigation__tab_active {\n  border-bottom: 2px solid #000000;\n}\n\n@media (max-width: 1303px) {\n  .navigation {\n    padding: 0 16px;\n  }\n  .navigation .navigation__tabs-wrapper {\n    max-width: calc(100vw - 32px);\n  }\n  .navigation .navigation__tabs-wrapper .navigation__tabs .navigation__tab {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$R);

var Navigation = function (_a) {
    var navLinks = _a.navLinks, className = _a.className;
    var linkStyles = function (isActive, additionalStyles) {
        var _a;
        return cn("navigation__tab", (_a = {}, _a["navigation__tab_active"] = isActive, _a), additionalStyles);
    };
    return (React.createElement("div", { className: cn("navigation", className) },
        React.createElement("nav", { className: "navigation__tabs-wrapper", role: "navigation" },
            React.createElement("menu", { className: "navigation__tabs" }, navLinks.map(function (_a) {
                var to = _a.to, text = _a.text, customContent = _a.customContent, customStyles = _a.customStyles;
                return (React.createElement(reactRouterDom.NavLink, { to: to, key: to, className: function (_a) {
                        var isActive = _a.isActive;
                        return linkStyles(isActive, customStyles);
                    } }, customContent || text));
            })))));
};

var img$P = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_936)'%3e %3cline x1='19.3638' y1='6.63679' x2='6.63592' y2='19.3647' stroke='black' stroke-width='2'/%3e %3cline x1='6.63582' y1='6.63664' x2='19.3637' y2='19.3646' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_936'%3e %3crect width='18' height='18' fill='white' transform='translate(13 0.272461) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$O = "data:image/svg+xml,%3csvg width='18' height='26' viewBox='0 0 18 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M15.5188 11.8141C15.3208 11.6161 14.8985 11.3398 14.4009 11.0673L12.9173 9.51461L11.2769 11.0673H10.8267L8.87886 8.24609C7.8083 8.25386 6.94037 9.128 6.94814 10.1986L4.18752 8.55895C3.55327 8.84154 3.10921 9.47502 3.10921 10.2149V10.9601L0.00390625 14.1958L0.0163273 15.8921L7.76716 24.2213C7.76716 24.2213 15.9325 12.3529 15.952 12.3761C15.8518 12.203 15.5537 11.8312 15.5188 11.8141Z' fill='%23EF9645'/%3e %3cpath d='M14.4024 1.56274C14.4024 0.703351 13.699 0 12.8396 0C11.9803 0 11.2769 0.703351 11.2769 1.56274V11.0688H14.4016V1.56274H14.4024ZM10.8274 11.0681V9.48126C10.8212 8.62497 10.1217 7.9356 9.26544 7.94181C8.40915 7.94802 7.71978 8.64749 7.72599 9.50377L7.73531 11.0688H10.8274V11.0681ZM1.48744 9.4735H1.61786C2.43999 9.4735 3.1053 10.1396 3.1053 10.9617V14.1959C3.1053 15.018 2.43999 15.6841 1.61786 15.6841H1.48744C0.665311 15.6841 0 15.018 0 14.1959V10.9617C0 10.1396 0.665311 9.4735 1.48744 9.4735ZM6.85806 11.7714L6.81458 11.8196C6.4466 12.2302 6.2106 12.7597 6.2106 13.3551C6.2106 13.404 6.22069 13.4506 6.22458 13.4987C6.25873 14.0251 6.46368 14.5018 6.78974 14.8759C6.73462 14.9761 6.6632 15.0646 6.58867 15.15C6.30454 15.4737 5.89774 15.6841 5.43428 15.6841C4.57721 15.6841 3.88163 14.9885 3.88163 14.1314V9.4735C3.88163 9.13114 3.99575 8.8175 4.18362 8.56054C4.4662 8.1747 4.9188 7.92085 5.43428 7.92085C6.29134 7.92085 6.98693 8.61643 6.98693 9.4735V11.6301C6.93957 11.6728 6.90231 11.7256 6.85806 11.7714Z' fill='%23FFDC5D'/%3e %3cpath d='M1.59968 16.4626C2.39464 16.4626 3.09411 16.0543 3.50168 15.4363C3.59716 15.5784 3.71206 15.7049 3.83627 15.8222C4.75622 16.6878 6.19164 16.6327 7.07122 15.7554C7.18922 15.6374 7.30645 15.5186 7.3965 15.3766L7.39417 15.3742C7.55021 15.4635 7.76215 15.6863 8.53848 15.6863H10.508C10.2208 15.9029 9.95837 16.17 9.71305 16.4626C8.75973 17.6015 8.15031 19.2621 8.15031 21.1206C8.15031 21.3349 8.32421 21.5088 8.53848 21.5088C8.75274 21.5088 8.92664 21.3349 8.92664 21.1206C8.92664 19.1425 9.66881 17.4136 10.772 16.4626C11.3402 15.9728 12.0017 15.6863 12.7112 15.6863C13.2647 15.7476 13.3688 14.91 12.8083 14.91H8.53848C7.68141 14.91 6.98582 14.2144 6.98582 13.3573C6.98582 12.5003 7.68141 11.8047 8.53848 11.8047H14.7491C15.4152 11.8047 16.0378 12.2674 16.2342 12.9032L17.0781 15.6863C17.158 15.9464 17.4499 17.1388 17.3971 17.3872C17.3971 21.1206 13.7515 25.0022 9.3148 25.0022C4.23996 25.0022 0.120004 20.9413 0.00976562 15.8928L0.0206341 15.9006C0.420442 16.246 0.933592 16.4626 1.50342 16.4626H1.59968Z' fill='%23FFDC5D'/%3e%3c/svg%3e";

var css_248z$Q = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.notification {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 40px 50px 40px 20px;\n  margin-bottom: 40px;\n  max-width: 640px;\n  background-color: #fff4d7;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.notification h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.notification .notification-icon {\n  margin-right: 10px;\n}\n.notification_close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  cursor: pointer;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n@media (max-width: 992px) {\n  .notification {\n    padding: 40px 40px 40px 20px;\n  }\n}";
styleInject(css_248z$Q);

var Reminder = function (_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b, className = _a.className, _c = _a.withButton, withButton = _c === void 0 ? false : _c;
    return (React.createElement("div", { className: cn("notification", className) },
        React.createElement("img", { src: img$O, alt: "notification icon", className: "notification-icon" }),
        React.createElement("h4", null, text),
        withButton && (React.createElement("button", { className: "notification_close-btn" },
            React.createElement("img", { src: img$P, alt: "close" })))));
};

var img$N = "data:image/svg+xml,%3csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12 10.9998C13.6569 10.9998 15 9.65661 15 7.99976C15 6.3429 13.6569 4.99976 12 4.99976C10.3431 4.99976 9 6.3429 9 7.99976C9 9.65661 10.3431 10.9998 12 10.9998Z' fill='black'/%3e %3cpath d='M23.0091 7.18437C21.7687 5.26625 20.1595 3.63687 18.3558 2.47203C16.3603 1.18203 14.1572 0.5 11.985 0.5C9.99187 0.5 8.03203 1.06953 6.15984 2.19266C4.25062 3.33781 2.52093 5.01078 1.01859 7.16468C0.84899 7.40811 0.755584 7.69646 0.750243 7.99309C0.744901 8.28972 0.827864 8.58125 0.988591 8.83062C2.22656 10.768 3.81984 12.3997 5.59546 13.5486C7.59468 14.8437 9.74624 15.5 11.985 15.5C14.1745 15.5 16.3823 14.8236 18.3694 13.5444C20.1722 12.3833 21.7781 10.7478 23.0137 8.81374C23.1689 8.57017 23.251 8.28718 23.2501 7.99837C23.2493 7.70956 23.1656 7.42705 23.0091 7.18437ZM12.0009 12.5C11.1109 12.5 10.2409 12.2361 9.50087 11.7416C8.76085 11.2471 8.18407 10.5443 7.84347 9.72207C7.50288 8.8998 7.41377 7.995 7.5874 7.12209C7.76103 6.24918 8.18962 5.44735 8.81895 4.81802C9.44829 4.18868 10.2501 3.7601 11.123 3.58646C11.9959 3.41283 12.9007 3.50195 13.723 3.84254C14.5453 4.18313 15.2481 4.75991 15.7425 5.49993C16.237 6.23995 16.5009 7.10998 16.5009 8C16.4996 9.19305 16.025 10.3369 15.1814 11.1805C14.3378 12.0241 13.194 12.4986 12.0009 12.5Z' fill='black'/%3e%3c/svg%3e";

var img$M = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.03116 3.00107L3 4.03223L19.9689 21.0011L21.0001 19.97L4.03116 3.00107Z' fill='%238B9094'/%3e %3cpath d='M12.1562 9.00391L14.9955 11.8431C14.956 11.1029 14.6442 10.4034 14.1201 9.87929C13.5959 9.35514 12.8965 9.04335 12.1562 9.00391Z' fill='%238B9094'/%3e %3cpath d='M11.8431 14.9955L9.00391 12.1562C9.04335 12.8965 9.35514 13.5959 9.87929 14.1201C10.4034 14.6442 11.1029 14.956 11.8431 14.9955Z' fill='%238B9094'/%3e %3cpath d='M12 16.4992C11.3077 16.4992 10.6247 16.3395 10.0043 16.0325C9.38376 15.7255 8.84246 15.2795 8.42247 14.7292C8.00248 14.1788 7.71513 13.539 7.58278 12.8595C7.45043 12.18 7.47664 11.4791 7.65937 10.8114L4.42172 7.57324C3.09937 8.78449 1.83937 10.3651 0.75 11.9992C1.98844 14.0617 3.6825 16.1823 5.44687 17.3982C7.47093 18.7923 9.67171 19.4992 11.9887 19.4992C13.255 19.5001 14.5117 19.2812 15.7031 18.8523L13.1902 16.3398C12.8024 16.4459 12.4021 16.4995 12 16.4992Z' fill='%238B9094'/%3e %3cpath d='M11.9996 7.5C12.6919 7.49997 13.3749 7.65966 13.9953 7.96665C14.6158 8.27364 15.1571 8.71966 15.5771 9.27C15.9971 9.82034 16.2845 10.4602 16.4168 11.1397C16.5492 11.8192 16.523 12.5201 16.3402 13.1878L19.6524 16.5C21.0188 15.2695 22.2807 13.6144 23.2496 12C22.013 9.96422 20.3012 7.84875 18.5068 6.61781C16.4574 5.2125 14.2641 4.5 11.9884 4.5C10.7361 4.5018 9.49429 4.72869 8.32227 5.16984L10.8118 7.65937C11.1988 7.55344 11.5983 7.49984 11.9996 7.5Z' fill='%238B9094'/%3e%3c/svg%3e";

var css_248z$P = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.form-field-wrapper {\n  position: relative;\n  width: 100%;\n  height: -moz-max-content;\n  height: max-content;\n  font: normal 400 16px e_Ukraine_Regular, sans-serif;\n}\n.form-field-wrapper .form-field {\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid #000000;\n  padding-bottom: 8px;\n  background: transparent;\n  font: inherit;\n}\n.form-field-wrapper .form-field:focus {\n  outline: none;\n  -o-border-image: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%) 1;\n     border-image: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%) 1;\n}\n.form-field-wrapper .form-field:not(:-moz-placeholder-shown) ~ label {\n  top: -22px;\n  font-size: 12px;\n}\n.form-field-wrapper .form-field:focus ~ label, .form-field-wrapper .form-field:not(:placeholder-shown) ~ label {\n  top: -22px;\n  font-size: 12px;\n}\n.form-field-wrapper .form-field_no-borders {\n  border-bottom: 2px solid transparent !important;\n}\n.form-field-wrapper .form-field_no-borders:focus {\n  outline: none;\n  -o-border-image: none;\n     border-image: none;\n}\n.form-field-wrapper .form-field_error {\n  border-bottom: 2px solid #f44336;\n}\n.form-field-wrapper .form-field_error:focus {\n  outline: none;\n  -o-border-image: none;\n     border-image: none;\n}\n.form-field-wrapper .form-field_error ~ label {\n  color: #f44336;\n}\n.form-field-wrapper.password-input {\n  width: 100%;\n}\n.form-field-wrapper.password-input .password-input__eye {\n  position: absolute;\n  right: 0;\n  bottom: 8px;\n  width: 22px;\n  height: 24px;\n}\n.form-field-wrapper .form-field-label {\n  position: absolute;\n  top: 1px;\n  left: 0;\n  transition: all 0.3s ease;\n  pointer-events: none;\n  font-size: 16px;\n  line-height: 21px;\n  color: #8b9094;\n}\n.form-field-wrapper input:-webkit-autofill,\n.form-field-wrapper input:-webkit-autofill:focus {\n  -webkit-transition: background-color 600000s 0s, color 600000s 0s;\n  transition: background-color 600000s 0s, color 600000s 0s;\n}\n.form-field-wrapper .form-field-error-message {\n  position: absolute;\n  bottom: -15px;\n  color: #f44336;\n  font-size: 10px;\n  line-height: 14px;\n}";
styleInject(css_248z$P);

// @ts-nocheck
var FormField = function (_a) {
    var name = _a.name, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.errors, errors = _d === void 0 ? undefined : _d, _e = _a.touched, touched = _e === void 0 ? undefined : _e, onBlur = _a.onBlur, noBorders = _a.noBorders, errComponent = _a.errComponent, errClassName = _a.errClassName;
    var _f = React.useState(false), shown = _f[0], setShown = _f[1];
    var handleEyeClick = function () {
        setShown(function (prevState) { return !prevState; });
    };
    switch (type) {
        case "password":
            return (React.createElement("div", { className: cn("form-field-wrapper", "password-input", className), "data-testid": "input" },
                React.createElement(formik.Field, { type: shown ? "password" : "text", name: name, placeholder: " ", className: cn("form-field", {
                        "form-field_error": errors && touched && errors[name] && touched[name]
                    }, className), onBlur: onBlur }),
                React.createElement("img", { src: !shown ? img$N : img$M, alt: "eye", className: "password-input__eye", onClick: handleEyeClick }),
                React.createElement("label", { className: "form-field-label", htmlFor: name }, placeholder),
                React.createElement(formik.ErrorMessage, { name: name, component: errComponent || "div", className: cn("form-field-error-message", errClassName) })));
        default:
            return (React.createElement("div", { className: cn("form-field-wrapper", className), "data-testid": "input" },
                React.createElement(formik.Field, { type: type, name: name, placeholder: " ", className: cn("form-field", {
                        "form-field_error": errors && touched && errors[name] && touched[name],
                        "form-field_no-borders": noBorders
                    }), onBlur: onBlur }),
                React.createElement("label", { className: "form-field-label", htmlFor: name }, placeholder),
                React.createElement(formik.ErrorMessage, { name: name, component: errComponent || "div", className: cn("form-field-error-message", errClassName) })));
    }
};

var css_248z$O = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.radio-btn {\n  position: relative;\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  cursor: pointer;\n}\n.radio-btn .radio-btn__input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  tab-index: -1;\n}\n.radio-btn .radio-btn__indicator {\n  position: relative;\n  z-index: 1;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #000000;\n  border-radius: 50%;\n  background: #ffffff;\n}\n.radio-btn .radio-btn__indicator:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #000000;\n  background-size: cover;\n}\n.radio-btn .radio-btn__info {\n  display: flex;\n  flex-direction: column;\n}\n.radio-btn .radio-btn__info .radio-btn__info-title,\n.radio-btn .radio-btn__info .radio-btn__info-body,\n.radio-btn .radio-btn__info .radio-btn__info-footer,\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  z-index: 1;\n}\n.radio-btn .radio-btn__info .radio-btn__info-body,\n.radio-btn .radio-btn__info .radio-btn__info-footer,\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  margin-top: 11px;\n  font-size: 12px;\n  line-height: 16px;\n}\n.radio-btn .radio-btn__info .radio-btn__info-title {\n  font-size: 16px;\n  line-height: 23px;\n  color: #000000;\n}\n.radio-btn .radio-btn__info .radio-btn__info-body {\n  color: #d0d6db;\n}\n.radio-btn .radio-btn__info .radio-btn__info-footer {\n  color: #000000;\n}\n.radio-btn .radio-btn__info .radio-btn__info-warning {\n  color: #f6695e;\n}\n.radio-btn_active .radio-btn__indicator {\n  border: 2px solid #000000;\n}\n.radio-btn_active .radio-btn__indicator:hover {\n  border: 2px solid #000000;\n}\n.radio-btn_active .radio-btn__indicator:after {\n  opacity: 1;\n}\n.radio-btn_active .radio-btn__info:after {\n  display: inline-block;\n}\n.radio-btn_disabled {\n  pointer-events: none;\n  opacity: 0.4;\n}\n\n@media (991px) {\n  .radio-btn .radio-btn__info .radio-btn__info-title {\n    font-size: 14px;\n    line-height: 23px;\n    color: #000000;\n  }\n}";
styleInject(css_248z$O);

var RadioButton = function (_a) {
    var _b;
    var name = _a.name, body = _a.body, value = _a.value, title = _a.title, footer = _a.footer, checked = _a.checked, warning = _a.warning, onClick = _a.onClick, disabled = _a.disabled, className = _a.className;
    return (React.createElement("label", { className: cn("radio-btn", className, (_b = {},
            _b["radio-btn_active"] = checked,
            _b["radio-btn_disabled"] = disabled,
            _b)), onClick: onClick },
        React.createElement("input", { className: "radio-btn__input", type: "radio", name: name, value: value, checked: checked, disabled: disabled, onChange: function () { } }),
        React.createElement("span", { className: "radio-btn__indicator" }),
        React.createElement("div", { className: "radio-btn__info" },
            title && React.createElement("p", { className: "radio-btn__info-title" }, title),
            body && React.createElement("p", { className: "radio-btn__info-body" }, body),
            footer && React.createElement("p", { className: "radio-btn__info-footer" }, footer),
            warning && (React.createElement("p", { className: "radio-btn__info-warning" }, warning)))));
};

var css_248z$N = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.common-button {\n  display: flex;\n  align-items: center;\n  height: -moz-max-content;\n  height: max-content;\n  border: none;\n  border-radius: 30px;\n  padding: 14px 40px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n  text-align: center;\n  cursor: pointer;\n}\n.common-button_image-container {\n  display: flex;\n  align-items: center;\n  width: 18px;\n  height: 14px;\n  margin-right: 15px;\n}\n.common-button_image {\n  width: 100%;\n  height: 100%;\n}\n.common-button.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}\n.common-button.common-button_filled {\n  padding: 16px 42px;\n  background: #000000;\n  color: #ffffff;\n}\n.common-button.common-button_filled:hover {\n  background: linear-gradient(68.94deg, #c3aab2 -4.77%, #99eecc 46.72%, #80c0c8 90.23%, #4b8bfa 134.46%);\n  color: #000000;\n}\n.common-button.common-button_filled.common-button_disabled {\n  color: #ffffff;\n  background-color: #d0d6db;\n  pointer-events: none;\n}\n.common-button.common-button_filled.common-button_large {\n  padding: 21px 60px;\n  font: normal 700 16px e_Ukraine_Bold, sans-serif;\n}\n.common-button.common-button_filled.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_filled.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}\n.common-button.common-button_outlined {\n  color: #000000;\n  background-color: #ffffff;\n  border: 2px solid #000000;\n}\n.common-button.common-button_outlined:hover {\n  background: linear-gradient(to left, #ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n  border-radius: 30px;\n  border: 2px solid transparent;\n}\n.common-button.common-button_outlined.common-button_disabled {\n  color: #d0d6db;\n  border-color: #d0d6db;\n  pointer-events: none;\n}\n.common-button.common-button_outlined.common-button_dashed {\n  border: 1.5px dashed #000000;\n}\n.common-button.common-button_outlined.common-button_dashed:hover {\n  background: linear-gradient(to left, #ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n  border-radius: 30px;\n  border: 1.5px dashed transparent;\n}\n.common-button.common-button_outlined.common-button_large {\n  padding: 19px 59px;\n  font: normal 700 16px e_Ukraine_Bold, sans-serif;\n}\n.common-button.common-button_outlined.common-button_round {\n  width: 48px;\n  height: 48px;\n  padding: 15px;\n  border-radius: 50%;\n}\n.common-button.common-button_outlined.common-button_round .common-button_image-container {\n  margin-right: 0px;\n}";
styleInject(css_248z$N);

var CommonButton = function (_a) {
    var _b;
    var label = _a.label, outlined = _a.outlined, disabled = _a.disabled, dashed = _a.dashed, className = _a.className, large = _a.large, image = _a.image, round = _a.round, onClick = _a.onClick;
    return (React.createElement("button", { className: cn("common-button", className, (_b = {},
            _b["common-button_outlined"] = outlined,
            _b["common-button_dashed"] = dashed,
            _b["common-button_filled"] = !outlined,
            _b["common-button_disabled"] = disabled,
            _b["common-button_large"] = large,
            _b["common-button_round"] = round,
            _b)), onClick: onClick },
        (image || round) && (React.createElement("div", { className: "common-button_image-container" },
            React.createElement("img", { src: image, className: "common-button_image", alt: "button icon" }))),
        !round && label));
};

var img$L = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_22668)'%3e %3cpath d='M1 9L6 16L17 1' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_22668'%3e %3crect width='18' height='18' fill='white' transform='translate(0 18) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$K = "data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_22668)'%3e %3cpath d='M1 9L6 16L17 1' stroke='white' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_22668'%3e %3crect width='18' height='18' fill='white' transform='translate(0 18) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var img$J = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3953_936)'%3e %3cline x1='19.3638' y1='6.63679' x2='6.63592' y2='19.3647' stroke='white' stroke-width='2'/%3e %3cline x1='6.63582' y1='6.63664' x2='19.3637' y2='19.3646' stroke='white' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3953_936'%3e %3crect width='18' height='18' fill='white' transform='translate(13 0.272461) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$M = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.correct-button {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  height: 48px;\n  border: 1px solid black;\n  border-radius: 30px;\n  padding: 14px 40px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n  cursor: pointer;\n  background-color: #ecf8ed;\n}\n.correct-button:hover {\n  background-color: #c6e9ca;\n}\n.correct-button:focus {\n  background-color: green;\n}\n.correct-button_image-container {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n.correct-button_image {\n  width: 100%;\n  height: 100%;\n}\n.correct-button.correct-button_cancel {\n  background-color: #feeceb;\n}\n.correct-button.correct-button_cancel:hover {\n  background-color: #fcc7c3;\n}\n.correct-button.correct-button_cancel.correct-button_on-hold {\n  background-color: #f44336;\n  color: #ffffff;\n  border: none;\n}\n.correct-button.correct-button_on-hold {\n  background-color: #42b64e;\n  color: #ffffff;\n  border: none;\n}\n.correct-button.correct-button_round {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  padding: 0px;\n  border-radius: 50%;\n}\n.correct-button.correct-button_round .correct-button_image-container {\n  margin-right: 0px;\n}";
styleInject(css_248z$M);

var AnswerButton = function (_a) {
    var _b;
    var label = _a.label, cancel = _a.cancel, className = _a.className, round = _a.round, hold = _a.hold, onClick = _a.onClick;
    return (React.createElement("button", { className: cn("correct-button", className, (_b = {},
            _b["correct-button_cancel"] = cancel,
            _b["correct-button_round"] = round,
            _b["correct-button_on-hold"] = hold,
            _b)), onClick: onClick },
        React.createElement("div", { className: "correct-button_image-container" },
            React.createElement("img", { src: cancel
                    ? !hold
                        ? img$P
                        : img$J
                    : !hold
                        ? img$L
                        : img$K, className: "correct-button_image", alt: "button icon" })),
        !round && label));
};

var css_248z$L = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 30px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ffffff;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 22px;\n  width: 22px;\n  left: 4px;\n  top: 3px;\n  background-color: #8b9094;\n  transition: 0.4s;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n  border: 1px solid #000000;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\ninput:checked + .slider.round:before {\n  background-color: #35923e;\n}";
styleInject(css_248z$L);

var SwitchButton = function (_a) {
    var active = _a.active, onChange = _a.onChange, className = _a.className;
    return (React.createElement("label", { className: cn("switch", className) },
        React.createElement("input", { type: "checkbox", checked: active, onClick: onChange }),
        React.createElement("span", { className: "slider round" })));
};

var css_248z$K = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.bar-wrapper {\n  display: flex;\n  justify-content: center;\n}\n.bar-wrapper .circle-progress-bar {\n  position: relative;\n  display: block;\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n}\n.bar-wrapper .circle-progress-bar:after {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  content: attr(data-pct) \"%\";\n  border-radius: 100%;\n  font: normal 400 12px e_Ukraine_Regular, sans-serif;\n}\n.bar-wrapper .circle-progress-bar .circle-progress-bar__base {\n  stroke: #d0d6db;\n  stroke-width: 5px;\n  stroke-linecap: round;\n}\n.bar-wrapper .circle-progress-bar .circle-progress-bar__bar {\n  stroke: #42b64e;\n  stroke-width: 5px;\n  stroke-linecap: round;\n  transform-origin: center center;\n  transform: rotateY(180deg) rotateZ(-90deg);\n}";
styleInject(css_248z$K);

var RADIUS = 27;
var DASHES = 170;
var CircleProgressBar = function (_a) {
    var progress = _a.progress, className = _a.className;
    var _b = React.useState(0), percent = _b[0], setPercent = _b[1];
    var circumference = Math.PI * (RADIUS * 2);
    React.useEffect(function () {
        var p = progress;
        if (progress > 100)
            p = 100;
        if (progress < 0)
            p = 0;
        var percentToFill = ((100 - p) / 100) * circumference;
        setPercent(Math.round(percentToFill));
    }, [progress, circumference]);
    return (React.createElement("div", { className: cn("bar-wrapper", className) },
        React.createElement("div", { className: "circle-progress-bar", "data-pct": progress },
            React.createElement("svg", { className: "circle-progress-bar__svg", width: "60", height: "60" },
                React.createElement("circle", { className: "circle-progress-bar__base", r: RADIUS, cx: "30", cy: "30", fill: "transparent", strokeDasharray: DASHES, strokeDashoffset: "0" }),
                React.createElement("circle", { className: "circle-progress-bar__bar", r: RADIUS, cx: "30", cy: "30", fill: "transparent", strokeDasharray: DASHES, strokeDashoffset: percent })))));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var css_248z$J = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.simple-file-loader {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 28px 110px;\n  margin-top: 35px;\n  margin-bottom: 35px;\n  border: 1px dashed #5c5f61;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.simple-file-loader h4 {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  word-break: keep-all;\n  word-wrap: break-word;\n  line-height: 130%;\n  font: inherit;\n  font-family: e_Ukraine_Regular, sans-serif;\n}\n.simple-file-loader .simple-file-loader__title {\n  margin-bottom: 10px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n}\n.simple-file-loader .simple-file-loader__formats {\n  font: normal 400 14px e_Ukraine_Regular, sans-serif;\n  color: #5c5f61;\n}\n.simple-file-loader .simple-file-loader__input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.simple-file-loader_uploaded {\n  padding: 28px 40px;\n  background-color: #e7eef3;\n}\n.simple-file-loader_uploaded .simple-file-loader__upload-formats {\n  color: black;\n}\n.simple-file-loader_uploaded .simple-file-loader__upload-title {\n  margin-bottom: 20px;\n  font: normal 700 14px e_Ukraine_Bold, sans-serif;\n}\n.simple-file-loader:hover {\n  border-color: #ffffff;\n  background: linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n}\n\n@media (max-width: 991px) {\n  .simple-file-loader {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 20px 16px;\n  }\n  .simple-file-loader .simple-file-loader__title {\n    margin-bottom: 15px;\n    font: normal 700 12px e_Ukraine_Bold, sans-serif;\n  }\n  .simple-file-loader .simple-file-loader__formats {\n    font: normal 400 12px e_Ukraine_Regular, sans-serif;\n  }\n}";
styleInject(css_248z$J);

var SimpleUploadFile = function (_a) {
    var className = _a.className, text = _a.text, uploadedText = _a.uploadedText;
    var _b = reactDropzone.useDropzone(), acceptedFiles = _b.acceptedFiles, getRootProps = _b.getRootProps, getInputProps = _b.getInputProps;
    var files = acceptedFiles.map(function (file) { return (React.createElement("li", { key: file.path },
        file.path,
        " - ",
        file.size,
        " bytes")); });
    return (React.createElement("div", __assign({}, getRootProps({ className: "dropzone" }), { className: cn("simple-file-loader", files.length && "simple-file-loader_uploaded", className) }),
        React.createElement("h4", { className: "simple-file-loader__title" }, files.length
            ? "".concat(uploadedText || "Файд ключа:", " ").concat(files[0].props.children[0])
            : text ||
                "Перетягніть сюди файл ключа або оберіть його на своєму носієві"),
        React.createElement("h4", { className: "simple-file-loader__formats" }, files.length
            ? "Якщо хочете перезавантажите, натиснить на це поле або перетяніть сюди файл"
            : "Підтримуються формати: .jks, .pfx, .pk8, .zs2, .dat"),
        React.createElement("input", __assign({}, getInputProps()))));
};

var img$I = "data:image/svg+xml,%3csvg width='25' height='26' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_3559_7800)'%3e %3cpath d='M6 13.4215L12 19.7744L18 13.4215' stroke='black' stroke-width='2'/%3e %3cpath d='M5 20.3916L12 20.3916L19 20.3916' stroke='black' stroke-width='2'/%3e %3cpath d='M12 6.39111L12 19.2441' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_3559_7800'%3e %3crect width='18' height='14' fill='white' transform='translate(5 21.8916) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$I = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}\n.load-file {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  border-radius: 10px;\n  border: 2px dashed black;\n  cursor: pointer;\n}\n.load-file:hover {\n  border-color: white;\n  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #c3aab2, #99eecc, #80c0c8, #4b8bfa) border-box;\n}\n.load-file .uplaoded-img {\n  max-height: calc(100% - 1px);\n  max-width: calc(100% - 0.5px);\n  margin: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.load-file .load-file__input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.load-file .upload-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.load-file .load-file__content-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 28px;\n  width: 160px;\n  height: 220px;\n}\n.load-file .load-file__content-wrapper .load-file__label {\n  font: inherit;\n  font-size: 14px;\n  text-align: center;\n  z-index: 1;\n}\n.load-file .load-file__content-wrapper .load-file__img {\n  width: 24px;\n  height: 30px;\n  z-index: 1;\n}\n.load-file .load-file__content-wrapper .load-file__background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 100%;\n  border: none;\n  background-color: transparent;\n  border-radius: 10px;\n}\n\n.uploaded-file-container {\n  position: relative;\n  width: 160px;\n  height: 220px;\n  border: 2px solid #d0d6db;\n  border-radius: 0px;\n}\n.uploaded-file-container:hover {\n  border: 2px solid #d0d6db;\n}";
styleInject(css_248z$I);

var VisualUploadFile = function (_a) {
    var _b;
    var title = _a.title, backgroundImg = _a.backgroundImg, className = _a.className;
    var _c = React.useState(null), selectedImage = _c[0], setSelectedImage = _c[1];
    return (React.createElement("div", { className: cn("load-file", (_b = {}, _b["uploaded-file-container"] = selectedImage, _b), className) },
        selectedImage && (React.createElement("div", { className: "upload-container" },
            React.createElement("img", { alt: "not fount", src: URL.createObjectURL(selectedImage), className: "uplaoded-img" }))),
        React.createElement("input", { id: "load-file", type: "file", className: "load-file__input", onChange: function (event) {
                var _a, _b;
                setSelectedImage(((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.files) && ((_b = event === null || event === void 0 ? void 0 : event.target) === null || _b === void 0 ? void 0 : _b.files[0]));
            } }),
        !selectedImage && (React.createElement("div", { className: "load-file__content-wrapper" },
            React.createElement("img", { src: img$I, alt: "download", className: "load-file__img" }),
            React.createElement("label", { htmlFor: "load-file", className: "load-file__label" }, title),
            backgroundImg && (React.createElement("img", { src: backgroundImg, alt: "", className: "load-file__background" }))))));
};

var img$H = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect x='0.144531' y='0.559082' width='24' height='24' rx='2' fill='%236ABD7C'/%3e %3cpath d='M5.04375 8.71531H7.66875V18.5591H5.04375V8.71531ZM4.94531 5.23718H7.76719V7.46843H4.94531V5.23718Z' fill='white'/%3e %3cpath d='M19.7109 5.43406V18.5591H17.3484L17.2172 17.1809C16.4297 18.2091 15.3688 18.7231 14.0344 18.7231C12.7656 18.7231 11.7484 18.2637 10.9828 17.345C10.2172 16.4262 9.83438 15.1903 9.83438 13.6372C9.83438 12.1059 10.2172 10.8809 10.9828 9.96218C11.7703 9.02156 12.7875 8.55124 14.0344 8.55124C15.2594 8.55124 16.2766 8.98874 17.0859 9.86374V5.43406H19.7109ZM14.8547 16.5575C15.5984 16.5575 16.1672 16.3059 16.5609 15.8028C16.9766 15.2778 17.1844 14.5559 17.1844 13.6372C17.1844 12.7184 16.9766 12.0075 16.5609 11.5044C16.1672 10.9794 15.5984 10.7169 14.8547 10.7169C14.1109 10.7169 13.5312 10.9794 13.1156 11.5044C12.7 12.0294 12.4922 12.7403 12.4922 13.6372C12.4922 14.5341 12.7 15.245 13.1156 15.77C13.5312 16.295 14.1109 16.5575 14.8547 16.5575Z' fill='white'/%3e%3c/svg%3e";

var css_248z$H = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$H);

var Id = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$H, alt: "id", className: className });
};

var img$G = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2212)'%3e %3cline x1='12.1445' y1='3.51343' x2='12.1445' y2='21.5134' stroke='black' stroke-width='2'/%3e %3cline x1='3.14453' y1='12.5134' x2='21.1445' y2='12.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2212'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$G = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$G);

var Add = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$G, alt: "add", className: className });
};

var img$F = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2228)'%3e %3cline x1='4.14453' y1='14.5591' x2='19.1445' y2='14.5591' stroke='black' stroke-width='2'/%3e %3cline x1='4.14453' y1='10.5591' x2='19.1445' y2='10.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M7.14453 5.78985C7.14453 5.78985 9.82263 4.55908 11.6445 4.55908C12.4819 4.55908 13.5 4.81905 14.356 5.10003C15.4667 5.46465 16.1445 6.53902 16.1445 7.70806V7.70806C16.1445 8.80191 15.5477 9.80861 14.5881 10.3336L9.03273 13.3724C7.86853 14.0092 7.14453 15.2452 7.14453 16.5722V16.5722C7.14453 18.1886 8.22575 19.624 9.78487 20.0505V20.0505C10.9907 20.3802 12.2717 20.3018 13.4282 19.8273L16.1445 18.7129' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2228'%3e %3crect width='15' height='20' fill='white' transform='translate(4.14453 2.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$F = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$F);

var Grn = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$F, alt: "UAH", className: className });
};

var img$E = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.1445 8.05908V5.55908H6.14453V15.5591H9.34453' stroke='black' stroke-width='2'/%3e %3crect x='10.1445' y='8.55908' width='8' height='10' stroke='black' stroke-width='2'/%3e %3crect x='10.1445' y='8.55908' width='8' height='10' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$E = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$E);

var Copy = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$E, alt: "copy", className: className });
};

var img$D = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2235)'%3e %3cpath d='M5.14453 7.55908L12.1445 13.5591L19.1445 7.55908' stroke='black' stroke-width='2'/%3e %3crect x='5.14453' y='7.55908' width='14' height='10' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2235'%3e %3crect width='16' height='12' fill='white' transform='translate(4.14453 6.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$D = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$D);

var Mail = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$D, alt: "mail", className: className });
};

var img$C = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12.1445' cy='12.5591' r='12' fill='%23D0D6DB'/%3e %3cpath d='M11.207 14.8716H12.7695V14.7466C12.7695 14.2153 13.1445 13.7778 14.082 13.0903C15.4883 12.0591 16.0508 11.1528 16.0508 9.90283C16.0508 7.87158 14.4883 6.52783 12.1758 6.52783C9.76953 6.52783 8.11328 8.02783 7.89453 10.3403L9.61328 10.6841C9.76953 9.12158 10.707 8.12158 12.1445 8.12158C13.3633 8.12158 14.1445 8.84033 14.1445 10.0278C14.1445 10.8091 13.832 11.2466 12.7383 12.1528C11.457 13.1841 11.1445 13.7153 11.207 14.8716ZM10.832 18.5591H13.2695V16.1216H10.832V18.5591Z' fill='white'/%3e%3c/svg%3e";

var css_248z$C = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$C);

var Help = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$C, alt: "help", className: className });
};

var img$B = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2223)'%3e %3cpath d='M8.14453 10.1243V8.55908C8.14453 6.34994 9.93539 4.55908 12.1445 4.55908V4.55908C14.3537 4.55908 16.1445 6.34994 16.1445 8.55908V12.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M6.14453 13.5591H18.1445V15.3369V17.5591V21.5591H6.14453V13.5591Z' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2223'%3e %3crect width='14' height='19' fill='white' transform='translate(5.14453 3.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$B = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$B);

var Lock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$B, alt: "lock", className: className });
};

var img$A = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2248)'%3e %3cline x1='12.3672' y1='5.51343' x2='12.3672' y2='19.5134' stroke='black' stroke-width='2'/%3e %3cline x1='5.14453' y1='12.2912' x2='19.1445' y2='12.2912' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2248'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 5.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$A = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$A);

var Plus = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$A, alt: "plus", className: className });
};

var img$z = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2214)'%3e %3cpath d='M9.14453 4.51343L5.14453 8.51343L9.14453 12.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M20.144 8.51343L4.79102 8.51343' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cg clip-path='url(%23clip1_20_2214)'%3e %3cpath d='M15.1445 20.5134L19.1445 16.5134L15.1445 12.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M4.1451 16.5134L19.498 16.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2214'%3e %3crect width='18' height='14' fill='white' transform='translate(2.14453 1.51343)'/%3e %3c/clipPath%3e %3cclipPath id='clip1_20_2214'%3e %3crect width='18' height='14' fill='white' transform='translate(22.1445 23.5134) rotate(-180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$z = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$z);

var Swap = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$z, alt: "swap", className: className });
};

var img$y = "data:image/svg+xml,%3csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='10.1445' cy='10.5591' r='10' fill='%23F44336'/%3e %3cline x1='10.1445' y1='12.5591' x2='10.1445' y2='4.55908' stroke='white' stroke-width='2'/%3e %3cline x1='10.1445' y1='16.5591' x2='10.1445' y2='14.5591' stroke='white' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$y = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$y);

var Alert = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$y, alt: "alert", className: className });
};

var img$x = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2225)'%3e %3cline x1='12.1445' y1='9.55908' x2='12.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e %3cline x1='15.1445' y1='13.5591' x2='11.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e %3crect x='6.14453' y='6.55908' width='12' height='12' rx='6' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2225'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$x = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$x);

var Clock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$x, alt: "clock", className: className });
};

var img$w = "data:image/svg+xml,%3csvg width='26' height='27' viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2246)'%3e %3cline x1='19.5079' y1='7.14946' x2='6.77996' y2='19.8774' stroke='black' stroke-width='2'/%3e %3cline x1='6.78133' y1='7.14946' x2='19.5092' y2='19.8774' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2246'%3e %3crect width='18' height='18' fill='white' transform='translate(13.1445 0.785492) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$w = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$w);

var Close = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$w, alt: "close", className: className });
};

var img$v = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2238)'%3e %3cpath d='M9.00168 17.6189L14.1445 12.3557L9.00168 7.09258' stroke='black' stroke-width='2'/%3e %3cpath d='M5.14453 12.3552L14.1445 12.3552' stroke='black' stroke-width='2'/%3e %3cpath d='M14.1445 4.51343L18.1445 4.51343L18.1445 20.5134L14.1445 20.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2238'%3e %3crect width='15' height='19' fill='white' transform='translate(20.1445 21.5134) rotate(180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$v = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$v);

var Enter = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$v, alt: "enter", className: className });
};

var img$u = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M5.64555 5.51348L19.6443 5.51348L12.1439 18.5135L12.1449 10.0134L5.64555 5.51348Z' stroke='black' stroke-width='2'/%3e %3cpath d='M11.6435 10.0134L19.6435 5.51341' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$u = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$u);

var Plane = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$u, alt: "plane", className: className });
};

var img$t = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2242)'%3e %3crect x='5.14453' y='8.55908' width='14' height='7' stroke='black' stroke-width='2'/%3e %3crect x='9.14453' y='5.55908' width='6' height='3' stroke='black' stroke-width='2'/%3e %3crect x='8.14453' y='14.5591' width='8' height='4' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2242'%3e %3crect width='16' height='15' fill='white' transform='translate(4.14453 4.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$t = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$t);

var Print = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$t, alt: "print", className: className });
};

var img$s = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M14.1942 3.92511L19.7777 7.14875L14.3792 16.4991L10.1497 17.3776L8.79572 13.2755L14.1942 3.92511Z' stroke='black' stroke-width='2'/%3e %3cline x1='16.0242' y1='7.09064' x2='12.2566' y2='13.6164' stroke='black' stroke-width='2'/%3e %3cline x1='3.14453' y1='21.0625' x2='15.1445' y2='21.0625' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$s = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$s);

var Pencil = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$s, alt: "pencil", className: className });
};

var img$r = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2244)'%3e %3ccircle cx='12.1445' cy='12.5591' r='12' fill='%238B9094'/%3e %3cpath d='M7.14453 18.5591C7.14453 18.5591 6.14453 18.5591 6.14453 17.5591C6.14453 16.5591 7.14453 13.5591 12.1445 13.5591C17.1445 13.5591 18.1445 16.5591 18.1445 17.5591C18.1445 18.5591 17.1445 18.5591 17.1445 18.5591H7.14453ZM12.1445 12.5591C12.9402 12.5591 13.7032 12.243 14.2659 11.6804C14.8285 11.1178 15.1445 10.3547 15.1445 9.55908C15.1445 8.76343 14.8285 8.00037 14.2659 7.43776C13.7032 6.87515 12.9402 6.55908 12.1445 6.55908C11.3489 6.55908 10.5858 6.87515 10.0232 7.43776C9.4606 8.00037 9.14453 8.76343 9.14453 9.55908C9.14453 10.3547 9.4606 11.1178 10.0232 11.6804C10.5858 12.243 11.3489 12.5591 12.1445 12.5591Z' fill='white'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2244'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$r = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$r);

var Person = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$r, alt: "person", className: className });
};

var img$q = "data:image/svg+xml,%3csvg width='26' height='27' viewBox='0 0 26 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='13.1445' cy='13.5591' r='9' fill='white' stroke='black' stroke-width='2'/%3e %3cg clip-path='url(%23clip0_20_2249)'%3e %3cline x1='19.2364' y1='6.92305' x2='6.50848' y2='19.651' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2249'%3e %3crect width='18' height='18' fill='white' transform='translate(12.873 0.559082) rotate(45)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$q = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$q);

var Cancel = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$q, alt: "cancel", className: className });
};

var img$p = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2247)'%3e %3cpath d='M23.9111 10.2089H22.9445V10.1591H12.1445V14.9591H18.9263C17.9369 17.7533 15.2783 19.7591 12.1445 19.7591C8.16833 19.7591 4.94453 16.5353 4.94453 12.5591C4.94453 8.58288 8.16833 5.35908 12.1445 5.35908C13.9799 5.35908 15.6497 6.05148 16.9211 7.18248L20.3153 3.78828C18.1721 1.79088 15.3053 0.559082 12.1445 0.559082C5.51753 0.559082 0.144531 5.93208 0.144531 12.5591C0.144531 19.1861 5.51753 24.5591 12.1445 24.5591C18.7715 24.5591 24.1445 19.1861 24.1445 12.5591C24.1445 11.7545 24.0617 10.9691 23.9111 10.2089Z' fill='%23FFC107'/%3e %3cpath d='M1.52734 6.97368L5.46994 9.86508C6.53674 7.22388 9.12034 5.35908 12.1437 5.35908C13.9791 5.35908 15.6489 6.05148 16.9203 7.18248L20.3145 3.78828C18.1713 1.79088 15.3045 0.559082 12.1437 0.559082C7.53454 0.559082 3.53734 3.16128 1.52734 6.97368Z' fill='%23FF3D00'/%3e %3cpath d='M12.1439 24.5589C15.2435 24.5589 18.0599 23.3727 20.1893 21.4437L16.4753 18.3009C15.2301 19.248 13.7084 19.7602 12.1439 19.7589C9.02274 19.7589 6.37254 17.7687 5.37414 14.9913L1.46094 18.0063C3.44694 21.8925 7.48014 24.5589 12.1439 24.5589Z' fill='%234CAF50'/%3e %3cpath d='M23.9111 10.2089H22.9445V10.1591H12.1445V14.9591H18.9263C18.4531 16.2889 17.6005 17.451 16.4741 18.3017L16.4759 18.3005L20.1899 21.4433C19.9271 21.6821 24.1445 18.5591 24.1445 12.5591C24.1445 11.7545 24.0617 10.9691 23.9111 10.2089Z' fill='%231976D2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2247'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$p = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$p);

var Google = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$p, alt: "google", className: className });
};

var img$o = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2231)'%3e %3cpath d='M18.1445 11.984L12.1445 5.63107L6.14453 11.984' stroke='black' stroke-width='2'/%3e %3cpath d='M19.1445 19.5134L12.1445 19.5134L5.14453 19.5134' stroke='black' stroke-width='2'/%3e %3cpath d='M12.1445 19.0135L12.1445 6.16049' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2231'%3e %3crect width='18' height='14' fill='white' transform='translate(19.1445 3.51343) rotate(90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$o = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$o);

var Upload = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$o, alt: "upload", className: className });
};

var img$n = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M8.9161 10.0634C9.84206 9.34861 10.9734 8.95077 12.143 8.92868C13.3125 8.90659 14.4581 9.26141 15.4104 9.9407C16.3626 10.62 17.0711 11.5877 17.4309 12.7007C17.7907 13.8137 17.7829 15.0129 17.4085 16.1211C17.0341 17.2293 16.313 18.1877 15.3519 18.8544C14.3908 19.5211 13.2406 19.8609 12.0715 19.8235C10.9024 19.786 9.77631 19.3734 8.85981 18.6465C7.94331 17.9197 7.28503 16.9172 6.98228 15.7874' stroke='black' stroke-width='2'/%3e %3cpath d='M12.6322 12.4934L7.89301 9.75716L10.3252 5.54451' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$n = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$n);

var Reload = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$n, alt: "reload", className: className });
};

var img$m = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2211)'%3e %3cline x1='3.14453' y1='12.5134' x2='21.1445' y2='12.5134' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2211'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.51343)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$m = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$m);

var Remove = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$m, alt: "remove", className: className });
};

var img$l = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2240)'%3e %3ccircle cx='11.1445' cy='11.5591' r='7' stroke='black' stroke-width='2'/%3e %3cline x1='15.8516' y1='16.852' x2='19.8516' y2='20.852' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2240'%3e %3crect width='18' height='18' fill='white' transform='translate(3.14453 3.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$l = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$l);

var Search = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$l, alt: "search", className: className });
};

var img$k = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2221)'%3e %3cpath d='M12.1445 15.5588C13.8014 15.5588 15.1445 14.2157 15.1445 12.5588C15.1445 10.902 13.8014 9.55884 12.1445 9.55884C10.4877 9.55884 9.14453 10.902 9.14453 12.5588C9.14453 14.2157 10.4877 15.5588 12.1445 15.5588Z' fill='%238B9094'/%3e %3cpath d='M23.1536 11.7435C21.9133 9.82533 20.3041 8.19596 18.5003 7.03111C16.5048 5.74111 14.3017 5.05908 12.1295 5.05908C10.1364 5.05908 8.17656 5.62861 6.30437 6.75174C4.39515 7.89689 2.66547 9.56986 1.16312 11.7238C0.993521 11.9672 0.900116 12.2555 0.894774 12.5522C0.889432 12.8488 0.972396 13.1403 1.13312 13.3897C2.37109 15.327 3.96437 16.9588 5.74 18.1077C7.73921 19.4028 9.89078 20.0591 12.1295 20.0591C14.3191 20.0591 16.5269 19.3827 18.5139 18.1034C20.3167 16.9424 21.9226 15.3069 23.1583 13.3728C23.3135 13.1293 23.3955 12.8463 23.3947 12.5575C23.3938 12.2686 23.3102 11.9861 23.1536 11.7435ZM12.1455 17.0591C11.2554 17.0591 10.3854 16.7952 9.6454 16.3007C8.90538 15.8062 8.3286 15.1034 7.98801 14.2812C7.64741 13.4589 7.5583 12.5541 7.73193 11.6812C7.90556 10.8083 8.33415 10.0064 8.96348 9.3771C9.59282 8.74776 10.3946 8.31918 11.2676 8.14555C12.1405 7.97191 13.0453 8.06103 13.8675 8.40162C14.6898 8.74222 15.3926 9.31899 15.8871 10.059C16.3815 10.799 16.6455 11.6691 16.6455 12.5591C16.6441 13.7521 16.1696 14.8959 15.3259 15.7395C14.4823 16.5832 13.3385 17.0577 12.1455 17.0591Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2221'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$k = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$k);

var GrayEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$k, alt: "gray eye", className: className });
};

var img$j = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M23.8768 12.5589C23.8768 5.97654 18.6236 0.640503 12.1435 0.640503C5.66335 0.640503 0.410156 5.97654 0.410156 12.5589C0.410156 18.5077 4.70086 23.4384 10.3102 24.3325V16.004H7.331V12.5589H10.3102V9.93312C10.3102 6.94606 12.0619 5.29612 14.742 5.29612C16.0258 5.29612 17.3685 5.5289 17.3685 5.5289V8.46194H15.889C14.4314 8.46194 13.9768 9.38066 13.9768 10.3232V12.5589H17.231L16.7108 16.004H13.9768V24.3325C19.5861 23.4384 23.8768 18.5077 23.8768 12.5589Z' fill='%231877F2'/%3e %3cpath d='M16.7118 16.0043L17.232 12.5591H13.9779V10.3234C13.9779 9.38092 14.4324 8.4622 15.89 8.4622H17.3695V5.52916C17.3695 5.52916 16.0268 5.29639 14.743 5.29639C12.0629 5.29639 10.3112 6.94633 10.3112 9.93338V12.5591H7.33203V16.0043H10.3112V24.3327C10.9177 24.4293 11.5306 24.4777 12.1445 24.4775C12.7682 24.4775 13.3805 24.4279 13.9779 24.3327V16.0043H16.7118Z' fill='white'/%3e%3c/svg%3e";

var css_248z$j = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$j);

var Facebook = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$j, alt: "facebook", className: className });
};

var img$i = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_37_2180)'%3e %3cpath d='M12.1445 15.5588C13.8014 15.5588 15.1445 14.2157 15.1445 12.5588C15.1445 10.902 13.8014 9.55884 12.1445 9.55884C10.4877 9.55884 9.14453 10.902 9.14453 12.5588C9.14453 14.2157 10.4877 15.5588 12.1445 15.5588Z' fill='black'/%3e %3cpath d='M23.1536 11.7435C21.9133 9.82533 20.3041 8.19596 18.5003 7.03111C16.5048 5.74111 14.3017 5.05908 12.1295 5.05908C10.1364 5.05908 8.17656 5.62861 6.30437 6.75174C4.39515 7.89689 2.66547 9.56986 1.16312 11.7238C0.993521 11.9672 0.900116 12.2555 0.894774 12.5522C0.889432 12.8488 0.972396 13.1403 1.13312 13.3897C2.37109 15.327 3.96437 16.9588 5.74 18.1077C7.73921 19.4028 9.89078 20.0591 12.1295 20.0591C14.3191 20.0591 16.5269 19.3827 18.5139 18.1034C20.3167 16.9424 21.9226 15.3069 23.1583 13.3728C23.3135 13.1293 23.3955 12.8463 23.3947 12.5575C23.3938 12.2686 23.3102 11.9861 23.1536 11.7435ZM12.1455 17.0591C11.2554 17.0591 10.3854 16.7952 9.6454 16.3007C8.90538 15.8062 8.3286 15.1034 7.98801 14.2812C7.64741 13.4589 7.5583 12.5541 7.73193 11.6812C7.90556 10.8083 8.33415 10.0064 8.96348 9.3771C9.59282 8.74776 10.3946 8.31918 11.2676 8.14555C12.1405 7.97191 13.0453 8.06103 13.8675 8.40162C14.6898 8.74222 15.3926 9.31899 15.8871 10.059C16.3815 10.799 16.6455 11.6691 16.6455 12.5591C16.6441 13.7521 16.1696 14.8959 15.3259 15.7395C14.4823 16.5832 13.3385 17.0577 12.1455 17.0591Z' fill='black'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_37_2180'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$i = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$i);

var BlackEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$i, alt: "black eye", className: className });
};

var img$h = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2222)'%3e %3cline x1='9.14453' y1='5.55908' x2='9.14453' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='16.1445' y1='5.55908' x2='16.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='11.5591' x2='11.1445' y2='11.5591' stroke='black' stroke-width='2'/%3e %3cline x1='14.1445' y1='11.5591' x2='16.1445' y2='11.5591' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='15.5591' x2='11.1445' y2='15.5591' stroke='black' stroke-width='2'/%3e %3cline x1='14.1445' y1='15.5591' x2='16.1445' y2='15.5591' stroke='black' stroke-width='2'/%3e %3crect x='7.14453' y='8.55908' width='11' height='10' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2222'%3e %3crect width='13' height='14' fill='white' transform='translate(6.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$h = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$h);

var Calendar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$h, alt: "calendar", className: className });
};

var img$g = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.14453 5.55908H14.6639L18.1445 9.90986V13.5591V21.5591H6.14453V5.55908Z' stroke='black' stroke-width='2'/%3e %3cline x1='8.14453' y1='16.5591' x2='12.1445' y2='16.5591' stroke='black' stroke-width='2'/%3e %3ccircle cx='14.6445' cy='18.0591' r='1.5' fill='black'/%3e %3cline x1='8.14453' y1='9.55908' x2='12.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='8.14453' y1='13.5591' x2='16.1445' y2='13.5591' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$g = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$g);

var Document = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$g, alt: "document", className: className });
};

var img$f = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2213)'%3e %3cpath d='M6.14453 13.0428L12.1445 19.3958L18.1445 13.0428' stroke='black' stroke-width='2'/%3e %3cpath d='M5.14453 20.0134L12.1445 20.0134L19.1445 20.0134' stroke='black' stroke-width='2'/%3e %3cpath d='M12.1445 6.01334L12.1445 18.8664' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2213'%3e %3crect width='18' height='14' fill='white' transform='translate(5.14453 21.5134) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$f = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$f);

var Download = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$f, alt: "download", className: className });
};

var img$e = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2219)'%3e %3cpath d='M17.1445 9.55908C17.1445 10.4879 16.828 11.6558 16.2854 12.9445C15.7497 14.2168 15.0275 15.5287 14.2929 16.7225C13.56 17.9135 12.8253 18.9697 12.2733 19.7287C12.2292 19.7894 12.1862 19.8482 12.1445 19.9049C12.1029 19.8482 12.0599 19.7894 12.0158 19.7287C11.4637 18.9697 10.7291 17.9135 9.99619 16.7225C9.26152 15.5287 8.53938 14.2168 8.00367 12.9445C7.46106 11.6558 7.14453 10.4879 7.14453 9.55908C7.14453 6.79766 9.38311 4.55908 12.1445 4.55908C14.906 4.55908 17.1445 6.79766 17.1445 9.55908Z' stroke='black' stroke-width='2'/%3e %3ccircle cx='12.1445' cy='9.55908' r='1' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2219'%3e %3crect width='18' height='14' fill='white' transform='translate(5.14453 21.5591) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$e = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$e);

var Location = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$e, alt: "location", className: className });
};

var img$d = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3ccircle cx='12.1445' cy='12.5591' r='6' stroke='black' stroke-width='2'/%3e %3cline x1='12.1445' y1='15.5591' x2='12.1445' y2='9.55908' stroke='black' stroke-width='2'/%3e %3cline x1='9.14453' y1='12.5591' x2='15.1445' y2='12.5591' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$d = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$d);

var AddCircle = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$d, alt: "add circle", className: className });
};

var img$c = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2215)'%3e %3cpath d='M5.14453 12.5134L10.1445 19.5134L21.1445 4.51343' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2215'%3e %3crect width='18' height='18' fill='white' transform='translate(4.14453 21.5134) rotate(-90)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$c = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$c);

var Checkmark = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$c, alt: "checkmark", className: className });
};

var img$b = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2243)'%3e %3cpath d='M11.6147 6.55908L5.26172 12.5591L11.6147 18.5591' stroke='black' stroke-width='2'/%3e %3cpath d='M21.144 12.5591H5.79102' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2243'%3e %3crect width='18' height='14' fill='white' transform='translate(3.14453 5.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$b = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$b);

var LongArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$b, alt: "long arrow", className: className });
};

var img$a = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_6797)'%3e %3cpath d='M9.14511 18.5591L15.498 12.5591L9.14511 6.55908' stroke='black' stroke-width='2'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_6797'%3e %3crect width='18' height='14' fill='white' transform='translate(21.1445 19.5591) rotate(180)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$a = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$a);

var ShortArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$a, alt: "short arrow", className: className });
};

var img$9 = "data:image/svg+xml,%3csvg width='25' height='31' viewBox='0 0 25 31' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M19.8594 22.559L12.1451 14.0884L4.4308 22.559' stroke='black' stroke-width='2'/%3e %3cpath d='M19.8594 16.559L12.1451 8.08838L4.4308 16.559' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$9 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$9);

var DoubleArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$9, alt: "double arrow", className: className });
};

var img$8 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.59521 14.4673L11.5478 20.9985C11.7873 21.2235 11.9071 21.336 12.0482 21.3637C12.1118 21.3762 12.1772 21.3762 12.2408 21.3637C12.382 21.336 12.5017 21.2235 12.7412 20.9985L19.6939 14.4673C21.65 12.6297 21.8876 9.60568 20.2423 7.48515L19.933 7.08642C17.9648 4.54966 14.0142 4.9751 12.6312 7.87273C12.4358 8.28204 11.8532 8.28204 11.6579 7.87273C10.2749 4.9751 6.32425 4.54967 4.35607 7.08643L4.04672 7.48515C2.40148 9.60568 2.63903 12.6297 4.59521 14.4673Z' fill='black' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$8 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$8);

var FilledHeart = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return React.createElement("img", { src: img$8, alt: "filled heart", className: className });
};

var img$7 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2250)'%3e %3cpath d='M13.4386 0.559084C13.7914 0.559084 14.107 0.778684 14.2258 1.10748L15.073 3.45588C15.3766 3.53148 15.637 3.60708 15.8578 3.68628C16.099 3.77268 16.4098 3.90348 16.7938 4.08228L18.7666 3.03828C18.9276 2.95297 19.112 2.92218 19.292 2.95052C19.472 2.97886 19.6379 3.06482 19.765 3.19548L21.5002 4.98948C21.7306 5.22828 21.7954 5.57748 21.6658 5.88228L20.7406 8.05068C20.8942 8.33268 21.0166 8.57388 21.1102 8.77548C21.211 8.99508 21.3358 9.29748 21.4846 9.68748L23.641 10.6115C23.965 10.7495 24.1654 11.0735 24.1438 11.4203L23.9854 13.9103C23.9745 14.072 23.9165 14.2271 23.8183 14.3561C23.7202 14.4852 23.5864 14.5826 23.4334 14.6363L21.391 15.3623C21.3322 15.6443 21.271 15.8855 21.2062 16.0895C21.1017 16.4045 20.9823 16.7145 20.8486 17.0183L21.8746 19.2863C21.947 19.4456 21.9665 19.624 21.9302 19.7952C21.8939 19.9665 21.8038 20.1216 21.673 20.2379L19.7218 21.9803C19.5933 22.0945 19.4329 22.1668 19.2622 22.1874C19.0915 22.208 18.9186 22.1759 18.7666 22.0955L16.7554 21.0299C16.4407 21.1965 16.1161 21.3436 15.7834 21.4703L14.905 21.7991L14.125 23.9591C14.0672 24.1173 13.9629 24.2543 13.8258 24.3521C13.6888 24.45 13.5253 24.5042 13.357 24.5075L11.077 24.5591C10.9041 24.5636 10.7341 24.5145 10.5904 24.4184C10.4466 24.3224 10.3361 24.1841 10.2742 24.0227L9.35497 21.5903C9.04135 21.4831 8.73082 21.3671 8.42377 21.2423C8.17263 21.1336 7.92529 21.0163 7.68217 20.8907L5.40217 21.8651C5.25194 21.9292 5.08632 21.9482 4.92546 21.9199C4.76461 21.8915 4.61546 21.8171 4.49617 21.7055L2.80897 20.1227C2.68336 20.0054 2.59781 19.8515 2.56443 19.6829C2.53105 19.5143 2.55153 19.3394 2.62297 19.1831L3.60337 17.0471C3.47298 16.7941 3.3521 16.5363 3.24097 16.2743C3.11125 15.9536 2.9912 15.629 2.88097 15.3011L0.732972 14.6471C0.558373 14.5943 0.406085 14.4854 0.29976 14.3372C0.193434 14.189 0.139022 14.0098 0.144972 13.8275L0.228972 11.5223C0.234951 11.3719 0.281936 11.226 0.364846 11.1003C0.447755 10.9747 0.563434 10.8741 0.699372 10.8095L2.95297 9.72708C3.05737 9.34428 3.14857 9.04668 3.22897 8.82948C3.34218 8.53938 3.4679 8.25431 3.60577 7.97508L2.62897 5.91108C2.55484 5.75434 2.53233 5.57813 2.56468 5.40779C2.59702 5.23744 2.68255 5.08175 2.80897 4.96308L4.49377 3.37188C4.61188 3.26049 4.75966 3.1856 4.91932 3.15622C5.07899 3.12684 5.24375 3.14423 5.39377 3.20628L7.67137 4.14708C7.92337 3.97908 8.15137 3.84348 8.35777 3.73428C8.60377 3.60348 8.93257 3.46668 9.34657 3.31908L10.1386 1.10988C10.1971 0.948206 10.3042 0.808542 10.445 0.709962C10.5859 0.611381 10.7538 0.558691 10.9258 0.559084H13.4386ZM12.1738 8.98188C10.1734 8.98188 8.55217 10.5839 8.55217 12.5615C8.55217 14.5391 10.1734 16.1423 12.1738 16.1423C14.173 16.1423 15.7942 14.5391 15.7942 12.5615C15.7942 10.5839 14.1742 8.98188 12.1738 8.98188Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2250'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$7 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$7);

var SettingsGray = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$7, alt: "settings gray", className: className }));
};

var img$6 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2226)'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.14453 7.55908L6.14453 21.5591H18.1445L19.1445 7.55908H5.14453ZM7.29248 9.55908L8.00677 19.5591H16.2823L16.9966 9.55908H7.29248Z' fill='black'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.14453 18.3283L9.14453 10.7899L11.1445 10.7899L11.1445 18.3283L9.14453 18.3283Z' fill='black'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.1445 18.3283L13.1445 10.7899L15.1445 10.7899L15.1445 18.3283L13.1445 18.3283Z' fill='black'/%3e %3c/g%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.1445 5.55908H4.14453V3.55908H20.1445V5.55908Z' fill='black'/%3e %3cdefs%3e %3cclipPath id='clip0_20_2226'%3e %3crect width='14' height='14' fill='white' transform='translate(5.14453 7.55908)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$6 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$6);

var TrashDefault = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$6, alt: "trash default", className: className }));
};

var img$5 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M4.59521 14.4673L11.5478 20.9985C11.7873 21.2235 11.9071 21.336 12.0482 21.3637C12.1118 21.3762 12.1772 21.3762 12.2408 21.3637C12.382 21.336 12.5017 21.2235 12.7412 20.9985L19.6939 14.4673C21.65 12.6297 21.8876 9.60568 20.2423 7.48515L19.933 7.08642C17.9648 4.54966 14.0142 4.9751 12.6312 7.87273C12.4358 8.28204 11.8532 8.28204 11.6579 7.87273C10.2749 4.9751 6.32425 4.54967 4.35607 7.08643L4.04672 7.48515C2.40148 9.60568 2.63903 12.6297 4.59521 14.4673Z' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z$5 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$5);

var OutlinedHeart = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$5, alt: "outlined heart", className: className }));
};

var img$4 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M7.14453 8.55908H17.1445V19.5591C17.1445 20.1114 16.6968 20.5591 16.1445 20.5591H8.14453C7.59225 20.5591 7.14453 20.1114 7.14453 19.5591V8.55908Z' stroke='black' stroke-width='2'/%3e %3crect x='5.14453' y='4.55908' width='14' height='2' fill='black'/%3e %3crect x='9.14453' y='3.55908' width='6' height='2' fill='black'/%3e%3c/svg%3e";

var css_248z$4 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$4);

var TrashOutlined = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$4, alt: "trash outlined", className: className }));
};

var img$3 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M12.148 10.1084C11.5129 10.1084 10.9182 10.3417 10.4679 10.7682C10.0197 11.1947 9.77123 11.758 9.77123 12.3595C9.77123 12.9611 10.0197 13.5243 10.4679 13.9508C10.9182 14.3753 11.5129 14.6107 12.148 14.6107C12.7831 14.6107 13.3778 14.3753 13.8281 13.9508C14.2762 13.5243 14.5247 12.9611 14.5247 12.3595C14.5247 11.758 14.2762 11.1947 13.8281 10.7682C13.6081 10.5583 13.3464 10.3919 13.0579 10.2786C12.7695 10.1653 12.4602 10.1075 12.148 10.1084ZM20.9052 14.8461L19.5161 13.7215C19.582 13.3393 19.616 12.949 19.616 12.5607C19.616 12.1724 19.582 11.7801 19.5161 11.3999L20.9052 10.2754C21.0102 10.1903 21.0853 10.0769 21.1206 9.95045C21.1559 9.82395 21.1496 9.69028 21.1028 9.56721L21.0837 9.5149C20.7014 8.50237 20.1285 7.56381 19.393 6.74471L19.3547 6.70246C19.2654 6.60298 19.1464 6.53147 19.0133 6.49736C18.8802 6.46324 18.7393 6.46812 18.6092 6.51134L16.8845 7.09274C16.2473 6.59785 15.5379 6.20757 14.769 5.93598L14.4355 4.22799C14.4104 4.09933 14.3445 3.98095 14.2466 3.8886C14.1487 3.79626 14.0235 3.7343 13.8875 3.71097L13.8302 3.70091C12.7257 3.51181 11.5618 3.51181 10.4573 3.70091L10.3999 3.71097C10.264 3.7343 10.1388 3.79626 10.0409 3.8886C9.943 3.98095 9.8771 4.09933 9.85194 4.22799L9.51635 5.94403C8.75474 6.21778 8.04525 6.60712 7.41571 7.09677L5.67828 6.51134C5.54821 6.46777 5.40723 6.46272 5.27407 6.49686C5.1409 6.531 5.02186 6.60271 4.93275 6.70246L4.89452 6.74471C4.16024 7.56468 3.58756 8.503 3.20381 9.5149L3.1847 9.56721C3.08912 9.81868 3.16771 10.1003 3.38223 10.2754L4.78832 11.412C4.72248 11.7902 4.69062 12.1765 4.69062 12.5587C4.69062 12.945 4.72248 13.3312 4.78832 13.7054L3.38648 14.8421C3.28154 14.9271 3.20644 15.0405 3.17116 15.167C3.13587 15.2934 3.14208 15.4271 3.18895 15.5502L3.20806 15.6025C3.59251 16.6144 4.15962 17.5499 4.89877 18.3727L4.937 18.4149C5.02632 18.5144 5.14537 18.5859 5.27846 18.62C5.41155 18.6542 5.55242 18.6493 5.68252 18.6061L7.41996 18.0206C8.05291 18.5135 8.75808 18.9038 9.5206 19.1734L9.85619 20.8894C9.88135 21.0181 9.94725 21.1364 10.0451 21.2288C10.143 21.3211 10.2682 21.3831 10.4042 21.4064L10.4615 21.4165C11.5769 21.6066 12.7191 21.6066 13.8344 21.4165L13.8918 21.4064C14.0277 21.3831 14.153 21.3211 14.2508 21.2288C14.3487 21.1364 14.4146 21.0181 14.4398 20.8894L14.7733 19.1814C15.5421 18.9078 16.2516 18.5196 16.8888 18.0247L18.6134 18.6061C18.7435 18.6496 18.8845 18.6547 19.0177 18.6205C19.1508 18.5864 19.2699 18.5147 19.359 18.4149L19.3972 18.3727C20.1364 17.5459 20.7035 16.6144 21.0879 15.6025L21.107 15.5502C21.1984 15.3007 21.1198 15.0211 20.9052 14.8461ZM12.148 15.8962C10.0856 15.8962 8.41399 14.313 8.41399 12.3595C8.41399 10.4061 10.0856 8.82286 12.148 8.82286C14.2104 8.82286 15.882 10.4061 15.882 12.3595C15.882 14.313 14.2104 15.8962 12.148 15.8962Z' fill='black'/%3e%3c/svg%3e";

var css_248z$3 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$3);

var SettingsBlack = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$3, alt: "settings black", className: className }));
};

var img$2 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_20_2239)'%3e %3cpath d='M4.17569 3.5599L3.14453 4.59106L20.1134 21.56L21.1446 20.5288L4.17569 3.5599Z' fill='%238B9094'/%3e %3cpath d='M12.3008 9.56299L15.14 12.4022C15.1006 11.662 14.7888 10.9625 14.2646 10.4384C13.7405 9.91422 13.041 9.60243 12.3008 9.56299Z' fill='%238B9094'/%3e %3cpath d='M11.9877 15.5548L9.14844 12.7156C9.18788 13.4558 9.49967 14.1553 10.0238 14.6794C10.548 15.2036 11.2474 15.5154 11.9877 15.5548Z' fill='%238B9094'/%3e %3cpath d='M12.1445 17.0585C11.4522 17.0585 10.7693 16.8988 10.1488 16.5919C9.52829 16.2849 8.98699 15.8388 8.567 15.2885C8.14702 14.7382 7.85967 14.0983 7.72731 13.4188C7.59496 12.7393 7.62117 12.0384 7.8039 11.3707L4.56625 8.13257C3.24391 9.34382 1.98391 10.9244 0.894531 12.5585C2.13297 14.621 3.82703 16.7416 5.5914 17.9576C7.61546 19.3516 9.81625 20.0585 12.1333 20.0585C13.3995 20.0594 14.6563 19.8405 15.8476 19.4116L13.3347 16.8991C12.9469 17.0053 12.5466 17.0589 12.1445 17.0585Z' fill='%238B9094'/%3e %3cpath d='M12.1441 8.05859C12.8364 8.05856 13.5194 8.21825 14.1399 8.52525C14.7604 8.83224 15.3017 9.27825 15.7217 9.82859C16.1416 10.3789 16.429 11.0187 16.5614 11.6983C16.6937 12.3778 16.6675 13.0787 16.4848 13.7464L19.7969 17.0586C21.1634 15.8281 22.4252 14.173 23.3941 12.5586C22.1576 10.5228 20.4457 8.40734 18.6513 7.17641C16.6019 5.77109 14.4087 5.05859 12.1329 5.05859C10.8806 5.06039 9.63882 5.28728 8.4668 5.72844L10.9563 8.21797C11.3434 8.11203 11.7429 8.05843 12.1441 8.05859Z' fill='%238B9094'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_20_2239'%3e %3crect width='24' height='24' fill='white' transform='translate(0.144531 0.559082)'/%3e %3c/clipPath%3e %3c/defs%3e%3c/svg%3e";

var css_248z$2 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$2);

var GrayDisabledEye = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$2, alt: "gray disabled eye", className: className }));
};

var img$1 = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9.14453 12.5591L15.1445 6.55908L15.1445 18.5591L9.14453 12.5591Z' fill='black'/%3e%3c/svg%3e";

var css_248z$1 = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z$1);

var ShortFilledArrow = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img$1, alt: "short filled arrow", className: className }));
};

var img = "data:image/svg+xml,%3csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M6.14453 5.55908H14.6639L18.1445 9.90986V13.5591V21.5591H6.14453V5.55908Z' stroke='black' stroke-width='2'/%3e %3cline x1='2.61567' y1='8.67702' x2='21.6157' y2='18.8255' stroke='black' stroke-width='2'/%3e %3cline x1='2.75045' y1='18.9767' x2='21.6667' y2='8.68076' stroke='black' stroke-width='2'/%3e%3c/svg%3e";

var css_248z = "@font-face {\n  font-family: e_Ukraine_Regular;\n  src: url(assets/fonts/e-Ukraine-Regular.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_Ukraine_Bold;\n  src: url(assets/fonts/e-Ukraine-Bold.otf) format(\"opentype\");\n}\n@font-face {\n  font-family: e_UkraineHead;\n  src: url(assets/fonts/e-UkraineHead-Regular.otf) format(\"opentype\");\n}";
styleInject(css_248z);

var CancelCertificate = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement("img", { src: img, alt: "cancel certificate", className: className }));
};

exports.AddCircleIcon = AddCircle;
exports.AddIcon = Add;
exports.AlertIcon = Alert;
exports.AnswerButton = AnswerButton;
exports.BlackEyeIcon = BlackEye;
exports.CalendarIcon = Calendar;
exports.CancelCertificateIcon = CancelCertificate;
exports.CancelIcon = Cancel;
exports.CheckmarkIcon = Checkmark;
exports.CircleProgressBar = CircleProgressBar;
exports.ClockIcon = Clock;
exports.CloseIcon = Close;
exports.CommonButton = CommonButton;
exports.CopyIcon = Copy;
exports.DocumentIcon = Document;
exports.DoubleArrowIcon = DoubleArrow;
exports.DownloadIcon = Download;
exports.EnterIcon = Enter;
exports.Expand = Expand;
exports.FacebookIcon = Facebook;
exports.FilledHeartIcon = FilledHeart;
exports.FormField = FormField;
exports.GoogleIcon = Google;
exports.GrayDisableEyeIcon = GrayDisabledEye;
exports.GrayEyeIcon = GrayEye;
exports.GrnIcon = Grn;
exports.HelpIcon = Help;
exports.LocationIcon = Location;
exports.LockIcon = Lock;
exports.LongArrowIcon = LongArrow;
exports.MailIcon = Mail;
exports.Navigation = Navigation;
exports.Notification = Reminder;
exports.OutlinedHeartIcon = OutlinedHeart;
exports.PencilIcon = Pencil;
exports.PersonIcon = Person;
exports.PlaneIcon = Plane;
exports.PlusIcon = Plus;
exports.PrintIcon = Print;
exports.RadioButton = RadioButton;
exports.ReloadIcon = Reload;
exports.RemoveIcon = Remove;
exports.SearchIcon = Search;
exports.Select = SelectInput;
exports.SettingsBlackIcon = SettingsBlack;
exports.SettingsGrayIcon = SettingsGray;
exports.ShortArrowIcon = ShortArrow;
exports.ShortFilledArrowIcon = ShortFilledArrow;
exports.SimpleUploadFile = SimpleUploadFile;
exports.Status = Status;
exports.SwapIcon = Swap;
exports.SwitchButton = SwitchButton;
exports.Title = Title;
exports.TrashDefaultIcon = TrashDefault;
exports.TrashOutlinedIcon = TrashOutlined;
exports.UploadIcon = Upload;
exports.VisualUploadFile = VisualUploadFile;
exports.idIcon = Id;
//# sourceMappingURL=index.js.map
