<template>
  <div class="course-detail-content">
    <div class="piece">
      <div class="piece-header">课时列表</div>
      <div class="piece-body">
        <div class="lesson-wrap">
          <icon name="circle-o"></icon>
          <span class="title">{{course.c_list}}</span>
          <span class="date" title="视频时长05:00">05:00</span>
          <icon name="file-video-o"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cLesson',
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
  .lesson-wrap {
    position: relative;
    margin-top: 10px;
    margin-bottom: 0;
    padding: 10px 0;
  }
  .lesson-wrap:hover {
    background-color: #e8345a;
  }
  .lesson-wrap svg {
    width: 16px;
    height: 16px;
  }
  .lesson-wrap svg:first-child {
    top: 20px;
    left: 14px;
  }
  .lesson-wrap svg:last-child {
    top: 20px;
    left: 801px;
    cursor: pointer;
  }
  .title {
    margin-left: 35px;
  }
  .date {
    position: absolute;
    top: 10px;
    right: 52px;
  }
</style>
