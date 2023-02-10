<template>
  <list-item :listData="list"></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {ListItem},
  computed: {
      list() {
          return this.$store.state.list;
      }
  },
  created() {
  //   axios //각각 통신
  //     .get('https://api.hnpwa.com/v0/news/1.json')
  //       .then( res => {this.list = res.data})
  //         .then(()=> {console.log(this.list[0])})
      this.$store.dispatch('FETCH_LIST', 'ask')
  },
}
</script>

<style>
</style>