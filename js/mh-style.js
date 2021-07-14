/*=============tab============*/
try {
	var tabs = document.querySelectorAll(".mh-tab-style-1 .mh-tabs ul li");
	var tabs_wrap = document.querySelectorAll(".mh-tab-style-1 .mh-tab-content .mh-tab-wrap");
	tabs.forEach(function (tab, tab_index) {
		tab.addEventListener("click", function () {
			tabs.forEach(function (tab) {
				tab.classList.remove("active");
			});

			tab.classList.add("active");

			tabs_wrap.forEach(function (content, content_index) {
				if (content_index == tab_index) {
					content.style.display = "block";
				} else {
					content.style.display = "none";
				}
			});
		});
	});
} catch {}
/*==========/Tab===========*/

/*=========Accordion==========*/
try {
	var acc = document.getElementsByClassName("mh-accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("mh-accordion-active");
			var panel = this.nextElementSibling;
			/*if(panel.style.display === "block"){
				panel.style.display = "none";
			}else{
				panel.style.display = "block";
			}*/
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	};
} catch {}
/*==========/Accordion===========*/
try {
	const mh_range_slider = document.querySelector(".mh-range-slider input");
	const value = document.querySelector(".mh-range-style-1 .mh-range-value");
	value.textContent = mh_range_slider.value;
	mh_range_slider.oninput = (function () {
		value.textContent = this.value;
	});
} catch {}
/*===================*/
try {
	let mh_navbar_style_1_toggle_button = document.querySelector(".mh-navbar-style-1-body .mh-toggle-button");
	let mh_navbar_style_1 = document.querySelector("nav.mh-navbar-style-1");
	mh_navbar_style_1_toggle_button.onclick = function (e) {
		mh_navbar_style_1.classList.toggle("mh-nav-collapse");
	}
} catch {}
/*====================*/
/*===========image filter===============*/
try {
	(function ($) {
		$(document).ready(function () {
			$(".mh-image-filter-button").click(function () {
				var image_filter_name = $(this).attr("mh-image-data-filter");
				if (image_filter_name == "all") {
					$(".mh-image-filter").show("2000");
				} else {
					$(".mh-image-filter").not("." + image_filter_name).hide("2000");
					$(".mh-image-filter").filter("." + image_filter_name).show("2000");
				}
			});
			$(".mh-image-filter-navigation a").click(function () {
				$(this).addClass("active").siblings().removeClass("active")
			});
		});
	}(jQuery));
} catch {}
/*=========Slider========*

var posicion = 0;
function left() {
	posicion--;
	if(posicion < 1 ){
		posicion = $('.mh-contenedor').children('.mh-banner').length;
	};
	$(".mh-contenedor").children(".mh-banner").not('.active').css({
		'left' : '100%'
	});
	$('.mh-contenedor').children('.active').animate({
		'left' : '-100%'
	});
	$(".mh-contenedor").children(".mh-banner").each(function(index, elemento){
		if(posicion - 1 == index){
			$(elemento).addClass('active').animate({
				'left' : 0
			});
		}else{
			$(elemento).removeClass('active');
		};
	});
};
function right() {
	posicion++;
	if(posicion > $('.mh-contenedor').children('.mh-banner').length){
		posicion = 1;
	};
	$(".mh-contenedor").children(".mh-banner").not('.active').css({
		'left' : '-100%'
	});
	$('.mh-contenedor').children('.active').animate({
		'left' : '100%'
	});
	$(".mh-contenedor").children(".mh-banner").each(function(index, elemento){
		if(posicion - 1 == index){
			$(elemento).addClass('active').animate({
				'left' : 0
			});
		}else{
			$(elemento).removeClass('active');
		};
	});
};
function altoConetendor(){
	$('.mh-contenedor').css({
		'height' : $('.mh-contenedor').width() * 0.5
	});
};
$(window).resize(altoConetendor);
$(document).ready(function() {
	right();
	altoConetendor();
});

/*==========/Slider=========*/
/*
$(() => {
  {
    let progressbar = $('#progressbar');
    let max = progressbar.attr('max');
    let time = (1000 / max) * 5;
    let value = progressbar.val();
    const loading = () => {
      value += 1;
      progressbar.val(value);
      $('.progress-value').html(value +'%');
      if (value == max) {
        clearInterval(animate);
      }
    };
    const animate = setInterval(() => loading(), time);
  };
});
*/
/*====================================*/

