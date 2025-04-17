class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Austin(Boots stop workin')", "Dasha", "1.webp", "1.mp3"),
  new Music("Highlights", "Sasha Alex Sloan", "2.jpg", "2.mp3"),
  new Music("To sad to cry", "Sasha Alex Sloan", "3.jpg", "3.mp3"),
];
