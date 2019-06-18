$.getJsonData = function(jsonVal, div, tHead, tBody)
{
  var json = jQuery.parseJSON(jsonVal.replace(/&quot;/g,'"'));
  var keys = Object.keys(json[1]);

  var headingString = "<tr>";
  for(var i=0; i<keys.length; i++)
  {
    headingString += "<th>"+keys[i]+"</th>";
  }
  headingString += "</tr>";
  $(tHead).append(headingString);

  bodyString = "<tr>";
  for(var i=json.length-1; i>=0; i--)
  {
    $.each(keys, function(){
      bodyString += "<td style='text-align:center'>"+json[i][(this)]+"</td>";
    });
    bodyString +="</tr>"
  }
  $(tBody).append(bodyString);
  $(div).css("max-height", "300px").css("overflow-y", "auto")
}
