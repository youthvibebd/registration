$( function () {
	$( '.fancybox,a[href*=\'youtube.com/watch\']' ).fancybox();

	findAndReplaceDOMText( document.body, {
		preset: 'prose',
		find: /\//g,
		replace: 'a',
		wrap: 'span',
		wrapClass: 'lightning-bolt notranslate',
	} );

	$( 'select.placeholder-font-pwrup' ).change( function () {
		if ( $( this ).val() === '' ) {
			$( this ).addClass( 'font-pwrup' );
		} else {
			$( this ).removeClass( 'font-pwrup' );
		}
	} );

	$( '.btn-neon' )
		.on( 'mouseenter', function () {
			$( this ).css( 'animationName', 'none' );
		} )
		.on( 'mouseleave', function () {
			var duration = 20,
				delay = Math.random() * 10,
				direction = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';
			$( this ).css( {
				animationName: 'neon-flicker',
				animationDuration: duration + 's',
				animationDelay: delay + 's',
				animationIterationCount: 'infinite',
				animationDirection: direction,
				animationTimingFunction: 'steps(1)',
			} );
		} )
		.trigger( 'mouseleave' );

	$( 'a[href="#signup"]' ).click( function () {
		$( '#form-newsletter .btn' ).trigger( 'click' );
	} );

	$( window ).scroll( function () {
		if ( $( window ).scrollTop() > 100 ) {
			$( '#header' ).addClass( 'bg-transparent-black' );
			$( '#menu-main' ).removeClass( 'pt-3 pb-4' ).addClass( 'mt-n2' );
		} else {
			$( '#header' ).removeClass( 'bg-transparent-black' );
			$( '#menu-main' ).addClass( 'pt-3 pb-4' ).removeClass( 'mt-n2' );
		}
	} );

	$( '.btn-drop>a' ).on( 'click', function ( e ) {
		e.preventDefault();
		$( this ).next( 'ul' ).fadeToggle();
	} );

	$('.all-merch').on('click', function(e){
		e.preventDefault();
		$('.merch').addClass('seeall');
		$(this).hide();
	});

	$('.slider-hero').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.content-hero',
	});

	$('.content-hero').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-hero',
	});

	// $('.slider-homepage-news').slick({
	// 	dots: true,
	// 	arrows: false,
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	mobileFirst: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings:  "unslick"
	// 		}
	// 	]
	// });

	$(window).resize(function(){
		if($( window ).width() < 992){
			$('.slider-homepage-news')[0].slick.refresh();
		}
	});
	
} );
