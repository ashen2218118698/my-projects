<template>
  <div class="tab-panel active">
    <ul class="news-panel">
      <li class="list-item row" v-for="title in titles">
        <div class="col-sm-12">
          <h3 class="news-title text-wrap h4">
            <router-link :to="'/infoDetail/' + title.id">{{title.title}}</router-link>
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabpanel',
    data(){
        return {
            titles: []
        }
    },
    props: {
        childMsg: Array
    },
    watch: {
        childMsg (value) {
          this.titles = value;
        }
    },
  }
</script>

<style scoped>
  .news-panel {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .news-panel .list-item {
    padding-top: .2rem;
    padding-bottom: .2rem;
    border-bottom: 1px solid #000;
    list-style: none;
  }
  .news-title {
    margin-top: 0;
    margin-bottom: .2rem;
  }
  .text-wrap {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media screen and (min-width: 768px){
    .news-title a {
      font-size: 1.6rem;
    }
  }
</style>
