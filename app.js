$(document).ready(function(){
	"use strict";

	var me = {
		red:null,
		green:null,
		blue:null,
		alpha:1,

		init: function(){
			me.range();
			me.changeBodyColor();
			me.showColorhexa();
		},
		range: function(){
			$('.range').text('0');
			$('.range').on('input', function() {
				var set = $(this).val();
				$(this).next().text(set);
			});
		},
		changeBodyColor: function(){
			me.red = $('#red').val();
			me.green = $('#green').val();
			me.blue = $('#blue').val();
			me.alpha = $('#alpha').val();
			$('input').on('change', function(){
				$('body').css('background-color',"rgba("+ me.red +","+me.green+","+me.blue+","+me.alpha+")");
				me.changeBodyColor();
				me.showColorNumber();
				me.showColorhexa();
			});

		},
		showColorNumber: function(){
			$('#colorValue').val(""+me.red+","+me.green+","+me.blue+"");
			$('#colorValue').text(""+me.red+","+me.green+","+me.blue+"");
		},
		showColorhexa: function(){
			var hex = me.rgb2hex( $('#colorValue').val()); 
			$('#result').val( hex );
		},
		rgb2hex:function (){
			return "#" + ((1 << 24) + (me.red << 16) + (me.green << 8) + (me.blue << 0)).toString(16).slice(1);
		}
	}
	me.init();
});