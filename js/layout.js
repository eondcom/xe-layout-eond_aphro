jQuery(function($){
// sketchbook's Toggle1 (from XE UI)
	var tgC = $('.tg_cnt');
	$('.tg_btn').click(function(){
		var t = $(this);
		var h = t.attr('href');
		if(t.next(h).is(':visible')) {
			t.focus().next().fadeOut(200);
		} else {
			tgC.filter(':visible').hide();
			t.next().fadeIn(200).find('a,input#uid,button:not(.tg_blur)').eq(0).focus();
		};
		return false;
	});
	function tgClose() {
		var closeId = tgC.filter(':visible').attr('id');
		tgC.fadeOut(200).prev('[href="#'+closeId+'"]').focus();
	};
	$(document).keydown(function(event){
		if(event.keyCode != 27) return true; // ESC
		return tgClose()
	});
	$('.tg_blur').focusin(tgClose);
	$('.tg_close,#install_ng .close').click(tgClose);




});

/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a){a.cookie=function(g,f,k){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(f))||f===null||f===undefined)){k=a.extend({},k);if(f===null||f===undefined){k.expires=-1}if(typeof k.expires==="number"){var h=k.expires,j=k.expires=new Date();j.setDate(j.getDate()+h)}f=String(f);return(document.cookie=[encodeURIComponent(g),"=",k.raw?f:encodeURIComponent(f),k.expires?"; expires="+k.expires.toUTCString():"",k.path?"; path="+k.path:"",k.domain?"; domain="+k.domain:"",k.secure?"; secure":""].join(""))}k=f||{};var b=k.raw?function(i){return i}:decodeURIComponent;var c=document.cookie.split("; ");for(var e=0,d;d=c[e]&&c[e].split("=");e++){if(b(d[0])===g){return b(d[1]||"")}}return null}})(jQuery);