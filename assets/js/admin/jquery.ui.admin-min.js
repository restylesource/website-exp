(function(e){e.fn.extend({admin:function(t){var n={width:650,height:900,resize:!1,modal:!0,title:!1,dialogClass:"",position:"center center",buttonPosition:"left bottom",buttonText:"Edit",buttonOffset:"0 0",editType:"image",extraOptions:!1,pageBlockId:0},t=e.extend(n,t);return this.each(function(n){var r=t,i=e(this),s=e("<a />",{"class":"button-admin "+r.buttonPosition}).attr({href:"ajax.html"}).css({margin:r.buttonOffset}).text(r.buttonText).appendTo(i);if(typeof source_id!="undefined")var o="source_id="+source_id;else if(typeof page_id!="undefined"){var o="id="+page_id;i.attr("data-page-block-id")!=="undefined"&&(o=o+"&page_block_id="+i.attr("data-page-block-id"))}var u="ajax/ajax-admin-edit-"+r.editType+".php?"+o;s.click(function(t){e.attrFn&&(e.attrFn.text=!0);var n=e('<div style="display:none" class="loading"></div>').appendTo("body"),i=e('<div class="ajax-content-wrapper"></div>').appendTo(n),s=e('<div class="ajax-loading-indicator"></div>').appendTo(n).hide();r.extraOptions==1&&n.dialog({width:r.width,height:r.height,resize:r.resize,modal:r.modal,title:r.title,dialogClass:"adminAjax "+r.dialogClass,position:r.position,buttons:{Update:{text:"Update","class":"button primary",click:function(){e("form").submit();s.fadeIn(200)}},Cancel:{text:"Cancel","class":"button cancel",click:function(){e(this).dialog("close");n.remove()}},Delete:{text:"Delete","class":"button delete",click:function(){var t=confirm("Are you sure you want to delete?  This can not be undone.");if(t){e("#action").val("delete");s.fadeIn(200);e("form").submit()}}},MoveUp:{text:"Move Up","class":"button primary moveup",click:function(){e("#action").val("up");s.fadeIn(200);e("form").submit()}},MoveDown:{text:"Move Down","class":"button primary movedown",click:function(){e("#action").val("down");s.fadeIn(200);e("form").submit()}}}});r.extraOptions==0&&n.dialog({width:r.width,height:r.height,resize:r.resize,modal:r.modal,title:r.title,dialogClass:"adminAjax "+r.dialogClass,position:r.position,buttons:{Update:{text:"Update","class":"button primary",click:function(){e("form").submit();s.fadeIn(200)}},Cancel:{text:"Cancel","class":"button cancel",click:function(){e(this).dialog("close");n.remove()}}}});i.load(u,{},function(t,r,i){n.removeClass("loading");var s=n.parents(".ui-dialog");s.height()>e(window).height()&&n.height(e(window).height()*.7);n.dialog("option","position",["center","center"])});e("body").delegate(".cancel","click",function(){e(this).closest(n).dialog("close")});t.preventDefault();e(window).resize(function(){var t=n.parents(".ui-dialog");t.height()>e(window).height()&&n.height(e(window).height()*.7);n.dialog("option","position",["center","center"])})})})}})})(jQuery);