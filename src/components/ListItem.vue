<template>
    <ul class="list">
        <li v-for="item in listData" :key="item.id">
            <b>{{ item.time_ago }}</b>
            <template v-if="$route.name ==='news'">
                <span> by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></span><br>
                <a :href="item.url">{{ item.title }}</a>
                <router-link :to="`item?id=${item.id}`"><i>({{ item.comments_count }})</i></router-link>
            </template>
            <template v-else-if="$route.name ==='ask'">
                <span> by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></span><br>
                <router-link :to="item.url">{{ item.title }} <i>({{ item.comments_count }})</i></router-link>
            </template>
            <template v-else>
                <span> by {{ item.user }}</span><br>
                <a :href="item.url">{{ item.title }}</a>
            </template>
        </li>
    </ul>
</template>
  
<script>
export default {
    props: ['listData'],
    mounted() {
        console.log(this.listData)
    }
}
</script>
  
<style>
  
</style>