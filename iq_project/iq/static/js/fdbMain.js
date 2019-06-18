$.getJsonData = function(jsonVal, div, tHead, tBody, title)
{
  var headingString = "<tr><th style='text-align:center'>"+title+"</th></tr>";
  var bodyString = "";
  for(var i=0; i<jsonVal.length; i++)
  {

    bodyString += "<tr><td><a href='https://portal.nutanix.com/#/page/docs/details?targetId="+jsonVal[i]+"' target='_blank'>"+jsonVal[i]+"</a></td></tr>";
  }

  $(tHead).append(headingString);
  $(tBody).append(bodyString);
  $(div).css("max-height", "300px").css("overflow-y", "auto").css('overflow-x', '').css('max-width','100%');
}
