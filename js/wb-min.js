$(function(){Parse.$=jQuery,Parse.initialize("4CeVrA0hth3HLew7yEGXE8Ms2L003vsfc9XRGfys","hwZbAeWsB03GDc0GjhvyVIvOh1UeXMb41XnGM0Mh");var e=Parse.Object.extend("Wb"),t=new Parse.Query(e),n=Parse.View.extend({tagName:"div",template:_.template($("#guide-template").html()),initialize:function(){},render:function(){$(this.el).html(this.template())},destroy:function(){$(this.el).html("")}}),i=Parse.View.extend({tagName:"div",template:_.template($("#white-board-template").html()),events:{"click #get":"get","click #update":"update"},initialize:function(){},render:function(){$(this.el).html(this.template()),this.get()},get:function(){var e=this;t.equalTo("boardId",this.boardId),t.find({success:function(t){if(0!=t.length){var n=t[0];e.$("#board-content").val(n.get("content"))}},error:function(){}})},update:function(){var n=this;t.equalTo("boardId",n.boardId),t.find({success:function(t){if(0==t.length){var i=new e;i.save({boardId:n.boardId,content:n.$("#board-content").val()},{success:function(){},error:function(){}})}else t[0].save(null,{success:function(e){e.set("content",n.$("#board-content").val()),e.save()},error:function(e,t){console.log(t)}})},error:function(){}})}}),o=Parse.Router.extend({routes:{":boardId":"openHouse","":"defaultRoute"},initialize:function(){},openHouse:function(e){a.destroy(),r.boardId=e,r.render()},defaultRoute:function(){a.render()}});new o;var a=new n({el:$(".guide")}),r=new i({el:$(".white-board")});Parse.history.start()});