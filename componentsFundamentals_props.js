Vue.component('plan-picker', {
  template : "#plan-picker-template",
  data() {
    return {
      plans:['The Single', 'The Curious', 'The Addict']
    }
  }
})

Vue.component('plan', {
  template : "#plan-template",
  props: {
    name: {
      type: String, //문자열이여야만 가능하게 
      default:'alex', //아무 것도 안주면 alex로 전달하겠다
      required : true // true 일 경우 정보를 주지 않으면 에러 발생, 
    }
  }
})

new Vue({
  el : '#app',
})