/*
    Interface 1: music searching
    url: https://autumnfish.cn/search
    method: GET
    params: keywords
    response: results of the searching
*/
/*
    Interface 2: get music url
    url: https://autumnfish.cn/song/url
    method: GET
    params: song id
    response: the url of the song
*/
/*
    Interface 3: get music detail
    url: https://autumnfish.cn/song/detail
    method: GET
    params: song ids
    response: the detail of the song
*/
/*
    Interface 4: get music comments
    url: https://autumnfish.cn/comment/hot?type=0
    method: GET
    params: song id
    response: hot comments of the song
*/
/*
    Interface 4: get music mv url
    url: https://autumnfish.cn/mv/url
    method: GET
    params: song id
    response: the url of the mv
*/
var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
        musicCover: "",
        hotComments: [],
        mvUrl: "",
        isPlaying: false,
        isMvShown: false,
    },
    methods: {
        searchMusic: function () {
            var that = this
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    that.musicList = response.data.result.songs
                }, function (err) { })
        },
        playMusic: function (id) {
            var that = this
            axios.get("https://autumnfish.cn/song/url?id=" + id)
                .then(function (response) {
                    that.musicUrl = response.data.data[0].url
                }, function (err) { })
            axios.get("https://autumnfish.cn/song/detail?ids=" + id)
                .then(function (response) {
                    that.musicCover = response.data.songs[0].al.picUrl
                }, function (err) { })
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id)
                .then(function (response) {
                    that.hotComments = response.data.hotComments
                }, function (err) { })
        },
        play: function () {
            this.isPlaying = true
        },
        pause: function () {
            this.isPlaying = false
        },
        playMv: function (mvid) {
            var that = this
            axios.get("https://autumnfish.cn/mv/url?id=" + mvid)
                .then(function (response) {
                    that.isMvShown = true
                    that.mvUrl = response.data.data.url
                }, function (err) { })
        },
        closeMv: function() {
            this.isMvShown = false
        }
    }
})