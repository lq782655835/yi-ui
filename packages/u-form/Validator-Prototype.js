/**
 * 根据rule校验逻辑
 * validator.add(userName, [
 *          { strategy: 'isNonEmpty', errorMsg: '用户名不能为空' },
 *          { strategy: 'minLength:10', errorMsg: '不能小于10' },
 *      ])
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

function Validator() {
    this.cache = []
}

Validator.prototype.add = function(field, rules) {
    var self = this
    for (var i = 0; i < rules.length; i++) {
        // 使用闭包，使得cache中fn函数使用的参数持久化
        ;(function(rule) {
            var strategy = rule['strategy']
            var errorMsg = rule['errorMsg']
            var args = strategy.split(':')
            self.cache.push(function() {
                console.log(args, errorMsg, strategy)
                var strategy = args.shift() // 策略
                // 处理参数
                args.unshift(field)
                args.push(errorMsg)
                // 执行策略
                return strategys[strategy].apply(null, args)
            })
        })(rules[i])
    }
}

Validator.prototype.valid = function() {
    for (var i = 0; i < this.cache.length; i++) {
        var strategyFn = this.cache[i]
        let msg = strategyFn()
        if (msg) {
            return msg
        }
    }
}

// test
var validator = new Validator()
validator.add('', [
    { strategy: 'isNonEmpty', errorMsg: '用户名不能为空' },
    { strategy: 'minLength:10', errorMsg: '不能小于10' }
])

var errorMsg = validator.valid() // 返回第一个校验错误的msg，没有错返回undefined
console.log(errorMsg)