/*===========progress bar===========*/

try {
	// function makesvg(percentage, inner_text=""){

	// 	var abs_percentage = Math.abs(percentage).toString();
	// 	var percentage_str = percentage.toString();
	// 	var classes = "";

	// 	if(percentage < 0){
	// 	  classes = "danger-stroke circle-chart__circle--negative";
	// 	} else if(percentage > 0 && percentage <= 30){
	// 	  classes = "warning-stroke";
	// 	} else{
	// 	  classes = "success-stroke";
	// 	};

	//    var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
	// 	   + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
	// 	   + '<circle class="circle-chart__circle '+classes+'"'
	// 	   + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
	// 	   + '<g class="circle-chart__info">'
	// 	   + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

	// 	if(inner_text){
	// 	  svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
	// 	};

	// 	svg += ' </g></svg>';

	// 	return svg
	//   };

	//   (function($){

	// 	  $.fn.circlechart = function() {
	// 		  this.each(function() {
	// 			  var percentage = $(this).data("percentage");
	// 			  var inner_text = $(this).text();
	// 			  $(this).html(makesvg(percentage, inner_text));
	// 		  });
	// 		  return this;
	// 	  };

	//   }(jQuery));
	function makesvg(percentage, inner_text = "") {

		var abs_percentage = Math.abs(percentage).toString();
		var percentage_str = percentage.toString();
		var classes = "";

		if (percentage < 0) {
			classes = "mh-danger-stroke mh-circle-chart__circle--negative";
		} else if (percentage > 0 && percentage <= 30) {
			classes = "mh-warning-stroke";
		} else {
			classes = "mh-success-stroke";
		};

		var svg = '<svg class="mh-circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
			'<circle class="mh-circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
			'<circle class="mh-circle-chart__circle ' + classes + '"' +
			'stroke-dasharray="' + abs_percentage + ',100"    cx="16.9" cy="16.9" r="15.9" />' +
			'<g class="mh-circle-chart__info">' +
			'   <text class="mh-circle-chart__percent" x="17.9" y="15.5">' + percentage_str + '%</text>';

		if (inner_text) {
			svg += '<text class="mh-circle-chart__subline" x="16.91549431" y="22">' + inner_text + '</text>'
		};

		svg += ' </g></svg>';

		return svg
	};

	(function ($) {

		$.fn.circlechart = function () {
			this.each(function () {
				var percentage = $(this).data("percentage");
				var inner_text = $(this).text();
				$(this).html(makesvg(percentage, inner_text));
			});
			return this;
		};

	}(jQuery));
} catch {}
/**
 * image Gallery
 */
try {
	var imagegallerymainImg = document.querySelectorAll('.mh-image-gallery-style-1 .mh-image-gallery-main-img');
	var imagegallerymodalImg = document.querySelector('.mh-image-gallery-style-1 .mh-image-gallery-display-img');
	var imagegalleryclose = document.querySelector('.mh-image-gallery-style-1 .mh-image-gallery-close-button');
	var imagegallerydisplayId = document.querySelector('.mh-image-gallery-style-1 #mh-image-gallery-display-section');
	for (let i = 0; i < imagegallerymainImg.length; i++) {
		imagegallerymainImg[i].addEventListener('click', function () {
			imagegallerydisplayId.style.display = 'block';
			imagegallerymodalImg.src = imagegallerymainImg[i].src;
		});
	}
	imagegalleryclose.addEventListener('click', function () {
		imagegallerydisplayId.style.display = 'none';
	});
} catch {}
/**
 * login form
 */
