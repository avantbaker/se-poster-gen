jQuery(document).ready(function($) {

		// setTimeout(function() {
			

		// 	var	 canvas = $('.template-two'),
		// 	cache_width = canvas.width(),
		// 	a4  = [ 612,  792 ];  // for a4 size paper width and height
		// 	console.log(cache_width);
			
		// 	//create pdf
		// 	function createPDF(){
		// 	 getCanvas().then(function(canvas){
		// 	  var 
		// 		img = canvas.toDataURL("image/png"),
		// 		doc = new jsPDF({
		// 		        unit:'px'
		// 		    });     
		//         doc.addImage(img, 'JPEG', 0, 0, 0 ,0);
		//         doc.save('sportNgin.pdf');
		// 	 });
		// 	 canvas.width(cache_width);
		// 	}
		
		// 	//create canvas object
		// 	function getCanvas(){
		// 	 canvas.width((a4[0]*1.33333) -80).css('max-width','none');
		// 	 return html2canvas(canvas,{
		// 	     imageTimeout:2000,
		// 	     removeContainer:true
		// 	    }); 
		// 	}

		// 	$('#something').on('click',function(){
		// 		 $('body').scrollTop(0);
		// 		 createPDF();
		// 	});

 		//  	}, 5000);

  		// function createPDF() {
			
		// 	var canvasToImage = function(canvas){
		//         var img = new Image();
		//         var dataURL = canvas.toDataURL('image/png');
		//         img.src = dataURL;
		//         return img;
		//     };

		//     var canvasShiftImage = function(oldCanvas,shiftAmt){
		//         shiftAmt = parseInt(shiftAmt) || 0;
		//         if(!shiftAmt){ return oldCanvas; }
		        
		//         var newCanvas = document.createElement('canvas');
		//         newCanvas.height = oldCanvas.height - shiftAmt;
		//         newCanvas.width = oldCanvas.width;
		//         var ctx = newCanvas.getContext('2d');
		        
		//         var img = canvasToImage(oldCanvas);
		//         ctx.drawImage(img,0, shiftAmt, img.width, img.height, 0, 0, img.width, img.height);
		        
		//         return newCanvas;
		//     };
		    
		    
		//     var canvasToImageSuccess = function(canvas){
		//         var pdf = new jsPDF('p','px'),
		//             pdfInternals = pdf.internal,
		//             pdfPageSize = pdfInternals.pageSize,
		//             pdfScaleFactor = pdfInternals.scaleFactor,
		//             pdfPageWidth = pdfPageSize.width,
		//             pdfPageHeight = pdfPageSize.height,
		//             totalPdfHeight = 0,
		//             htmlPageHeight = canvas.height,
		//             htmlScaleFactor = canvas.width / (pdfPageWidth * pdfScaleFactor),
		//             safetyNet = 0;
		        
		//         while(totalPdfHeight < htmlPageHeight && safetyNet < 15){
		//             var newCanvas = canvasShiftImage(canvas, totalPdfHeight);
		//             pdf.addImage(newCanvas, 'png', 0, 0, pdfPageWidth, 0, null, 'NONE');
		            
		//             totalPdfHeight += (pdfPageHeight * pdfScaleFactor * htmlScaleFactor);
		            
		//             if(totalPdfHeight < htmlPageHeight){
		//                 pdf.addPage();
		//             }
		//             safetyNet++;
		//         }
		        
		//         pdf.save('sportNgin.pdf');
		//     };
		    
		//     html2canvas($('.poster-canvas')[0], {
		//         onrendered: function(canvas){
		//             canvasToImageSuccess(canvas);
		//         }
		//     });
		// }

});