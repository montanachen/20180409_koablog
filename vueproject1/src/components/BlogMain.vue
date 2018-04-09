<template>
<div>
  <button @click = "op='disp'">Disp</button>
  <button @click = "op='post'">Create New Post</button>
  <blog-disp v-if="op==='disp'" :todos="todos" v-on:select="blogSelect"/>
  <blog-post v-if="op==='post'" v-on:post="blogPost"/>
  <blog-show v-if="op==='show'" :post="todos[todoIdx]" v-on:back="op='disp'"/>
</div>
</template>

<script>
import BlogDisp from './BlogDisp.vue'
import BlogPost from './BlogPost.vue'
import BlogShow from './BlogShow.vue'

export default {
  name: 'BlogMain',
  data () {
    return {
      op: 'disp',
      todos: [
        { title: 'PPP', content: 'AAAA' },
        { title: 'PPP', content: 'AAAA' },
        { title: 'AAA', content: 'MMM' },
        { title: 'PPP', content: 'AAAA' },
        { title: 'QQQ', content: 'AAAA' }
      ],
      todoIdx: 0,
      qty: 0
    }
  },
  components: {
    BlogPost,
    BlogDisp,
    BlogShow
  },
  methods: {
    add: function () {
      this.qty++
    },
    blogPost: function (todo) {
      console.log('todo=', todo)
      this.todos.push(todo)
      this.op = 'disp'
    },
    blogSelect: function (payload) {
      console.log('blogSelect: payload=', payload)
      this.todoIdx = payload.index
      this.op = 'show'
    }
  }
}
</script>
