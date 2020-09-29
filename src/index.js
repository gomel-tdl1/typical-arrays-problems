exports.min = function min(array) {
    if (!array||array.length===0) {
        return 0;
    }else{
        return array.reduce((prev, current) => {
            if (current < prev) {
                return current;
            } else {
                return prev;
            }
        }, 1000000000000);
    }
};

exports.max = function max(array) {
    if (!array||array.length===0) {
        return 0;
    }else{
        return array.reduce((prev, current) => {
            if (current > prev) {
                return current;
            } else {
                return prev;
            }
        }, -10000000000);
    }
};

exports.avg = function avg(array) {
    if (!array||array.length===0) {
        return 0;
    }else{
        return array.reduce((prev, current) => {
            return prev + current;
        }, 0) / array.length;
    }
};
