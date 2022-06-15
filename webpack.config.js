const path=require("path")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const { minify } = require("html-minifier-terser")

module.exports={
    mode:"development",
    entry:{
        main:"./src/index.js"
    },
    output:{
       filename:"main.js",
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                filename:"index.html",
                template:"./src/template.html",
                minify:false,
                inject:"body",
            }
        )
    ],


    //module
    module:{
        rules: [
            {
                test: /\.html$/i,
                use:{
                  loader:"html-loader",
                  options: {
                    minimize: false,
                    
                  },
    
                }    
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.scss$/i,
                use: ["style-loader", //3. Inject styles into DOM 
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader", //1. Turns sass into css
              ],//correct order,we need to use the first one to apply the changes from styling
              }
        ]
    }
}