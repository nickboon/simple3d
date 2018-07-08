class IO {
    setKeydownListener(keyCode, action, shiftAction) {
        window.addEventListener('keydown', e => {
            e.preventDefault();
            if (shiftAction && e.keyCode === keyCode && e.shiftKey) shiftAction();
            else if (e.keyCode === keyCode) action();
        });
    }

    setAnyKeyupListener(action) {
        window.addEventListener('keyup', function () {
            action();
        });
    }
}




module.exports = IO;