<template>
  <div id="content-container" class="container">
    <div class="article-list-header">
      <div class="tab-header">
        <a>资讯频道</a>
      </div>
    </div>
    <div class="article-list-body row">
      <div class="col-md-8 article-list-main">
        <section class="es-section">
          <article class="article-item" v-for="article in articles">
            <div class="article-metas clearfix">
              <div class="pull-left">
                <div class="date">
                  <div class="day">01</div>
                  <div class="month">02月</div>
                </div>
              </div>
              <div class="metas-body">
                <p>{{article.category}}</p>
                <h2 class="title">
                  <router-link :to="'/infoDetail/' + article.id" class="link-red">{{article.title}}</router-link>
                </h2>
              </div>
            </div>
            <div class="content">
              {{article.content | resContent}}
            </div>
          </article>
          <nav>
            <ul class="pager">
              <li class="previous" :class="{disabled: isPreDisabled}">
                <a @click="toPageOne">
                  <icon name="arrow-left"></icon>
                </a>
              </li>
              <li class="next" :class="{disabled: !isPreDisabled}">
                <a @click="toPageTwo">
                  <icon name="arrow-right"></icon>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <aSide></aSide>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'information',
    data() {
      return {
        originArticles: [],
        articles: [],
        isPreDisabled: true
      }
    },
    http: {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    },
    created: function () {
      this.getOriginArticles();
      this.getInitArticles();
    },
    methods: {
      getOriginArticles() {
        this.$http.get('./data/get_all_information.php')
          .then(r => {
            this.originArticles = r.data
          })
      },
      getInitArticles() {
        this.$http.get('./data/get_top_information.php')
          .then(r => {
            this.articles = r.data
          })
      },
      toPageOne() {
        this.articles = this.computedArticleOne;
        this.isPreDisabled = true
      },
      toPageTwo() {
        this.articles = this.computedArticleTwo;
        this.isPreDisabled = false
      }
    },
    computed: {
      computedArticleOne: function () {
        return this.originArticles.slice(0, 10)
      },
      computedArticleTwo: function () {
        return this.originArticles.slice(10)
      }
    },
    filters: {
      resContent: function (value) {
        let reg = /<\/?[^>]*> | &[a-z]*;/igm;
        let a = value.replace(reg, "");
        let reg1 = /\s+/igm;
        let b = a.replace(reg1, "");
        if (b.length > 133) {
          return b.substring(0, 133) + '...';
        }
        return b;
      }
    }
  }
</script>

<style scoped>
  .article-list-header {
    margin-bottom: 30px;
    border: 1px solid #f50057;
    border-radius: 2px;
  }

  .tab-header {
    background-color: #263238;
    padding: 15px 0;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .article-list-header > .tab-header > a {
    width: 56px;
    padding: 15px 30px;
    color: #fff;
    cursor: pointer;
    background: #41b883;
    transition: all .3s ease;
  }

  .article-list-header > .tab-header > a:hover {
    color: #e8345a;
    background-color: #263238;
    transition: all .3s ease;
  }

  .es-section {
    background: #263238;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(245, 0, 87, .1);
  }

  .article-item {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f50057;
  }

  .article-metas {
    overflow: hidden;
  }

  .date {
    height: 45px;
    width: 45px;
    margin-top: 10px;
    text-align: center;
    color: #c1c1c1;
    border: 1px solid #e1e1e1;
    border-radius: 50%;
  }

  .day {
    margin-top: 2px;
    font-size: 16px;
    line-height: 1.2;
  }

  .month {
    font-size: 12px;
  }

  .article-metas .metas-body {
    padding-left: 60px;
  }

  .article-metas .metas-body p {
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 12px;
  }

  .article-metas .metas-body .title {
    margin: 0;
    line-height: 36px;
  }

  .content {
    margin-top: 15px;
    color: #fff;
  }

  .pager {
    padding-left: 0;
    margin: 40px 0 20px;
    list-style: none;
    text-align: center;
  }

  .pager li {
    display: inline;
  }

  .pager > li > a {
    position: relative;
    color: #616161;
    background-color: #f5f5f5;
    border-color: #dcdcdc;
  }

  .pager li > a, .pager li > span {
    display: inline-block;
    padding: 8px 18px;
    background-color: #41b883;
    border: 1px solid #ddd;
    border-radius: 2px;
  }

  .pager svg {
    height: 16px;
  }

  .pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover, .pager .disabled > span {
    background-color: #fafafa;
    border-color: #f5f5f5;
    color: #c7c7c7;
  }

  .pager .previous > a, .pager .previous > span {
    float: left;
  }

  .pager .next > a, .pager .next > span {
    float: right;
  }
</style>
