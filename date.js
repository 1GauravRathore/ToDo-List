// jshint esversion:6

 module.exports.getDate=getDate;
function getDate() {
  const today = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
}

exports.getDay= function() {
  const today = new Date();
  const options = {
    weekday: 'long',
  };

return  today.toLocaleDateString("en-US", options);
}
 
