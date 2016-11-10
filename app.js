$(document).ready(function(){
	"use strict";


	var me = {
		colorBody:null,
		red:null,
		green:null,
		blue:null,

		init: function(){
			me.range();
			me.changeBodyColor();
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
			$('input').on('change', function(){
				$('body').css('background-color',"rgb("+ me.red +","+me.green+","+me.blue+")");
				// console.log(red,green,blue);
				me.showColorNumber();
				me.changeBodyColor();
			});

		},
		showColorNumber: function(){
			$('#colorValue').html(" rgb ,"+me.red+","+me.green+","+me.blue+", to ,");
		},
		// showColorhexa: function(){

		// },

	}
	me.init();
});