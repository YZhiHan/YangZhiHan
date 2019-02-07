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
                callback(result);//SQL语句执行正常，回调函数传出结果
            })
        }
    })
}
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
    var sql = `insert into \`${tabname}\`(${keys}) values (${values})`;
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
    console.log(sql);
    qyery(sql, callback);

}
// 更新的方法
function update(tablename, data, key, callback) {
    var values = '';
    for (let i in data) {
        values += `${i}='${data[i]}'` + ',';
    }
    var where_ = '';
    for (var i in data) {
        if (i == key) {
            where_ = `${i}='${data[i]}'`;
        }
    }
    values = values.substring(0, values.length - 1);
    var sql = `UPDATE \`${tablename}\` SET ${values} WHERE ${where_}`;
    // console.log(sql);
    qyery(sql, callback);
}
// 删除的方法
function deletes(tablename, data, key, callback) {
    for (let i in data) {
        if (i == key) {
            where_ = `${i}='${data[i]}'`;
        }
    }
    var sql = `DELETE FROM \`${tablename}\` WHERE ${where_}`;
    // console.log(sql);
    qyery(sql, callback);
}
// 多表联查【全部信息】(房间位置，房间，房间类型)
function select_more(tab1, tab2, tab3, callback) {
    var sql = `select * from \`${tab1}\`,\`${tab2}\`,\`${tab3}\` where \`${tab1}\`.type_id=\`${tab2}\`.type_id and \`${tab2}\`.position_id=\`${tab3}\`.position_id`;
    // console.log(sql);
    qyery(sql, callback);
}
// 两表联查(房间，房间类型)
function select_two(tab1, tab2, data, callback) {
    for (let i in data) {
        if (i == 'ID') {
            where_ = `${i}='${data[i]}'`;
        }
    }
    var sql = `select * from \`${tab1}\` as a JOIN \`${tab2}\` as b where a.${where_} and a.type_id=b.type_id`;
    // console.log(sql);
    qyery(sql, callback);
}
// 多表联查（订单表，客户表，房间表，房间类型表）
function select_(table, callback) {
    var sql = `SELECT * FROM \`${table['table1']}\` as a JOIN \`${table['table2']}\` as b ON a.custom_id=b.ID JOIN \`${table['table3']}\` as c ON c.ID=b.room_id JOIN \`${table['table4']}\` as d ON d.type_id=c.type_id  WHERE a.ID`;
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



module.exports = { insert, select, selectWhere, update, deletes, select_more, select_two, select_ }