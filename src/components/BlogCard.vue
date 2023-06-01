<template>
    <div class="card">
        <div class="card-body">
            <div class="row ">
                <div class="col-12 d-flex justify-content-between">

                
                    <router-link :to="{name: 'Profile', params: { id: blog?.creatorId }}">
                    <img class="rounded-circle blog-imgUrl" :src="blog?.profilePic" :alt="blog?.title">
                </router-link>
                
                    <img class="rounded-circle blog-imgUrl" :src="blog?.imgUrl" :alt="blog?.title">
                </div>
            </div>
            <p class="fw-bold">{{blog?.creatorName}}</p>
            <p>
               Title:  {{ blog?.title }}
            </p>
            <p>
               {{ blog?.body }}
            </p>

        </div>
    </div>



</template>


<script>
import { Blog } from "../models/Blog.js";
import { AppState } from "../AppState.js";
// import { Profile} from "../model/Profile.js;"

export default {
    props:{
        blog: {type: Blog, required: true}
    },
    setup(props){
        return {}
    }
}
</script>


<style lang="scss" scoped>
.blog-imgUrl{
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
}
</style>