///<reference path="../../typings/index.d.ts"/>
function getNVPairs() {
    var result = {};
    if (window.location.hash && window.location.hash.length > 1) {
        var elements = window.location.hash.substring(1).split("&");
        for (var e in elements) {
            var nvPair = elements[e].split('=', 2);
            result[nvPair[0]] = nvPair[1];
        }
    }
    return result;
}
function onLoad() {
    var x = getNVPairs();
    if (x && x["access_token"]) {
        console.log("access_token: ", x["access_token"]);
        var accessToken = x["access_token"];
        var urlToLoad = 'https://crossorigin.me/https://api.meetup.com/2/profiles.json?&sign=true&photo-host=public&member_id=self&group_id=19906279&access_token=' + accessToken;
        $.ajax({
            url: urlToLoad,
            type: "GET",
            success: function (response) { console.log("success: ", response); },
            error: function (error) { console.log("error: ", error); }
        });
    }
}
$(function () {
    onLoad();
});
