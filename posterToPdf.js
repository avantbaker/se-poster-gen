jQuery(document).ready(function($) {

	setTimeout(function() {

		var	 canvas = $('.template-one');
		cache_width = canvas.width(),
		a4  = [ 595.28,  841.89];  // for a4 size paper width and height
		canvasCopy = canvas;
		
		//create pdf
		function createPDF(){
		 getCanvas().then(function(canvas){
		  var 
		  img = canvas.toDataURL("image/png"),
		  doc = new jsPDF({
		          unit:'px', 
		          format:'a4'
		        });     
		        doc.addImage(img, 'JPEG', 20, 20);
		        doc.save('techumber-html-to-pdf.pdf');
		        canvas.width(cache_width);
		 });
		}
		 
		//create canvas object
		function getCanvas(){
		 canvasCopy.width((a4[0]*1.33333) -80).css('max-width','none');
		 return html2canvas(canvasCopy,{
		     imageTimeout:2000
		    }); 
		}

		$('#createTemp').on('click',function(){
			 $('body').scrollTop(0);
			 createPDF();
		});

  	}, 5000);

});