$(document).ready(function()
{
  //Form
  $('input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], textarea, select').addClass('form-control');
  
  $('input[type="checkbox"]').filter(':checked').parent('label').addClass('active');
  $('input[type="checkbox"]').click(function(){ $(this).parent('label').toggleClass('active'); });  
  
  $('input[type="radio"]').filter(':checked').parent('label').addClass('active'); 
  $('input[type="radio"]').click(function(){ $('input[id="' + $(this).attr('id') + '"]').parent('label').removeClass('active'); $(this).parent('label').addClass('active'); });   
  
  $('input[data-rule-email]').prop('type', 'email');	
  $('input[data-rule-digits]').prop('type', 'tel');
  $('input[data-mask]').prop('type', 'tel');
  
  //Imagem
  $('img').addClass('img-responsive');
  
  //Calendário
  $('*[data-toggle="datepicker"]').attr('readonly', 'true');
  
  //Tootip
  $('*[data-toggle="tooltip"]').tooltip();
  
  //Popover
  $('*[data-toggle="popover"]').popover();
  
  //Collapse
  $('*[data-toggle="collapse"]').click(function()
  {
	//Verifica
	if($(this).hasClass('collapsed'))
	{
	  //Abre
	  $(this).find('i').removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
	}
    else
	{
	  //Fecha
	  $(this).find('i').removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
	}
  });
  
  //Back Top
  $('*[data-toggle="backtop"]').click(function()
  {
	//Posiciona
	$('html, body').animate({ scrollTop:0 }, 600);
  });
  
  //Back Top
  $(document).scroll(function()
  {
	//Verifica
	if($(this).scrollTop() > 600)
	{
	  //Exibe
	  $(this).find('*[data-toggle="backtop"]').show();
	}
	else
	{
	  //Oculta
	  $(this).find('*[data-toggle="backtop"]').hide();
	}
  });
  
  //Loading
  $('a[data-loading]').click(function()
  {
	//Exibe
	$('body').append('<div class="body-loader"></div>');
	$('.body-loader').fakeLoader();
  });
  
  //Over
  $('img[data-over]').each(function()
  {
	//Altera
	$(this).attr('onclick', 'this.src = \'' + $(this).attr('src').replace('.jpg', '_over.jpg').replace('.png', '_over.png') + '\'');
	$(this).attr('onmouseover', 'this.src = \'' + $(this).attr('src').replace('.jpg', '_over.jpg').replace('.png', '_over.png') + '\'');
	$(this).attr('onmouseout', 'this.src = \'' + $(this).attr('src').replace('_over.jpg', '.jpg').replace('_over.png', '.png') + '\'');
  });
  
});