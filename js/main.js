$(function ()
{
	// Console Log -- Shorthand
	function log()
	{
		for( a in arguments )
			console.log( arguments[ a ] );
	}
	
	// Port The Log Function To The Global `window` Object
	window.log	= log;
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// Do Some jQuery..
	(function ($)
	{
		var something = $( '#whatever' );
		
		// [...]
	})(jQuery);
	
	
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// Trigger `Theme_Is_Ready` Event
	$(document).trigger( 'theme_is_ready' );
});