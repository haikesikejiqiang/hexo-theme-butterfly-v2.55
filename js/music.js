const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#FADFA3',
    mutex: true,
    audio: [
      {
        name: "Sold Out",
        artist: 'Hawk Nelson',
        url: 'https://music.163.com/song/media/outer/url?id=31010566.mp3',
        cover: 'https://p3.music.126.net/AAq1qOhfyrClGK1mg3mGYQ==/18776360067593424.jpg',
      },
      {
        name: "纸短情长",
        artist: '徐梦圆',
        url: 'https://music.163.com/song/media/outer/url?id=516076896.mp3',
        cover: 'https://p3.music.126.net/AAq1qOhfyrClGK1mg3mGYQ==/18776360067593424.jpg',
      }
    ]
});