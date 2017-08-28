/**
 * Created by Administrator on 2017/7/26.
 */
'use strict'
var s='hello';
function greet(name) {
    console.log(`${s},${name}`);
}
module.exports=greet;//将greet函数作为模块输出暴露出去，这样其他模块就可以是用greet函数