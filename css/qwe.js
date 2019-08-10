var mtouch = {
    /**
     * 
     * @param {元素dom} el 
     * @param {回调函数} callback 
     */
    //点击事件
    qwe: function(el, callback) {
        var time1 = null

        var ms = true
        el.addEventListener('touchstart', function() {
            time1 = new Date() * 1

        })
        el.addEventListener('touchmove', function() {
            ms = false
        })
        el.addEventListener('touchend', function() {
            var time2 = new Date() * 1
            if (time2 - time1 < 150 && ms) {
                callback && callback(el)
            }

        })
        time1 = null
        ms = true
    },

    //滑动事件
    /**
     * 
     * @param {*} el 
     * @param {*} direction 
     * @param {*} callback 
     */
    swipper: function(el, direction, callback) {
        var cei = ''
        var his = ''
        var asd = ''
        var pos = ''
        el.addEventListener('touchstart', function(e) {
            // console.log(e)
            cei = e.touches[0]
            his = {
                    x: cei.clientX,
                    y: cei.clientY
                }
                // console.log(his.x, his.y)
        })
        el.addEventListener('touchmove', function(e) {
            // console.log(e)
            asd = e.touches[0]
            pos = {
                x: asd.clientX,
                y: asd.clientY
            }

        })
        el.addEventListener('touchend', function(e) {
            if (his && pos && count(his, pos) == direction) {
                callback && callback()
            }
        })

        function count(his, pos) {
            var dic = ''
            var cha = pos.x - his.x
            var cha1 = pos.y - his.y
                // console.log(cha, cha1)
            var abs = Math.abs(cha)
            var abs1 = Math.abs(cha1)
            if (abs > 30 || abs1 > 30) {
                if (abs > abs1) {
                    //水平
                    dic = cha > 0 ? 'right' : 'left'
                } else {
                    //垂直
                    dic = cha1 > 0 ? 'bottpm' : 'top'
                }

            }
            console.log(dic)
            return dic
        }
        his = '';
        pos = ''
    }
}