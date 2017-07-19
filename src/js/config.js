require.config({
    paths:{
        jquery:'lib/jQuery',
        common:'common',
        index:'modules/index',
        comment:'modules/comment',
        question:'modules/question',
        tem:'lib/template-web',
    },
    map:{
        '*':{
            css:'lib/css'
        }
    },
    shim:{
        // common:['jquery'],
    }
});