var msg=document.getElementById('msg');

function chat(){
  document.getElementById('msg').innerHTML = "msg";
}
// Create the dropdown base
$("<select />").appendTo("navlist");

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("navlist select");

// Populate dropdown with menu items
$("navlist a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("navlist select");
})

$("navlist select").change(function() {
  window.location = $(this).find("option:selected").val();
});
