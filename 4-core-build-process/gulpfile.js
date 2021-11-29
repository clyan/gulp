const fs = require('fs');
const { Transform } = require('stream')
exports.default = function(done) {
    // 读取文件流
    const read = fs.createReadStream('reset.css')
    // 写入文件流
    const write = fs.createWriteStream('reset.min.css')
    // 文件转换流
    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            // 核心转换过程实现
            // chunk  => 读取流中读取到的内容
            const input = chunk.toString()
            const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//, '')
            // 错误有限
            callback(null, output)
        }
    })
    read
    .pipe(transform) // 先进行转换
    .pipe(write)    // 再写入
    return read
}