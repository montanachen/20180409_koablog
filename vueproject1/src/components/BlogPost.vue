<template>
<div >
  <ul>
      <input v-model="newTitle" placeholder="edit me">
      <input v-model="newContent" placeholder="edit me">
      <p>=================</p>
      <button @click = "create()">Save Data</button>
  </ul>
</div>
</template>

<script>
export default {
  name: 'BlogPost',
  data () {
    return {
      /*
      todos: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'AAAAA' },
        { message: 'BBBB' },
        { message: 'CCC' },
        { message: 'KKK' }
      ],
      */
      newTitle: 'New  Title',
      newContent: 'New  Content',
      counter: 0
    }
  },
  methods: {
    create: function () {
      /*
      this.todos.push(this.newtitle)
      this.todos.push(this.newcontent)
      console.log(this.todos[6].title, '  x  ', this.todos[6].content)
      */
      let post = {title: this.newTitle, content: this.newContent}
      console.log('emit: post:', post)
      this.$emit('post', post)
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
