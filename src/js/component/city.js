$(function () {
    var cityObj={};
    $.get('../city.json').done(function (data) { 
        var name=[]
        var first=[]
     $.each(data,function(index,item){
         var zimu=item.pinyin.slice(0, 1)
         first.push(zimu)
         if(!cityObj[zimu]){
             cityObj[zimu]=[]
         }
         cityObj[zimu].push(item.name)
          });
         var zimu2=[];
         var zimu3=[];
        $.each(cityObj,function(index,item){
            zimu2.push(index)
        })
        zimu3=zimu2.sort();
        $.each(zimu3,function(index,item){
           var nameLetter=$('<dl class="city-name"><dt class="name-letter" id='+item+ '>'+item+'</dt></dl>') 
          $('.city').append(nameLetter)
           var cityName=cityObj[item]
        var dl=$('.city-name')
           $.each(cityName,function(index,item){
              var dd=$('<dd><a href="#">'+item+'</a></dd>');
              dl.append(dd)
           })
        });
       var letter = [];
         for (var i in first.sort()) {
            if (letter.indexOf(first.sort()[i]) == -1) {
                letter.push(first.sort()[i])
            }
        }
         for(var i=0;i<letter.length;i++){
             $('.letter').append('<li><a href="#'+letter[i]+'">'+letter[i]+'</a></li>')
         }
          $('.letter li a').click(function(){
        $('.cover').text($(this).text()).stop().fadeIn(600);
        setTimeout(function(){
            $('.cover').stop().fadeOut('slow')
        },800)
        
    })
    });

   

});