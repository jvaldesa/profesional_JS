function MediaPlayer(config) { //Config es un object con diferentes claves, el hace referencia a elemento
    this.media = config.el;
    }
    
MediaPlayer.prototype.play = function() {
    this.media.play();
};
    
MediaPlayer.prototype.pause = function() {
    this.media.pause();
};
    
MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

export default MediaPlayer;