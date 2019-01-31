var mysql = require('mysql');
var dbconfig = require('./db_config');
// 创建数据池
var pool = mysql.createPool(dbconfig);
var query = (sql, callback) => {
    pool.getConnection(function (err, conn) {//链接数据库
        if (err) {
            console.log('error');
        } else {
            conn.query(sql, function (err, result) {//执行SQLy语句
                if (err) {
                    console.log('SQL error');
                }
                // console.log(result);
                callback(result);//SQL语句执行正常，回调函数传出结果
            })
        }
    })
}
// 处理数据
// var formatList = (code,msg,data,count = 5)=>{
//     var obj = {
//         code,
//         msg,
//         data,
//         count,
//     }
//     var json_data = JSON.stringify(obj);
//     return json_data;
// }
// 成败信息返回的方法
function format_data(code, msg, data = []) {
    var json_obj = { code, msg, data };
    return JSON.stringify(json_obj);
}
// 添加
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
// 查询的方法
function select(tablename, data, callback) {
    var sql = `select * from \`${tablename}\``;
    // console.log(sql);
    qyery(sql, callback);
}
// 根据条件查询
function selectWhere(tablename, data, callback) {
    let where_ = '';
    for (var i in data) {
        where_ = `${i}='${data[i]}' and `;
    }
    where_ += '1';
    let sql = `select * from \`${tablename}\` where ${where_}`;
    // console.log(sql);
    qyery(sql, callback);

}
// 更新的方法
function update(tablename, data,key, callback) {
    let values = '';
    for (let i in data) {
        values += `${i}='${data[i]}'` + ',';
    }
    let where_ = '';
    for (var i in data) {
        if (i == key) {
            where_ = `${i}='${data[i]}'`;
        }
    }
    values = values.substring(0, values.length - 1);
    var sql = `UPDATE \`${tablename}\` SET ${values} WHERE ${where_} `;
    console.log(sql);
    qyery(sql, callback);
}
// 删除的方法
function deletes(tablename, data, callback) {
    for (let i in data) {
        if (i == 'ID') {
            where_ = `${i}='${data[i]}'`;
        }
    }
    var sql = `DELETE FROM \`${tablename}\` WHERE ${where_}`;
    // console.log(sql);
    qyery(sql, callback);
}
// 多表联查(房间位置，房间，房间类型)
function select_more(tab1, tab2, tab3,callback) {
    var sql = `select * from \`${tab1}\`,\`${tab2}\`,\`${tab3}\` where \`${tab1}\`.type_id=\`${tab2}\`.type_id and \`${tab2}\`.position_id=\`${tab3}\`.position_id`;
    console.log(sql);
    qyery(sql, callback);
}
// 返回结果的封装方法
function qyery(sql, callback) {
    query(sql, function (res) {
        var json = '';
        if (res) {
            json = format_data(0, '成功', res);
        } else {
            json = format_data(1, '失败', sql);
        }
        callback(json);
    })
}
module.exports = { insert, select, selectWhere, update, deletes, select_more }