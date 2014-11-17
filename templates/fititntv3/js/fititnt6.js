jQuery(document).ready(function($) {
  $('#jform_contact_emailmsg').attr('placeholder', 'Use um assunto o mais descritivo possível');
  $('#menu-principal a').click(function () {
    _gaq.push(['_trackEvent', 'Menu Topo', $(this).attr('href')]);
  });
  $('#sidebar a').click(function () {
    _gaq.push(['_trackEvent', 'Sidebar', $(this).attr('href')]);
  });
  $('.navegacao-complementar a').click(function () {
    _gaq.push(['_trackEvent', 'Navegação Complementar', $(this).attr('href')]);
  });
  $('[role="main"] a').click(function () {
    _gaq.push(['_trackEvent', 'Main', $(this).attr('href')]);
  });
  
  $("#skip > a").click(function() {
	jQuery('#content').focus();
});
});