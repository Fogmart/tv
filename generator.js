var vid = ["GNORCU5cSdI", "xy_yjNIHeSY", "IcOswLIouGA",
    'Qr-DvL9_aFU', "NSWCPwE1WyI", "cv7_6p5NkAc", 'IEM9Q2fdHA0', "F-oSu-Pvk0M"]

var genGpog = []
function genProgF() {
    var i = 0, k = 0, prog = {};
    while (i < 60) {
        min = i
        min2 = i + 1

        k++
        if (k == 8) k = 0
        prog = {};

        if (i < 10) min = '0'+i;
        prog.beg = "00:"+min+':01'
        prog.end = "00:"+min+':30'
        console.log("{ 'video': '" + vid[k] + "', 'beg': '" + "00:"+min+':01' + "', 'beg': '" +  "00:"+min+":30' }," )

        k++
        if (k == 8) k = 0
        if (i < 10) {
            min = '0'+i;
            min2 = '0'+(i+1);
            if (min2 == '010') min2 = '10'
        }
        console.log("{ 'video': '" + vid[k] + "', 'beg': '" + "00:"+min+':30' + "', 'beg': '" +  "00:"+min2+":00' }," )

        i++

    }


}

$(document).ready( function () {
    genProgF()
})