try {
	var mh_form_login = document.querySelector(".mh-form-style-1 #mh-form-login");
	var mh_form_register = document.querySelector(".mh-form-style-1 #mh-form-register");
	var mh_form_btn = document.querySelector(".mh-form-style-1 #mh-form-btn");

	function register() {
		mh_form_login.style.left = "-400px";
		mh_form_register.style.left = "50px";
		mh_form_btn.style.left = "110px";
	}

	function login() {
		mh_form_login.style.left = "50px";
		mh_form_register.style.left = "450px";
		mh_form_btn.style.left = "0";
	}
} catch {}
/**
 * image gallery
 */
try {
	var imagegallerymainImg = document.querySelectorAll('.mh-image-gallery-style-1 .mh-image-gallery-main-img');
	var imagegallerymodalImg = document.querySelector('.mh-image-gallery-style-1 .mh-image-gallery-display-img');
	var imagegalleryclose = document.querySelector('.mh-image-gallery-style-1 .mh-image-gallery-close-button');
	var imagegallerydisplayId = document.querySelector('.mh-image-gallery-style-1 #mh-image-gallery-display-section');
	for (let i = 0; i < imagegallerymainImg.length; i++) {
		imagegallerymainImg[i].addEventListener('click', function () {
			imagegallerydisplayId.style.display = 'block';
			imagegallerymodalImg.src = imagegallerymainImg[i].src;
		});
	}
	imagegalleryclose.addEventListener('click', function () {
		imagegallerydisplayId.style.display = 'none';
	});
} catch {}

/**
 * animation
 */
