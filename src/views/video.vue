<template>
  <div class="video">
    <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :style="{ width: '420px', height: '268px' }"
      :options="playerOptions"
      @ready="playerReadied"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
    >
    </video-player>
    <!-- <video-player
      class="video-player vjs-custom-skin"
      :options="playerOptions2"
      :playsinline="true"
      :style="{ width: '420px', height: '268px' }"
    ></video-player>
    <div>
      <video class="demo-video" ref="player" autoplay></video>
    </div> -->
  </div>
</template>

<script>
import "videojs-flash";
import "videojs-contrib-hls";
import "video.js/dist/video-js.css";
import flvjs from "flv.js";

import { videoPlayer } from "vue-video-player";

export default {
  name: "Video",
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        techOrder: ["flash"],
        html5: { flash: { withCredentials: false } },
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        sources: [
          {
            type: "rtmp/mp4", // 类型
            src: "rtmp://58.200.131.2:1935/livetv/cctv5" // url地址
          }
        ],
        poster: "", // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controls: false
      },
      playerOptions2: {
        height: "260",
        language: "en",
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "application/x-mpegURL",
            withCredentials: false,
            src: "http://10.100.41.202/0.m3u8"
          }
        ],
        muted: true, // 默认情况下将会消除任何音频。
        techOrder: ["html5"],
        html5: { hls: { withCredentials: false } },
        autoplay: true,
        controls: false,
        poster: "../../assets/images/video2.jpg",
        notSupportedMessage: "不支持的视频格式"
      }
    };
  },
  mounted() {
    if (flvjs.isSupported()) {
      let video = this.$refs.player;
      if (video) {
        this.player = flvjs.createPlayer({
          type: "flv",
          // isLive: true,
          hasAudio: false,
          url: "http://10.100.41.202/0.flv"
        });
        this.player.attachMediaElement(video);
        try {
          this.player.load();
          setTimeout(() => {
            this.player.play();
          }, 1);
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  methods: {
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>
<style lang="less" scoped>
/deep/ .video-js .vjs-big-play-button {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.demo-video {
  max-width: 880px;
  max-height: 660px;
}
</style>