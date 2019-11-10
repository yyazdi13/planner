var save = $(".save");
var ids = [$("#nine"), $("#ten"), $("#eleven"), $("#twelve"), $("#one"), $("#two"), $("#three"), $("#four"), $("#five")];
var now = moment().format("HHA");

    function date(){
    var NowMoment = moment().format('dddd, MMMM Do');   
    var eDisplayMoment = $('#currentDay');
    eDisplayMoment.text(NowMoment);
    };
    
    function hours(){
        var x = 9;
       for (var i = 0; i < ids.length; i++){
        var m = moment(x, "HHA").format("HHA");
        ids[i].text(m);
        x++;
       };
    };

    function timeBlock(){
        for (var j = 0; j < ids.length; j++){
          var id = ids[j].text();
          if (id === now){
              ids[j].parent().parent().css("background", "lightcoral");
              ids[j].parent().siblings().children(".current").text("current hour");
          }
          else if (id < now){
              ids[j].parent().parent().css("background", "lightblue");
          }
          else if (id > now){
              ids[j].parent().parent().css("background", "lightgreen");
          }
        }   
    };

    save.on("click", function() {
        var value = $(this).parent().siblings().children(".description").val();
        var time = $(this).parent().parent().attr("id");
        localStorage.setItem(time, value);
          });
    
        $(document).ready(function(){
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#1 .description").val(localStorage.getItem("1"));
        $("#2 .description").val(localStorage.getItem("2"));
        $("#3 .description").val(localStorage.getItem("3"));
        $("#4 .description").val(localStorage.getItem("4"));
        $("#5 .description").val(localStorage.getItem("5"));
   });

    date();
    hours();
    timeBlock();