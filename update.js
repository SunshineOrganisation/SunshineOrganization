 <!------------- Payment method option script-------------->
 
$(document).ready(function(){
$('#myselection').on('change', function(){
    	var optionvalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+optionvalue).show();
    });
});

    
     <!----------------- Donate form script ------------------>

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
