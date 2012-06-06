# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

jQuery ->


  $('.best_in_place').best_in_place()

  

  # Ajax sorting and pagination on click
  $('#notes td.sortable a, #notes .pagination a').live('click', ->
    $.getScript(this.href)
    false
  )
  # Ajax search on submit
  $('#notes_search').submit( ->
    $.get(this.action, $(this).serialize(), null, 'script')
    false
  )
  # Ajax search on keyup
  $('#notes_search input').keyup( ->
    $.get($("#notes_search").attr("action"), $("#notes_search").serialize(), null, 'script')
    false
  )