<template>
     <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"/>
  <div class="index">
    <h1>index</h1>
    <div class="topList">
      <h3>최신글</h3>
      <table>
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </thead>
        <tbody>
          <tr v-for="n in list" v-bind:key="n.bno">
            <td>{{ n.bno }}</td>
            <td class="title">
              <a v-on:click="viewDetail('${n.bno}')">{{ n.btitle }}
                <span v-if="n.commentcount > 0">
                  &nbsp;<i class="xi-comment"></i>{{ n.commentcount }}</span>
            </a>
            </td>
            <td>{{ n.m_name }}</td>
            <td>{{ n.bdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="cmtList">
      <h3>인기글</h3>
      <table>
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </thead>
        <tbody>
          <tr v-for="n in cmtTop5" v-bind:key="n.bno">
            <td>{{ n.bno }}</td>
            <td class="title">
              <a v-on:click="viewDetail('${n.bno}')">{{ n.btitle }}
                <span v-if="n.commentcount > 0">
                  &nbsp;<i class="xi-comment"></i>{{ n.commentcount }}</span>
              </a>
            </td>
            <td>{{ n.m_name }}</td>
            <td>{{ n.bdate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
      list: [],
      members: [],
      cmtTop5: [],
    };
  },
  mounted() {
    this.index();
  },
  methods: {
    index() {
      this.$axios
        .get(this.$server + "/index")
        .then((res) => {
          this.list = res.data.list;
          this.members = res.data.members;
          this.cmtTop5 = res.data.cmtTop5;
        })
        .catch((err) => {
          alert("에러가 발생했습니다." + err);
        });
    },
  },
};
</script>

<style>
.index {
  margin: 0 auto;
  width: 800px;
  height: auto;
  background-color: bisque;
  text-align: left;
  padding: 10px;
}
.index ul,
.index li {
  background-color: white;
}
.topList, .cmtList{
    width: 50%;
    height: 300px;
    float: left;
}
.topList h3, .cmtList h3 {
    text-align: center;
    margin-top: 50px;
}
.topList table, .cmtList table {
    width: 100%;
    text-align: center;
}
.topList th, .cmtList th {
    background-color: rgb(47, 212, 149);
    color: white;
    height: 25px;
}
.topList th {
    background-color: rgb(47, 212, 149);
}
.cmtList th {
    background-color: rgb(237, 111, 201);
}
.topList td, .cmtList td {
    border-bottom: 1px silver solid;
}
.title {
    text-align: left !important;
    color: black;
}

.title a {
    text-decoration: none;
    color: black;
}

span {
  color: deeppink;
  font-size: x-small;
}


</style>
