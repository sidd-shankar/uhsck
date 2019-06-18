$.getSruJsonData = function(jsonVal, div, tHead, tBody)
{
  var json = jQuery.parseJSON(jsonVal.replace(/&quot;/g,'"'));
  // To avoid the jumbling of Keys while using Object.keys() creating an array
  // of keys in required order
  var keys = ['userID','username','docID','document','score','rank']

  var headingString = "<tr style='text-transform: capitalize;'><th>Sl No</th>";
  for(var i=0; i<keys.length; i++)
  {
    headingString += "<th style='text-align:center'>"+keys[i].replace('_', ' ')+"</th>";
  }
  headingString += "</tr>";
  $(tHead).append(headingString);

  bodyString = "";
  for(var i=0; i<=json.length-1; i++)
  {
    bodyString +="<tr><td>"+(i+1)+"</td>";
    $.each(keys, function(){
      bodyString += "<td style='text-align:center; word-wrap:normal'>"+json[i][(this)]+"</td>";
    });
    bodyString +="</tr>"
  }
  $(tBody).append(bodyString);
  $(div).css("max-height", "600px").css("overflow-y", "auto")
}
