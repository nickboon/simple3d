class BadArgumentError extends Error {
    constructor(parameter) {
        super(`Bad Argument (${parameter}).`);
    }

    static throwFor(parameter) {
        throw new BadArgumentError(parameter);
    };
}

module.exports = BadArgumentError;