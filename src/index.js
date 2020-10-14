module.exports = function check(str, bracketsConfig) {
    let result = str;
    // Regular exp.
    // config1 = \(\) = ()
    //         = \[\] = []
    //         = \{\} = {}
    // config4 = \|\| = ||
    // config6 = 12 or 34 or 56 or 77 or 88
    const reg = /\(\)|\[\]|\{\}|\|\||12|34|56|77|88/g;
    for (let i = 0; i < str.length; i++) {
        result = result.replace(reg, '');
    };
    if (result.length > 0) {
        return false;
    };
    return true;
};
