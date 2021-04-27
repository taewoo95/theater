
<template>
  
  <div id="app">
    
    <div class="box1">
      <img id="img1" alt="movie01" src="./assets/cla.jpg">
      
      <div>
      <h3> 상영관 : 1관 </h3>
      </div>
      <div>
      <select id="select1" name="first">
      <option value="one" selected="selected">9:00</option>
      <option value="two">15:00</option>
      <option value="thrid" >21:00</option>
      </select>
      </div>
      <div>
          <div v-for="item in shows1" :key="item.id">
          전체좌석 : 156 <br>
          남은자리 : {{ item.seat_C }}
          </div>
        <!--<li v-for="item in shows1" v-bind:key="time.id">{{ item }}</li>-->
      </div>
      <div id= "tiketing1">
        <button @click="clickevent1">예매하기</button>
      </div>
    </div>
    

    
    <div class="box1">
    <img id="img2" alt="movie02" src="./assets/hero.jpg">
    
    <div>
      <h3> 상영관 : 2관 </h3>
    </div>
    <div>
      <select name="second">
      <option value="one" selected="selected">8:30</option>
      <option value="two">13:30</option>
      <option value="thrid">18:30</option>
      </select>
    </div>
       <div>
          <div>
          전체좌석 : 100 <br>
          남은자리 : 100
          </div>
        <!--<li v-for="item in shows1" v-bind:key="time.id">{{ item }}</li>-->
      </div>
  <div id= "tiketing2">
    <button @click="clickevent2">예매하기</button>
  </div>
    </div>
    

    <div class="box1">
     <img id="img3" alt="movie03" src="./assets/girl.jpg">


    

      <div>
        <h3> 상영관 : 3관 </h3>
      </div>
      <div>
      <select name="third">
      <option value="one" selected="selected">10:00</option>
      <option value="two">14:00</option>
      <option value="third">18:00 </option>
      <option value="third" >22:00;
      </option>
      </select>
      </div>
      <div>전체좌석 : 144 <br> 남은자리 : 144</div>
      <div id= "tiketing3">
        <button @click="clickevent3">예매하기</button>
      </div>
    </div>
    
  </div>

</template>


<script>
export default {
  name: 'MovieListView',
  data: function () {
    return {
      shows1: [],
      shows2: [],
      shows3: []
    }
  },
  
  created() {
    this.$axios.get("http://localhost:8081/yeme/movies?id_ticket=1").then(res => {
        console.log(res.data);
        this.shows1 = res.data;
      });
      this.$axios.get("http://localhost:8081/yeme/movies?id_ticket=2").then(res => {
        console.log(res.data);
        this.shows2 = res.data;
      });
      this.$axios.get("http://localhost:8081/yeme/movies?id_ticket=3").then(res => {
        console.log(res.data);
        this.shows3 = res.data;
      });

  },
}
</script>

<style>
.box1{
  float: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  float: left;
  
}
#img1{
  width: 300px;
}
#img2{
  width: 300px;
}
#img3{
  width: 300px;
}

</style>
