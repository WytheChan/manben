define(['tem'],function(tem){
    function get(){
        $.get('comment.json')
        .done(function(data){
            var comment=tem('comment',{
                comments:data
            });
            $('#comments').html(comment);
        })
    }
    return get;
})