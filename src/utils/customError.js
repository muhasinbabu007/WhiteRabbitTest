class CustomError extends Error {
    constructor(args, name, code) {
        super(args)
        this.name = name || this.name
        this.code = code || 500
    }
}
module.exports = CustomError