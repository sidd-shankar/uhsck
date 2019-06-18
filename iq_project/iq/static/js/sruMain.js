$.getSruJsonData = function(jsonVal, div, tHead, tBody)
{
  var json = jQuery.parseJSON(jsonVal.replace(/&quot;/g,'"'));
  var headingString = "<tr>";

  headingString += "<th style='text-align:center'>User</th>";
  headingString += "<th style='text-align:center'>Average Acrolinx Score</th>";
  headingString += "<th style='text-align:center'>Average Clarity Score</th>";
  headingString += "</tr>";

  $(tHead).append(headingString);

  bodyString = "<tr>";
  for(var i=0; i<=json.length-1; i++)
  {
    bodyString += "<td style='text-align:center'>"+json[i]['user']+"</td>";
    bodyString += "<td style='text-align:center'>"+json[i]['acroScore']+"</td>";
    bodyString += "<td style='text-align:center'>"+json[i]['clarityScore']+"</td>";
    bodyString +="</tr>"
  }
  $(tBody).append(bodyString);
  $(div).css("max-height", "300px").css("overflow-y", "auto")
}
