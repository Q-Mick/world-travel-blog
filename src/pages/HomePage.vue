<template>
  <div class="container-fluid">
    <div class="row justify-content-center p-5">
      <div class="col-10" v-for="b in blogs" :key="b.id">

        <BlogCard :blog="b" />

      </div>
    </div>
  </div>
</template>

<script>
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { computed, onMounted } from "vue";
import { blogsService } from '../services/BlogsService.js'
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    async function getBlogs() {
      try {
        // logger.log('[TESTING FUNCTION GETBLOGS]')
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }

  }

  .account-card {
    background-repeat: no-repeat;
  }

  .account-picture {
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
