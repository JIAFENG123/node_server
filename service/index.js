module.exports = {
    register: async (name, password) => {
        if (name == 'ikcamp' && password == '123456') {
            return `Hello， ${name}！`
        } else {
            return `<h1>账号信息错误</h1>`
        }
    }
}