const path=require("path")
const common=require("./webpack.config")
const {merge}=require("webpack-merge")

module.exports=merge(common,{
    mode:"development",
    entry:{
        main:"./src/index.js"
    },
    output:{
       filename:"[name].js",
    },
    devServer: {
      
        port: 9000,
        open:true,
        liveReload: true,
      
    },


    //module
    module:{
        rules: [
            
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
              },
              
        ]

    }
}
)