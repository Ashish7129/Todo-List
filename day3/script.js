// let app = new Vue({
//     el:"#app",
// data:{
//     title:"hello girish",
//     username:""
// },
// methods:
// {
//     Uppercase()
//     {
//         this.title = this.title.toUpperCase();
//     },
//     Lowercase()
//     {
//         this.title = this.title.toLowerCase();
//     }
// }
// })

let todo = new Vue({
    el:"#todo",
    data:{
        newtask:'',
        tasklist:[]
    },
    methods:{
        addtask()
        {
            this.tasklist.push({"name":this.newtask,"done":false})
            this.newtask = ''
        }
    }
    
})

