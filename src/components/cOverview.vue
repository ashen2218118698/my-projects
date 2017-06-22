<template>
  <div class="course-detail-content">
    <div class="piece">
      <div class="piece-header">课程介绍</div>
      <div class="piece-body p-lg clearfix">
        <p>{{course.c_introduce}}</p>
        <p>
          <strong>分类：</strong>
          <a>{{course.c_type}}</a>
        </p>
        <p>
          <strong>标签：</strong>
          <a>{{course.c_label}}</a>
        </p>
      </div>
    </div>
    <div class="piece">
      <div class="piece-header">课程目标</div>
      <div class="piece-body">
        <ul class="piece-body-list">
          <li>
            <icon name="angle-right"></icon>
            学会{{course.c_name}}制作
          </li>
        </ul>
      </div>
    </div>
    <div class="piece">
      <div class="piece-header">适合人群</div>
      <div class="piece-body">
        <ul class="piece-body-list">
          <li>
            <icon name="angle-right"></icon>
            小吃创业
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cOverview',
    data() {
      return {
        course: Object
      }
    },
    created: function () {
      this.init()
    },
    methods: {
      init() {
        let id = this.$route.params.id;
        this.$http.get('./data/get_course_by_id.php',{
          params: {
            id: id
          }
        }).then(r => {
          this.course = r.data[0]
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  svg {
    width: 7px;
    position: relative;
    left: 4px;
    top: 13px;
  }
  .piece {
    margin-bottom: 30px;
  }
  .piece .piece-header {
    position: relative;
    margin: 5px auto 20px;
    padding: 0 10px;
    color: #fff;
    font-size: 16px;
    border-left: 2px solid #fb8700;
  }
  .p-lg {
    line-height: 30px;
    margin-bottom: 30px;
  }
  .piece .piece-body .piece-body-list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 0;
  }
  .piece .piece-body .piece-body-list>li {
    padding: 15px 0;
    border-bottom: 1px solid #000;
  }
  a {
    cursor: pointer;
  }
</style>
