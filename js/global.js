$( document ).ready(function() {

	$('.bt-stock').on('click', function(){
	
		var value = $(this).siblings(".value");
		$.ajax({

			url: $(this).parent().parent().data("recipe")+'/edit-stock/'+$(this).parent().data("weight")+'/'+$(this).data("order"),

			success: function (data) {
				
				value.text(data);
			},
			error: function() {
				alert('Changement de stock impossible');
			}
		});
	});
});