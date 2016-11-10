$(document).ready(function(){
	"use strict";


	var me = {
		colorBody:null,

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
			var red = $('#red').val();
			var green = $('#green').val();
			var blue = $('#blue').val();
			$('input').on('change', function(){
				$('body').css('background-color',"rgb("+ red +","+green+","+blue+")");
				// console.log(red,green,blue);
				me.init();
			});
			
		},
		// },
		// showColorNumber: function(){

		// },
		// showColorhexa: function(){

		// },

	}
	me.init();
});