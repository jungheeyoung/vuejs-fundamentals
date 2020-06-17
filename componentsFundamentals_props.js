let PlanComponent = {
  template : "#plan-template",
  props: {
    name: {
      type: String, //문자열이여야만 가능하게 
      default:'alex', //아무 것도 안주면 alex로 전달하겠다
      required : true // true 일 경우 정보를 주지 않으면 에러 발생, 
    },
    selectedPlan:{
      type:String
    },
  },
  computed:{
    isSelected(){
      return this.name === this.selectedPlan
    }
  },
  methods:{
    select(){
      this.$emit('select', this.name) //부모의 select를 실행할 때 자신의 name을 같이 넘겨줌 
     // this.selected = true
    }
  }
}
let PlanPickerComponent = { //상위
  template : "#plan-picker-template",
  components :{
    plan : PlanComponent //해석할 태그 : 해당 컴포넌트로 변경해라 -> 
  },
  data() {
    return {
      plans:['The Single', 'The Curious', 'The Addict'],
      selectedPlan : null
    }
  },
  methods:{
    selectPlan(plan){
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el : '#app',
  components:{
    'plan-picker' : PlanPickerComponent // plan-picker 라는 태그를 만나면 해당 컴포넌트로 연결해라
  }
})