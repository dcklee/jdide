//Theme Options
var themeElements = {
	submitButton: '.submit-button',
};
var tpj=jQuery;
tpj.noConflict();
var revapi3;
// tpj(document).ready(function() {
// 	$("#calendar").kendoDatePicker();
//     if(tpj("#rev_slider_3_1").revolution == undefined){
//         revslider_showDoubleJqueryError("#rev_slider_3_1");
//     }else{
//         revapi3 = tpj("#rev_slider_3_1").show().revolution({
// 	        sliderType:"standard",
// 	        jsFileLocation:"//university.cactusthemes.com/wp-content/plugins/revslider/public/assets/js/",
// 	        sliderLayout:"fullwidth",
// 	        dottedOverlay:"none",
// 	        delay:10000,
// 	        navigation: {
// 	            keyboardNavigation:"off",
// 	            keyboard_direction: "horizontal",
// 	            mouseScrollNavigation:"off",
// 	            onHoverStop:"off",
// 	            touch:{
// 	                touchenabled:"on",
// 	                swipe_threshold: 0.7,
// 	                swipe_min_touches: 1,
// 	                swipe_direction: "horizontal",
// 	                drag_block_vertical: false
// 	            }
// 	            ,
// 	            arrows: {
// 	                style:"hesperiden",
// 	                enable:true,
// 	                hide_onmobile:false,
// 	                hide_onleave:false,
// 	                tmp:'',
// 	                left: {
// 	                    h_align:"left",
// 	                    v_align:"center",
// 	                    h_offset:20,
// 	                    v_offset:0
// 	                },
// 	                right: {
// 	                    h_align:"right",
// 	                    v_align:"center",
// 	                    h_offset:20,
// 	                    v_offset:0
// 	                }
// 	            }
// 	        },
// 	        visibilityLevels:[1240,1024,778,480],
// 	        gridwidth:1140,
// 	        gridheight:800,
// 	        lazyType:"none",
// 	        shadow:0,
// 	        spinner:"spinner0",
// 	        stopLoop:"off",
// 	        stopAfterLoops:-1,
// 	        stopAtSlide:-1,
// 	        shuffle:"off",
// 	        autoHeight:"off",
// 	        disableProgressBar:"on",
// 	        hideThumbsOnMobile:"off",
// 	        hideSliderAtLimit:0,
// 	        hideCaptionAtLimit:0,
// 	        hideAllCaptionAtLilmit:0,
// 	        debugMode:false,
// 	        fallbacks: {
// 	            simplifyAll:"off",
// 	            nextSlideOnWindowFocus:"off",
// 	            disableFocusListener:false,
// 	        }
//         });
//     }
// }); /*ready*/
//Loaded
jQuery(document).ready(function($) {
	var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
    var htmlDivCss=".tp-caption.big_black_222,.big_black_222{font-size:64px;line-height:75px;font-weight:700;font-family:Roboto;color:#ffffff;text-decoration:none;background-color:transparent;border-width:0px;border-color:rgb(0,0,0);border-style:none;text-shadow:none}";
    if(htmlDiv) {
        htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
    }else{
        var htmlDiv = document.createElement("div");
        htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
        document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
    }
    var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3A%23000%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3A%23000%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3A%23fff%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82c%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce82d%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A");
    var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
    if(htmlDiv) {
        htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
    }
    else{
        var htmlDiv = document.createElement('div');
        htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
        document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
    }
	$(themeElements.submitButton).not('.disabled').click(function() {
		var form=$($(this).attr('href'));
		
		if(!form.length || !form.is('form')) {
			form=$(this).parent();
			while(!form.is('form')) {
				form=form.parent();
			}
		}
		form.submit();		
		return false;
	});
	setREVStartSize();
	// window._wpemojiSettings = {"baseUrl":"http:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji":"http:\/\/university.cactusthemes.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.4.1"}};
 //    	!function(a,b,c){function d(a){var c,d=b.createElement("canvas"),e=d.getContext&&d.getContext("2d");return e&&e.fillText?(e.textBaseline="top",e.font="600 32px Arial","flag"===a?(e.fillText(String.fromCharCode(55356,56806,55356,56826),0,0),d.toDataURL().length>3e3):"diversity"===a?(e.fillText(String.fromCharCode(55356,57221),0,0),c=e.getImageData(16,16,1,1).data.toString(),e.fillText(String.fromCharCode(55356,57221,55356,57343),0,0),c!==e.getImageData(16,16,1,1).data.toString()):("simple"===a?e.fillText(String.fromCharCode(55357,56835),0,0):e.fillText(String.fromCharCode(55356,57135),0,0),0!==e.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple:d("simple"),flag:d("flag"),unicode8:d("unicode8"),diversity:d("diversity")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.simple&&c.supports.flag&&c.supports.unicode8&&c.supports.diversity||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);

});

var setREVStartSize=function(){
	try{
	    var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
	    e.c = jQuery('#rev_slider_3_1');
	    e.gridwidth = [1140];
	    e.gridheight = [368];
	    e.sliderLayout = "fullwidth";
	    if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})

	}catch(d){
	    console.log("Failure at Presize of Slider:"+d);
	}
};

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}

/*filter*/
jQuery('.courses-filter-part .course-more').on("click", function(){
	jQuery(this).prev().find('.course-option-add').slideToggle();
})
jQuery('.course-option span').on("click", function(){
	jQuery(this).closest('.courses-filter-part').find('.course-option span').each(function () {
		jQuery(this).removeClass('active');
	});
	jQuery(this).addClass('active');
})