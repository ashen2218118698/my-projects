<template>
  <div id="content-container" class="container">
    <div class="article-detail row" id="detail-content">
      <div class="col-md-8 article-detail-main">
        <section class="article-content">
          <ol class="breadcrumb">
            <li>
              <router-link to="/information">资讯频道</router-link>
            </li>
            <li>
              <router-link to="/information">{{info.category}}</router-link>
            </li>
            <li class="active">
              正文
            </li>
          </ol>
          <div class="article-metas">
            <div class="pull-left">
              <div class="date">
                <div class="day">25</div>
                <div class="month">12月</div>
              </div>
            </div>
            <div class="metas-body">
              <h2 class="title">{{info.title}}</h2>
              <div class="sns">
                <span class="view-num">
                  <icon name="eye"></icon>
                  {{info.view_num}}
                </span>
                <span class="comment-num">
                  <icon name="commenting"></icon>
                  {{info.comment_num}}
                </span>
                <span class="love-num">
                  <icon name="heart"></icon>
                  {{info.collection_num}}
                </span>
              </div>
            </div>
          </div>
          <div class="article-text" v-html="info.content">
          </div>
          <div class="well">
            <p>
              文章来源：
              <strong class="mll">{{info.source}}</strong>
            </p>
          </div>
          <div class="article-tags"></div>
          <div class="article-sns">
            <a @click="info.collection_num ++" class="love js-article-like">
              <icon name="heart"></icon>
              <span class="js-like-num">{{info.collection_num}}</span>
            </a>
            <span class=" share right">
              <icon name="share-alt"></icon>
            </span>
          </div>
        </section>
      </div>
      <aSide></aSide>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoDetail',
    data() {
      return {
        info: Object
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init() {
        let id = this.$route.params.id;
        this.$http.get('./data/get_info_by_id.php', {
          params: {
            id: id
          }
        }).then(r => {
          this.info = r.data[0]
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  .article-content {
    background: #263238;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(245, 0, 87, .1);
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

  .article-metas .metas-body .title {
    margin: 0;
    line-height: 36px;
  }

  .article-metas .metas-body .sns {
    color: #fff;
    margin: 10px auto;
  }

  .article-metas .metas-body .sns span {
    position: relative;
    margin-right: 10px;
  }

  .article-metas .metas-body .sns span svg {
    margin-right: 5px;
  }

  .well {
    background-color: #263238;
    border: 1px solid #f50057;
    box-shadow: none;
  }

  .mll {
    margin-left: 15px;
  }

  .article-sns {
    margin: 26px auto 10px;
    font-size: 16px;
  }

  .article-sns .share > a, .article-sns a.love {
    margin-right: 20px;
    color: #fff;
  }

  .article-sns .share > a svg, .article-sns a.love svg {
    margin-right: 5px;
    font-size: 22px;
  }

  .share, .love {
    position: relative;
  }

  .js-like-num {
    margin: 0 20px;
  }
</style>
