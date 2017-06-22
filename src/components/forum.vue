<template>
  <div id="content-container" class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="panel panel-default">
          <div class="panel-heading">
            热门论坛
            <a href class="more">
              <icon name="ellipsis-h"></icon>
            </a>
          </div>
          <div class="panel-body">
            <div class="row group-grids">
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 grid">
                <p>
                  <a>
                    <img src="./../../static/img/biji.jpg" alt class="avatar-square-sm">
                  </a>
                </p>
                <p class="title">
                  <a href class="link-red">创业日记直播</a>
                </p>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 grid">
                <p>
                  <a>
                    <img src="./../../static/img/jiaoliu.jpg" alt class="avatar-square-sm">
                  </a>
                </p>
                <p class="title">
                  <a href class="link-red">创业经验交流</a>
                </p>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 grid">
                <p>
                  <a>
                    <img src="./../../static/img/taolun.jpg" alt class="avatar-square-sm">
                  </a>
                </p>
                <p class="title">
                  <a href class="link-red">创业热点讨论</a>
                </p>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 grid">
                <p>
                  <a>
                    <img src="./../../static/img/fenxiang.jpg" alt class="avatar-square-sm">
                  </a>
                </p>
                <p class="title">
                  <a href class="link-red">创业故事分享</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">最近话题</div>
          <div class="panel-body">
            <ul class="media-list thread-list">
              <li class="empty">暂无话题！</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="media">
              <div class="media-left">
                <a href class="js-user-card">
                  <img src="./../../static/img/user_touxiang.png" class="avatar-md">
                </a>
              </div>
              <div class="media-body">
                <p>
                  <a href class="link-red">ashen2218118698</a>
                </p>
                <div class="metas">
                  <a href class="btn btn-primary btn-xs btn-default active" role="button">我的论坛主页</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action class="mbl" method="get">
          <div class="input-group group-search">
            <input type="text" class="form-control" placeholder="论坛搜索" name="keyWord">
            <span class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <icon name="search"></icon>
              </button>
            </span>
          </div>
        </form>
        <div class="panel panel-default">
          <div class="panel-heading">
            我的论坛
            <a href class="more">
              <icon name="ellipsis-h"></icon>
            </a>
          </div>
          <div class="panel-body">
            <div class="row group-grids">
              <div class="col-lg-3 col-md-4 col-sm-2 col-xs-4 grid">
                <p>
                  <a>
                    <img src="./../../static/img/biji.jpg" alt class="avatar-square-sm">
                  </a>
                </p>
                <p class="title">
                  <a href class="link-red">创业日记直播</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">新晋论坛</div>
          <div class="panel-body">
            <ul class="media-list">
              <li class="media">
                <div class="media-left">
                  <a href>
                    <img src="./../../static/img/taolun.jpg" class="avatar-square-sm">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    <a href class="link-red">创业热点讨论</a>
                    <span class="text-success fsn">3个成员</span>
                  </p>
                  <p class="fsn text-muted">创业热点讨论</p>
                </div>
              </li>
              <li class="media">
                <div class="media-left">
                  <a href>
                    <img src="./../../static/img/fenxiang.jpg" class="avatar-square-sm">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    <a href class="link-red">创业故事分享</a>
                    <span class="text-success fsn">2个成员</span>
                  </p>
                  <p class="fsn text-muted">创业故事分享</p>
                </div>
              </li>
              <li class="media">
                <div class="media-left">
                  <a href>
                    <img src="./../../static/img/jiaoliu.jpg" class="avatar-square-sm">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    <a href class="link-red">创业经验交流</a>
                    <span class="text-success fsn">4个成员</span>
                  </p>
                  <p class="fsn text-muted">创业经验交流</p>
                </div>
              </li>
              <li class="media">
                <div class="media-left">
                  <a href>
                    <img src="./../../static/img/biji.jpg" class="avatar-square-sm">
                  </a>
                </div>
                <div class="media-body">
                  <p>
                    <a href class="link-red">创业日记直播</a>
                    <span class="text-success fsn">8个成员</span>
                  </p>
                  <p class="fsn text-muted">创业日记直播</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'forum',
    data() {
          return {}
    }
  }
</script>

<style></style>
