///<reference path="../../typings/index.d.ts"/>

function getNVPairs(): {[k: string]:string} {
  var result: {[k: string]:string} = {};

  if (window.location.hash && window.location.hash.length > 1) {
    let elements = window.location.hash.substring(1).split("&")

    for (var e in elements) {
      let nvPair = elements[e].split('=', 2)

      result[nvPair[0]] = nvPair[1]
    }
  }

  return result;
}

function onLoad() {
  let x = getNVPairs();

  if (x && x["access_token"]) {
    console.log("access_token: ", x["access_token"])

    let accessToken = x["access_token"]

    let urlToLoad = 'https://crossorigin.me/https://api.meetup.com/2/profiles.json?&sign=true&photo-host=public&member_id=self&group_id=19906279&access_token=' + accessToken

    $.ajax({
      url: urlToLoad,
      type: "GET",
      success: (response) => { console.log("success: ", response )},
      error: (error) => { console.log("error: ", error) }
    })
  }
}

$(() => {
  onLoad();
})
