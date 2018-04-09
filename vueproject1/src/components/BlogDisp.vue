<template>
<div>
  <ul>
    <p> You have {{todos.length}} posts </p>
    <li v-for="(todo, index) in todos" :key="index">
      <a @click="select(index)">{{index}} {{ todo.title }} + {{ todo.content }}</a>
      <!-- <a href="http://www.runoob.com/" target="_blank">访问菜鸟教程!</a> -->
    </li>
<!--  <p><a href="/post/new">Create a Post</a></p>  -->
  </ul>
</div>
</template>

<script>
export default {
  name: 'BlogDisp',
  props: ['todos'],
  data () {
    return {
      /*
      todos: [
        { title: 'PPP', content: 'AAAA' },
        { title: 'PPP', content: 'AAAA' },
        { title: 'AAA', content: 'MMM' },
        { title: 'PPP', content: 'AAAA' },
        { title: 'QQQ', content: 'AAAA' }
      ],
      qty: 0
      */
    }
  },
  methods: {
    select: function (i) {
      this.$emit('select', {index: i})
    }
    /*
    add: function () {
      this.qty++
    }
    */
  }
}
</script>
