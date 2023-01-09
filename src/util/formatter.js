//we simply want to export a function that formats the HTTP response!

const http_formatter = (data, message= 'ok', success = true) => {
    if(!data) success = false;
    return {message, data, success}
}

module.exports=http_formatter;