window.pjax_load = function() {
	$(function() {
	  $("#notes th a, #notes .pagination a").live("click", function() {
	    $.getScript(this.href);
	    return false;
	  });
	  $("#notes_search input").keyup(function() {
	    $.get($("#notes_search").attr("action"), $("#notes_search").serialize(), null, "script");
	    return false;
	  });
	});

}

$(document).ready(function(){

	   window.pjax_load();
	    
	   $('#container').on('pjax:end', function() { window.pjax_load(); });


});


$(function() {
  $("#note_label_tokens").tokenInput("/labels.json", {
    crossDomain: false,
    prePopulate: $("#note_label_tokens").data("pre"),
    theme: "facebook"
  });
});