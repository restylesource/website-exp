(function(e){e.fn.extend({moreText:function(t){var n={},t=e.extend(n,t);return this.each(function(n){var r=t,i=e(this),s=i.parents(".block").find(".more-text");s.hide();i.click(function(e){if(s.is(":hidden")){s.show();i.text("< Less")}else{s.hide();i.text("More >")}e.preventDefault()})})}})})(jQuery);