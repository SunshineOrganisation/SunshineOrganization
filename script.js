  // Contact form script //

  $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
      url:"https://script.google.com/macros/s/AKfycbxEpYc_sgKdtUOaj3VwlHH63rGFXD5aORdO9IhqtUTF-5vrkxoTsA9VYSUeSaLaE5-R/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
      alert("Your message sent successfully, Our team will reach you shortly.")
      window.location.reload()
      //window.location.href="https://google.com"
      },
      error:function (err){
      alert("Contact message not sent")
    
      }
   })
})

  // Progress-bar value script //

    $('.fund-per').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                duration: 1000,
                step: function () {
                    $this.attr('per', ('₹') + Math.floor(this.animatedValue) * "100");
                },
                complete: function () {
                    $this.attr('per', ('₹') + Math.floor(this.animatedValue) * "100");
                }
            });
        });
 
 // Payment method option script //
 
$(document).ready(function(){
$('#myselection').on('change', function(){
    	var optionvalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+optionvalue).show();
    });
});

    
// Donate form script //

$("#donate-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyTAxE_Xs-ycQ4gcY2KpEN1pOvOGdBT3vTTUZ-PFDfg8b_1CA9xxWMIdRpYF2iN66DufA/exec",
      data:$("#donate-form").serialize(),
      method:"post",
      success:function (response){
      alert("Thank you, the form submitted successfully and we have received your donation")
      window.location.reload()
      //window.location.href="https://google.com"
      },
      error:function (err){
      alert("If your Payment was successful in your payment app, then we received your donation, but there is something wrong, please try again later")
    
      }
   })
})

// more less script //
var showChar = 300;

	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
	  var content = $(this).html();
	  var textcontent = $(this).text();
	  if (textcontent.length > showChar) {
	    var c = textcontent.substr(0, showChar);
	    var html = '<span class="container"><span>' + c + '</span>' + '<span class="moreelipses">' + ellipsestext + '</span></span><span class="morecontent">' + content + '</span>';
	    $(this).html(html);
$(this).after('<a href="" class="morelink">' + moretext + '</a>');
	  }
	});
	$(".morelink").click(function() {
	  if ($(this).hasClass("less")) {
	    $(this).removeClass("less");
	    $(this).html(moretext);
        $(this).prev().children('.morecontent').fadeToggle(500, function(){
          $(this).prev().fadeToggle(500);
        });
	  } else {
	    $(this).addClass("less");
	    $(this).html(lesstext);
        $(this).prev().children('.container').fadeToggle(500, function(){
          $(this).next().fadeToggle(500);
        });
	  }
	  return false;
	});