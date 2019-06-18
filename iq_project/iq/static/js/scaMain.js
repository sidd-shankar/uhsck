$.getSruJsonData = function(jsonVal, div, tHead, tBody)
{
  var json = (jsonVal);
  // To avoid the jumbling of Keys while using Object.keys() creating an array
  // of keys in required order
  var keys = ['time', 'document', 'acrolinx_score', 'issues', 'word_count', 'user',
              'content_group']

  var headingString = "<tr style='text-transform: capitalize;'>";
  for(var i=0; i<keys.length; i++)
  {
    headingString += "<th style='text-align:center'>"+keys[i].replace('_', ' ')+"</th>";
  }
  headingString += "</tr>";
  $(tHead).append(headingString);

  bodyString = "";
  for(var i=0; i<=json.length-1; i++)
  {
    bodyString +="<tr>"
    $.each(keys, function(){
      bodyString += "<td class='"+(this)+"' style='text-align:center; word-wrap:normal; word-break:break-all'>"+json[i][(this)]+"</td>";
    });
    bodyString +="</tr>"
  }

  $(tBody).append(bodyString);
  $(div).css("max-height", "600px").css("overflow-y", "auto");

}
