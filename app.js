new Vue({
    el: "#app",
    data: {
      newTodo: '',
      todos: [
        'طراحی وب',
        'یادگیری ویو جی اس',
        'تماشای فیلم',
        'رکورد ویدیو',
        'نوشتن مقاله',
      ]
    },
    methods: {
      addTodo () {
        if(this.newTodo == '') {
          alert('لطفا اینپوت را پر نمایید!')
        } else {
          this.todos.push(this.newTodo)
          this.newTodo = ''
        }
      },
      removeTodo (index) {
        this.todos.splice(index, 1)
      }
    }
  })