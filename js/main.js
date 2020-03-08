$(document).ready(function(){

    $.get('https://northwind.now.sh/api/categories', function(data){
        var myArr = data;
        for(let i=0;i<data.length;i++){
            $("#results").append('<div class="result"><h3 class="name">'+data[i].name+'</h3><p class="description">'+data[i].description+'</p></div>')
        }
  
    });

    $("#delete").on('click', function(){
        $("#searchTerm").val('');
        $(this).hide();
        $(".result").show();
    });

    $("#searchTerm").on('keyup', function(){
        $("#results").show();
        if($(this).val().length > 0){
            $("#delete").show();
        }else{
            $("#delete").hide();
        }
        
        var value = $(this).val().toLowerCase();

        $("#results div").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });    
    });

    $(".powerButton").on('click', function(){
        if(confirm('Are you sure you want to exit?')){
            alert('Initializing exit!');
        }
    });
});