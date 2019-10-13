const percentageSix = (x) => { return (x * 0.69)}

const percentage = new Vue({
  el: '#percentage',
  data: {
    firstNumber: 5
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      return `69 percent of ${this.firstNumber} is ${percentageSix(i)}.`
    }
  }
})