var $recent = $('#recent');


$(function(){


	/*var animationSupport = false;

	//if( body.style.animationName !== undefined ) { animationSupport = true; }
	if( animationSupport === false ) {
		//step one css
		var partOne_One = {  width: '20px', height: '5px',  left: '50%', 'margin-left': '-10px', top: '174px',  'border-radius': '0', background: '#217dbb' };
		var partTwo_One = { width: '44px', height: '44px', left: '50%', 'margin-left': '-24px',  top: '130px',  border: '2px solid #3498DB', 'border-radius': '4px' };
		var partThree_One = { width: '34px',  height: '150px',  left: '50%',  'margin-left': '-17px',  top: '75px',  'border-radius': '5px' };
		
		//step two css
		var partOne_Two = {  width: '20px', height: '20px',  left: '50%', 'margin-left': '-10px', top: '205px',  'border-radius': '60px', background: '#217dbb' };
		var partTwo_Two = { width: '60px', height: '115px', left: '50%', 'margin-left': '-30px',  top: '79px',  border: '0 solid #3498DB' };
		var partThree_Two = { width: '86px',  height: '170px',  left: '50%',  'margin-left': '-43px',  top: '64px',  'border-radius': '10px' };
		
		//replace keyframe animation with jquery animation
		function noKeyFrames(){
		  //watch 
		  $('.part-1').css(partOne_One);
		  $('.part-2').css(partTwo_One);
		  $('.part-3').css(partThree_One);
		  
		  //phone
		  setTimeout(function() {
			$('.part-1').prop('style', '').animate(partOne_Two, 300);
			$('.part-2').prop('style', '').animate(partTwo_Two, 300);
			$('.part-3').animate(partThree_Two, 300);
		  }, 400); 
		  
		  //tablet
		  setTimeout(function() {
			$('.part-1').animate(partOne_Three, 300);
			$('.part-2').animate(partTwo_Three, 300);
			$('.part-3').animate(partThree_Three, 300);
		  }, 6000);
		  
		  //laptop
		  setTimeout(function() {
			$('.part-1').animate(partOne_Four, 300);
			$('.part-2').animate(partTwo_Four, 300);
			$('.part-3').animate(partThree_Four, 300);
		  }, 6000);
		  
		  //desktop
		  setTimeout(function() {
			$('.part-1').animate(partOne_Five, 300);
			$('.part-2').animate(partTwo_Five, 300);
			$('.part-3').animate(partThree_Five, 300);
		  }, 6000);/
		}
		noKeyFrames();
	 }
	*/	

	//portfolio scroll

	$('.portfolio').on('click', function() {
		$('html,body').animate({
          scrollTop: $recent.offset().top
        }, 1500);
		return false;
	});

	//add bg to inputs on blur if value is entered

	$('input[type="text"], textarea').on('blur', function() {
		var $this = $(this);
		if(!$this.val()) {
			$this.css('background', 'transparent');
			$this.siblings('label').removeClass('filled');
		} else {
			$this.css('background', '#fff');
			$this.siblings('label').addClass('filled');
		}
	});
	

	//nav toggle
	
	$('.navToggle').on('click', function() {
		$(this).toggleClass('active');
		setTimeout(function() {
			$('#mainNav').toggleClass('open');
		}, 200);
		return false;
	});

	//toggle cats menu
	
	$('.catLink').on('click', function() {
		$(this).toggleClass('catagory');
		
		return false;
	});

	//shorten text and add elipse on blog roll
	
	$('.post-item p').each(function() {
		var $this = $(this);
		var post = $this.text();
		var maxLength = 150;
		if (post.length > maxLength) {
	        post = post.substr(0,maxLength-3) + "...";
	    }
	    $this.text(post);
	    return post;
	});
	
	
	
});