try {
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['module', 'exports'], factory);
		} else if (typeof exports !== "undefined") {
			factory(module, exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod, mod.exports);
			global.mhstyle_animate = mod.exports;
		}
	})(this, function (module, exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _class, _temp;

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();

		function isIn(needle, haystack) {
			return haystack.indexOf(needle) >= 0;
		}

		function extend(custom, defaults) {
			for (var key in defaults) {
				if (custom[key] == null) {
					var value = defaults[key];
					custom[key] = value;
				}
			}
			return custom;
		}

		function isMobile(agent) {
			return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent));
		}

		function createEvent(event) {
			var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
			var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
			var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

			var customEvent = void 0;
			if (document.createEvent != null) {
				customEvent = document.createEvent('CustomEvent');
				customEvent.initCustomEvent(event, bubble, cancel, detail);
			} else if (document.createEventObject != null) {
				customEvent = document.createEventObject();
				customEvent.eventType = event;
			} else {
				customEvent.eventName = event;
			}

			return customEvent;
		}

		function emitEvent(elem, event) {
			if (elem.dispatchEvent != null) {
				elem.dispatchEvent(event);
			} else if (event in (elem != null)) {
				elem[event]();
			} else if ('on' + event in (elem != null)) {
				elem['on' + event]();
			}
		}

		function addEvent(elem, event, fn) {
			if (elem.addEventListener != null) {
				elem.addEventListener(event, fn, false);
			} else if (elem.attachEvent != null) {
				elem.attachEvent('on' + event, fn);
			} else {
				elem[event] = fn;
			}
		}

		function removeEvent(elem, event, fn) {
			if (elem.removeEventListener != null) {
				elem.removeEventListener(event, fn, false);
			} else if (elem.detachEvent != null) {
				elem.detachEvent('on' + event, fn);
			} else {
				delete elem[event];
			}
		}

		function getInnerHeight() {
			if ('innerHeight' in window) {
				return window.innerHeight;
			}

			return document.documentElement.clientHeight;
		}

		var WeakMap = window.WeakMap || window.MozWeakMap || function () {
			function WeakMap() {
				_classCallCheck(this, WeakMap);

				this.keys = [];
				this.values = [];
			}

			_createClass(WeakMap, [{
				key: 'get',
				value: function get(key) {
					for (var i = 0; i < this.keys.length; i++) {
						var item = this.keys[i];
						if (item === key) {
							return this.values[i];
						}
					}
					return undefined;
				}
			}, {
				key: 'set',
				value: function set(key, value) {
					for (var i = 0; i < this.keys.length; i++) {
						var item = this.keys[i];
						if (item === key) {
							this.values[i] = value;
							return this;
						}
					}
					this.keys.push(key);
					this.values.push(value);
					return this;
				}
			}]);

			return WeakMap;
		}();

		var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
			function MutationObserver() {
				_classCallCheck(this, MutationObserver);

				if (typeof console !== 'undefined' && console !== null) {
					console.warn('MutationObserver is not supported by your browser.');
					console.warn('mhstyle_animate.js cannot detect dom mutations, please call .sync() after loading new content.');
				}
			}

			_createClass(MutationObserver, [{
				key: 'observe',
				value: function observe() {}
			}]);

			return MutationObserver;
		}(), _class.notSupported = true, _temp);

		var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
			var getComputedStyleRX = /(\-([a-z]){1})/g;
			return {
				getPropertyValue: function getPropertyValue(prop) {
					if (prop === 'float') {
						prop = 'styleFloat';
					}
					if (getComputedStyleRX.test(prop)) {
						prop.replace(getComputedStyleRX, function (_, _char) {
							return _char.toUpperCase();
						});
					}
					var currentStyle = el.currentStyle;

					return (currentStyle != null ? currentStyle[prop] : void 0) || null;
				}
			};
		};

		var mhstyle_animate = function () {
			function mhstyle_animate() {
				var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

				_classCallCheck(this, mhstyle_animate);

				this.defaults = {
					boxClass: 'mh-animated',
					animateClass: 'mh-animate',
					offset: 0,
					mobile: true,
					live: true,
					callback: null,
					scrollContainer: null,
					resetAnimation: true
				};

				this.animate = function animateFactory() {
					if ('requestAnimationFrame' in window) {
						return function (callback) {
							return window.requestAnimationFrame(callback);
						};
					}
					return function (callback) {
						return callback();
					};
				}();

				this.vendors = ['moz', 'webkit'];

				this.start = this.start.bind(this);
				this.resetAnimation = this.resetAnimation.bind(this);
				this.scrollHandler = this.scrollHandler.bind(this);
				this.scrollCallback = this.scrollCallback.bind(this);
				this.scrolled = true;
				this.config = extend(options, this.defaults);
				if (options.scrollContainer != null) {
					this.config.scrollContainer = document.querySelector(options.scrollContainer);
				}
				this.animationNameCache = new WeakMap();
				this.mhEvent = createEvent(this.config.boxClass);
			}

			_createClass(mhstyle_animate, [{
				key: 'init',
				value: function init() {
					this.element = window.document.documentElement;
					if (isIn(document.readyState, ['interactive', 'complete'])) {
						this.start();
					} else {
						addEvent(document, 'DOMContentLoaded', this.start);
					}
					this.finished = [];
				}
			}, {
				key: 'start',
				value: function start() {
					var _this = this;

					this.stopped = false;
					this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
					this.all = this.boxes.slice(0);
					if (this.boxes.length) {
						if (this.disabled()) {
							this.resetStyle();
						} else {
							for (var i = 0; i < this.boxes.length; i++) {
								var box = this.boxes[i];
								this.applyStyle(box, true);
							}
						}
					}
					if (!this.disabled()) {
						addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
						addEvent(window, 'resize', this.scrollHandler);
						this.interval = setInterval(this.scrollCallback, 50);
					}
					if (this.config.live) {
						var mut = new MutationObserver(function (records) {
							for (var j = 0; j < records.length; j++) {
								var record = records[j];
								for (var k = 0; k < record.addedNodes.length; k++) {
									var node = record.addedNodes[k];
									_this.doSync(node);
								}
							}
							return undefined;
						});
						mut.observe(document.body, {
							childList: true,
							subtree: true
						});
					}
				}
			}, {
				key: 'stop',
				value: function stop() {
					this.stopped = true;
					removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
					removeEvent(window, 'resize', this.scrollHandler);
					if (this.interval != null) {
						clearInterval(this.interval);
					}
				}
			}, {
				key: 'sync',
				value: function sync() {
					if (MutationObserver.notSupported) {
						this.doSync(this.element);
					}
				}
			}, {
				key: 'doSync',
				value: function doSync(element) {
					if (typeof element === 'undefined' || element === null) {
						element = this.element;
					}
					if (element.nodeType !== 1) {
						return;
					}
					element = element.parentNode || element;
					var iterable = element.querySelectorAll('.' + this.config.boxClass);
					for (var i = 0; i < iterable.length; i++) {
						var box = iterable[i];
						if (!isIn(box, this.all)) {
							this.boxes.push(box);
							this.all.push(box);
							if (this.stopped || this.disabled()) {
								this.resetStyle();
							} else {
								this.applyStyle(box, true);
							}
							this.scrolled = true;
						}
					}
				}
			}, {
				key: 'show',
				value: function show(box) {
					this.applyStyle(box);
					box.className = box.className + ' ' + this.config.animateClass;
					if (this.config.callback != null) {
						this.config.callback(box);
					}
					emitEvent(box, this.mhEvent);

					if (this.config.resetAnimation) {
						addEvent(box, 'animationend', this.resetAnimation);
						addEvent(box, 'oanimationend', this.resetAnimation);
						addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
						addEvent(box, 'MSAnimationEnd', this.resetAnimation);
					}

					return box;
				}
			}, {
				key: 'applyStyle',
				value: function applyStyle(box, hidden) {
					var _this2 = this;

					var duration = box.getAttribute('data-mh-animated-duration');
					var delay = box.getAttribute('data-mh-animated-delay');
					var iteration = box.getAttribute('data-mh-animated-iteration');

					return this.animate(function () {
						return _this2.customStyle(box, hidden, duration, delay, iteration);
					});
				}
			}, {
				key: 'resetStyle',
				value: function resetStyle() {
					for (var i = 0; i < this.boxes.length; i++) {
						var box = this.boxes[i];
						box.style.visibility = 'visible';
					}
					return undefined;
				}
			}, {
				key: 'resetAnimation',
				value: function resetAnimation(event) {
					if (event.type.toLowerCase().indexOf('animationend') >= 0) {
						var target = event.target || event.srcElement;
						target.className = target.className.replace(this.config.animateClass, '').trim();
					}
				}
			}, {
				key: 'customStyle',
				value: function customStyle(box, hidden, duration, delay, iteration) {
					if (hidden) {
						this.cacheAnimationName(box);
					}
					box.style.visibility = hidden ? 'hidden' : 'visible';

					if (duration) {
						this.vendorSet(box.style, {
							animationDuration: duration
						});
					}
					if (delay) {
						this.vendorSet(box.style, {
							animationDelay: delay
						});
					}
					if (iteration) {
						this.vendorSet(box.style, {
							animationIterationCount: iteration
						});
					}
					this.vendorSet(box.style, {
						animationName: hidden ? 'none' : this.cachedAnimationName(box)
					});

					return box;
				}
			}, {
				key: 'vendorSet',
				value: function vendorSet(elem, properties) {
					for (var name in properties) {
						if (properties.hasOwnProperty(name)) {
							var value = properties[name];
							elem['' + name] = value;
							for (var i = 0; i < this.vendors.length; i++) {
								var vendor = this.vendors[i];
								elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
							}
						}
					}
				}
			}, {
				key: 'vendorCSS',
				value: function vendorCSS(elem, property) {
					var style = getComputedStyle(elem);
					var result = style.getPropertyCSSValue(property);
					for (var i = 0; i < this.vendors.length; i++) {
						var vendor = this.vendors[i];
						result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
					}
					return result;
				}
			}, {
				key: 'animationName',
				value: function animationName(box) {
					var aName = void 0;
					try {
						aName = this.vendorCSS(box, 'animation-name').cssText;
					} catch (error) {
						aName = getComputedStyle(box).getPropertyValue('animation-name');
					}

					if (aName === 'none') {
						return '';
					}

					return aName;
				}
			}, {
				key: 'cacheAnimationName',
				value: function cacheAnimationName(box) {
					return this.animationNameCache.set(box, this.animationName(box));
				}
			}, {
				key: 'cachedAnimationName',
				value: function cachedAnimationName(box) {
					return this.animationNameCache.get(box);
				}
			}, {
				key: 'scrollHandler',
				value: function scrollHandler() {
					this.scrolled = true;
				}
			}, {
				key: 'scrollCallback',
				value: function scrollCallback() {
					if (this.scrolled) {
						this.scrolled = false;
						var results = [];
						for (var i = 0; i < this.boxes.length; i++) {
							var box = this.boxes[i];
							if (box) {
								if (this.isVisible(box)) {
									this.show(box);
									continue;
								}
								results.push(box);
							}
						}
						this.boxes = results;
						if (!this.boxes.length && !this.config.live) {
							this.stop();
						}
					}
				}
			}, {
				key: 'offsetTop',
				value: function offsetTop(element) {
					while (element.offsetTop === undefined) {
						element = element.parentNode;
					}
					var top = element.offsetTop;
					while (element.offsetParent) {
						element = element.offsetParent;
						top += element.offsetTop;
					}
					return top;
				}
			}, {
				key: 'isVisible',
				value: function isVisible(box) {
					var offset = box.getAttribute('data-mh-animated-offset') || this.config.offset;
					var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
					var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
					var top = this.offsetTop(box);
					var bottom = top + box.clientHeight;

					return top <= viewBottom && bottom >= viewTop;
				}
			}, {
				key: 'disabled',
				value: function disabled() {
					return !this.config.mobile && isMobile(navigator.userAgent);
				}
			}]);

			return mhstyle_animate;
		}();

		exports.default = mhstyle_animate;
		module.exports = exports['default'];
	});

} catch {}
try {
	const dropArea = document.querySelector(".mh-drag-drop"),
		dragText = dropArea.querySelector(".mh-drag-drop-header"),
		dragbutton = dropArea.querySelector(".mh-drag-drop-button"),
		draginput = dropArea.querySelector(".mh-drag-drop-input");
	let file;

	dragbutton.onclick = () => {
		draginput.click();
	}
	draginput.addEventListener("change", function () {
		file = this.files[0];
		showFile();
		dropArea.classList.add("active");
	});
	dropArea.addEventListener("dragover", (event) => {
		event.preventDefault();
		dropArea.classList.add("active");
		dragText.textContent = "Release to Upload File";
	});
	dropArea.addEventListener("dragleave", () => {
		dropArea.classList.remove("active");
		dragText.textContent = "Drag & Drop to Upload File";
	});
	dropArea.addEventListener("drop", (event) => {
		event.preventDefault();
		file = event.dataTransfer.files[0];
		showFile();
	});

	function showFile() {
		let fileType = file.type;
		let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
		if (validExtensions.includes(fileType)) {
			let fileReader = new FileReader();
			fileReader.onload = () => {
				let fileURL = fileReader.result;
				let imgTag = `<img src="${fileURL}" alt="">`;
				dropArea.innerHTML = imgTag;
			}
			fileReader.readAsDataURL(file);
		} else {
			dropArea.classList.remove("active");
			alert("It's don't support")
		}
	}
} catch {}
try {
	(function ($) {
		$(document).ready(function () {
			$(".mh-sidebar-menu li").click(function () {
				$(".mh-sidebar-menu li").removeClass("active");
				$(this).addClass("active");
			});

			$(".mh-hamburger").click(function () {
				$(".mh-sidebar-style-2").addClass("active");
			});
			$(".mh-hamburger-nav").click(function () {
				$(".mh-navbar-style-4").toggleClass("active");
			});

			$(".mh-close, .mh-bg-shadow").click(function () {
				$(".mh-sidebar-style-2").removeClass("active");
			});
		});
	}(jQuery));
} catch {}