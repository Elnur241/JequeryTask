$( document ).ready(function() {
  if(localStorage.getItem("tasks")==null){
    localStorage.setItem("tasks",JSON.stringify([]));
    $("#buttonDel").addClass("d-none");
  $("#buttonDelSel").addClass("d-none");
  }
  else if(JSON.parse(localStorage.getItem("tasks")).length==0){
    $("#buttonDel").addClass("d-none");
    $("#buttonDelSel").addClass("d-none");
  }
  else{
   taskfromstorage=JSON.parse(localStorage.getItem("tasks"));
   JSON.parse(localStorage.getItem("tasks"));
  for (const iterator of taskfromstorage) {
   var span=$("<span>" +iterator.deadline+"</span>").addClass('badge bg-danger');
   $("#taskwrapper").append(($("<li>"+iterator.text +"</li>")).addClass("list-group-item")
  .append(span));
  }
  $("#buttonDel").removeClass("d-none");
  $("#buttonDelSel").removeClass("d-none");
  }
  
  $(document).on("click","#button",function(){
    let inputval=$(".form-control").val();
    let date=$("#datetime").val()
  var li=("<li>"+inputval +"</li>");
  if(inputval==""||date==""){
    alert("please fill the inputs");
  }else{
    let task={
      text:inputval,
      deadline:date
    }
     taskfromstorage=JSON.parse(localStorage.getItem("tasks"));
    taskfromstorage.push(task);
    localStorage.setItem("tasks",JSON.stringify(taskfromstorage));
    var span=$("<span> </span>").html($("#datetime").val()).addClass('badge bg-danger');
    $("#taskwrapper").append(($("<li>"+inputval +"</li>")).addClass("list-group-item")
  .append(span));
  $(".form-control").val("");
  $("#buttonDel").removeClass("d-none");
  $("#buttonDelSel").removeClass("d-none");
  }
  })
  $(document).on("click","li",function(){
    $(this).toggleClass("active");
    console.log($(this))
    })
  $(document).on("click","#buttonDel",function(){
    $("#taskwrapper").html("").removeClass("list-group-item");
  localStorage.setItem("tasks",JSON.stringify([]));
  $("#buttonDel").addClass("d-none");
  $("#buttonDelSel").addClass("d-none");
  })
  $(document).on("click","#buttonDelSel",function(){
  
    $("#taskwrapper li.active").removeClass("list-group-item");
  
    for (const iterator of taskfromstorage) {
      if($("#taskwrapper li.active").text()===(iterator.text+iterator.deadline)){ 
        let index=$(this).index();
        console.log(index)
        taskfromstorage.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(taskfromstorage));
        if(taskfromstorage.length==1){
          localStorage.setItem("tasks",JSON.stringify([]));
        }
       
      }
     
    }
    $("#taskwrapper li.active").html("");
    if(($("#taskwrapper li.list-group-item").length)==0){
      $("#buttonDel").addClass("d-none");
      $("#buttonDelSel").addClass("d-none");
    }
  }) 
});

