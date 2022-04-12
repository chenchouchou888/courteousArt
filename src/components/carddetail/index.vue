<template>
  <transition>
    <div
      class="filter"
      @click.stop="close"
      v-show="$store.state.home.detailShow"
    >
      <div class="wrapper">
        <div class="for3d"></div>
        <h1>{{ $store.state.home.name3d }}</h1>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
     isChange:false
    };
  },

  methods: {
    close() {
      this.$store.dispatch("changeDetailShow");
    },
    create3d() {
      let that = this;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      let play = true;

      const renderer = new THREE.WebGLRenderer();
      renderer.setClearColor("#fff", 1.0);
      renderer.setSize(window.screen.width/5,window.screen.height/2.6);
      document.querySelector(".for3d").appendChild(renderer.domElement);
      const geometry = new THREE.BoxGeometry(5, 4, 0.2);
      let material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(this.$store.state.home.imgUrl),
      });
     material.side = THREE.DoubleSide
      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        
        if (play) {
          cube.rotation.y += 0.01;
        }
        renderer.render(scene, camera);
        if(that.isChange)
        {
        material.map = new THREE.TextureLoader().load(that.$store.state.home.imgUrl)
        that.isChange = false
     
        }
       }
      animate();
    },
  },
  mounted() {
    this.create3d();
  },
  watch:{
      '$store.state.home.imgUrl'(){
          this.isChange = true
      }
  },

};
</script>

<style lang="less" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}
.filter {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  background: white;
  border-radius: 2rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.for3d{
    margin-top: 2rem;
    margin-bottom: 1rem;
}

h1 {
  font-size: 2.2rem;
}
</style>