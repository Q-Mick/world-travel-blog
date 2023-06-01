<template>
    <form class="card-body" @submit.prevent="handleSubmit">
        <!-- {{ editable }} -->
        <div class="form-floating">
            <input name="name" class="form-control" type="text">
        </div>
        <div class="form-floating">
            
        </div>
        <div class="form-floating"></div>




    </form>
</template>


<script>
import { computed, popScopeId } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { accountService } from "../services/AccountService.js";

export default {
    setup() {
        const editable = ref({})// start with a blank slate and add properties from the v-model and the watch effect will also fill in some

        watchEffect(() => {
            editable.value = {...AppState.account} // take thi object and dump all of its components in the new object via spread operator
        })

        return {
            editable, //always return the editable so I can use the object
            // account: computed(() => AppState.account)
            async handleSubmit(){
                try {
                    accountService.editAccount(editable.value)
                } catch (error) {
                    Pop.error(error,"editing account")
                }
            }

        }
    }
}
</script>


<style lang="scss" scoped></style>