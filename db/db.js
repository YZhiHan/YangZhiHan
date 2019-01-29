var mysql = require('mysql');
var dbconfig = require('./db_config');
// 创建数据池
var pool = mysql.createPool(dbconfig);
var query = (sql,callback) => {
    pool.getConnection(function(err,conn){
        // 链接数据库
        if(err){
            console.log('error');
        }else{
            conn.query(sql,function(err,result){
                // 执行sql语句
                if(err){
                    console.log('sql error');
                }
                callback(result);//sql语句执行正常，回调函数返回结果
            })
        }
    })
}
// 处理数据
function format_data(code,msg,data = []){
    var json_obj = {code,msg,data};
    return JSON.stringify(json_obj);
}
// 添加的方法
function insert(tabname, data, callback) {
    let keys = '';
    let values = '';
    for (let i in data) {
        keys += i + ',';
        values += `'${data[i]}'` + ',';
    }
    keys = keys.substring(0, keys.length - 1);
    values = values.substring(0, values.length - 1);
    var sql = `insert into \`${tabname}\`(${keys}) values(${values})`;
    qyery(sql, callback);
}
// 查找的方法
function select(tabname,data,callback){
    var sql = `select * from \`${tabname}\``;
    query(sql,callback);
}
// 更新的方法
function update(tabname,data,callback){
    let values = where_ = '';
    where_ = `ID='${data[ID]}'`;
    delete data[ID];
    for(let i in data){
        values += `${i}='${data[i]}'`;
    }
    values = values.substring(0,values.length - 1);
    var sql = `UPDATE \`${tabname}\` SET ${values} WHERE ${where_}`;
    console.log(sql);
    query(sql,callback);
}
// 返回结果的封装方法
function query(sql,callback){
    query(sql,function(res){
        var json = '';
        if(res){
            json = format_data(0,'成功',res);
        }else{
            json = format_data(0,'失败',sql);
        }
        callback(json);
    })
}
module.exports = {insert,select,update}