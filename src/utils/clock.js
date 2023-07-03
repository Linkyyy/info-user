export function getTimeStr(time) {
    let nowtime = new Date()  //获取当前时间
    let endtime = new Date(time)
    let lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
        leftm = Math.floor(lefttime / (1000 * 60)),  //计算分钟数
        lefts = Math.floor(lefttime / 1000 % 60);  //计算秒数

    return leftm < 0 ? "0'0''" : (leftm + "'" + lefts + "''");  //返回倒计时的字符串
}