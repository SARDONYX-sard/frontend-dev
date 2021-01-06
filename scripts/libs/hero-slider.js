class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            loop: true,
            grabCursor: true,
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                },
            },
        });
    }

    start(options = {}) {
        //assignで引数に渡されたオブジェクトを統合（マージ）する
        options = Object.assign(
            {
                delay: 4000,
                //画像を触ると止まるかどうか
                disableOnInteraction: false,
            },
            options
        );
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }

    stop() {
        this.swiper.autoplay.stop();
    }
}
