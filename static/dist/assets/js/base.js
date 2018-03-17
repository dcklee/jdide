define(['mod/base/user'] , function(o_user){

	return {
		init: function(){
			var self = this;
			self.registerEvent();
			o_user.init();
			
		},
		registerEvent: function(){
			var self = this;
			$("#id_helper_banner .qq-wraper").click(function(){
			});
			$("#id_helper_banner .top-wraper").click(function(){
				window.scrollTo(0 , 0);
			});
			
			if(navigator.userAgent.indexOf("ipad") != -1)
			{
				$("#id_helper_banner li").click(function(){
					$("#id_helper_banner li").removeClass("hover-active");
					$(this).addClass("hover-active");
				});
				
				$("body").click(function(event){
					if($(event.target).hasClass("helper-banner")
						||
						$(event.target).parents(".helper-banner").length != 0)
					{
						return;
					}
					$("#id_helper_banner li").removeClass("hover-active");
				});
			}
			$(".c-img-vcode-common-btn").click(function(){
				var src = $(this).prev().find(".c-img-vcode-common-img").attr("hnb-value");
				src += "&_r" + new Date().valueOf();
				$(this).prev().find(".c-img-vcode-common-img").attr("src" , src);
				$(this).prev().find(".c-img-vcode-common-input").val("");
			});
		}
	};
});