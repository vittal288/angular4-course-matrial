// this cofig will read by lite server
module.exports={
    server:{
        baseDir:"./dist",
        middleware:{
            1:require('connect-history-api-fallback')({
                index:'/index.html',
                verbose:true
            }) //enable routing with hash 
        }
    }
}