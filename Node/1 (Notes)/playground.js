const tasks = [
    {task: 'abc' , completed:true},
    {task: 'bvc' , completed:false},
    {task: 'ceds' , completed:false},
    {task: 'yaman' , completed:false}
]


const notCompleted = tasks.filter( task => !task.completed)


notCompleted.forEach(task => console.log(task.task))