class BadArgumentError extends Error {
    constructor(parameter) {
        super(`Bad Argument (${parameter}).`);
    }
}

module.exports = BadArgumentError;