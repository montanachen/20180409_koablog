<template>
<div >
  <ul id = "MyTest">
    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    <li v-for="value in object" :key="value">{{ value }}</li>
      <button @click = "add()">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
      <button @click="greet">Greet</button>
      <!-- 使用 great 會自動傳 event 給函數 , 用 great() 表示沒有 event (空的)  !-->
      <!-- 使用 great 會彈出兩個視窗 , 用 great() 則出現一個  !-->
      <p>=================</p>
      <input v-model="linemessage" placeholder="edit me">
      <p>Message is: {{ linemessage }}</p>
      <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MyTest',
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'AAAAA' },
        { message: 'BBBB' },
        { message: 'CCC' },
        { message: 'KKK' }
      ],
      counter: 0,
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      linemessage: 'Input Something',
      checkedNames: []
    }
  },
  methods: {
    add: function () {
      this.counter++
    },
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      window.alert('Hello , You have been clicked the button ' + this.counter + ' times !')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
