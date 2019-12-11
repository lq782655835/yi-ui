/**
 * 根据rule校验逻辑
 * validator.add(userName, 'isNonEmpty', '用户名不能为空')
 * validator.add(userName, 'minLength:10', '不能小于10')
 *
 * var errorMsg = validator.valid() // 返回第一个校验错误的msg，没有错返回undefined
 * return errorMsg
 */

const strategys = {
    isNonEmpty: (value, errorMsg) => {
        if (value === '') return errorMsg
    },
    minLength: (value, length, errorMsg) => {
        if (value.length < length) return errorMsg
    }
}

class Validator {
    constructor() {
        this.cache = []
    }

    // add
    add(field, rule, errorMsg) {
        let args = rule.split(':')
        this.cache.push(function() {
            let strategy = args.shift() // 策略
            // 处理参数
            args.unshift(field)
            args.push(errorMsg)
            // 执行策略
            return strategys[strategy].apply(null, args)
        })
    }

    valid() {
        for (let strategyFn of this.cache) {
            let msg = strategyFn()
            if (msg) {
                return msg
            }
        }
    }
}

// test
var validator = new Validator()
validator.add('', 'isNonEmpty', '用户名不能为空')
validator.add('name', 'minLength:10', '不能小于10')

var errorMsg = validator.valid() // 返回第一个校验错误的msg，没有错返回undefined
console.log(errorMsg)
