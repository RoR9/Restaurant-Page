const path=require("path")
const common=require("./webpack.config")
const {merge}=require("webpack-merge")

module.exports=merge(common,{
    mode:"production",

    output:{
        filename:"[name].[hash].bundle.js",
        clean:true,
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: 'images/[name].[hash].[ext]'

    }
    
})