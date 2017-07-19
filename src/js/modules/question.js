define(['tem'],function(tem){
    function get(){
        $.get('question.json')
        .done(function(data){
            var question=tem('question',{
                questions:data
            })
            $('#questions').html(question);
        });
    }
    return get;
});