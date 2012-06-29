# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
<<<<<<< HEAD
jQuery ->
  split = (val) ->
    val.split /,\s*/
  extractLast = (term) ->
    split(term).pop()
  $("#feature_notes_list").bind("keydown", (event) ->
    event.preventDefault()  if event.keyCode is $.ui.keyCode.TAB and $(this).data("autocomplete").menu.active
  ).autocomplete
    minLength: 0
    source: (request, response) ->
      response $.ui.autocomplete.filter($('#feature_notes_list').data('autocomplete-source'), extractLast(request.term))
  
    focus: ->
      false
    
    select: (event, ui) ->
      terms = split(@value)
      terms.pop()
      terms.push ui.item.value
      terms.push ""
      @value = terms.join(", ")
      false

  $("#feature_notes_list_remote").bind("keydown", (event) ->
    event.preventDefault()  if event.keyCode is $.ui.keyCode.TAB and $(this).data("autocomplete").menu.active
  ).autocomplete
    source: (request, response) ->
      $.getJSON "search.php",
        term: extractLast(request.term)
      , response

    search: ->
      term = extractLast(@value)
      false  if term.length < 2

    focus: ->
      false

    select: (event, ui) ->
      terms = split(@value)
      terms.pop()
      terms.push ui.item.value
      terms.push ""
      @value = terms.join(", ")
      false

=======
 
>>>>>>> remotes/origin/playaround
