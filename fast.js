const app=Vue.createApp({
  data(){
    return{
      // finalresul:"1"
      // 
      // 
      // randomcolor:["green","yellow","red","black","pink","blue"],
      // color:""
      // 
      // 
      alowit:false,
      insidetext:"Show The Message"
    }
  },
  methods: {
    onchanging:function(){
      this.alowit=!this.alowit
      if(this.insidetext=="Show The Message"){
        this.insidetext="Hide The Message"
      }else{
        this.insidetext="Show The Message"
      }
    }
  },
  // mounted() {
  //   let randomone=Math.floor(Math.random()*this.randomcolor.length);
  //   console.log(this.randomcolor[randomone])
  //   return this.color=this.randomcolor[randomone];
  // },
})
app.mount(`#app`)