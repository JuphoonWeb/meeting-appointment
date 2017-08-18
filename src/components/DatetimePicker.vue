<template>
  <!-- <div class="card"> -->

    <!-- for Vue 2.0 -->
      <time-picker  :date="startTime" :option="timeoption" :limit="limit"></time-picker>

  <!-- </div> -->
</template>

<script>

// for Vue 2.0
import TimePicker from './vue-datepicker-es6.vue'

export default {
  data () {
    return {

      // for Vue 2.0
      startTime: {
        time: this.timeNow || (new Date()).Format()
      },
      endtime: {
        time: ''
      },

      option: {
        type: 'multiday',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: 'rgb(0,197,195)',
          headerText: 'rgb(255,255,255)'
        },
        buttons: {
          ok: '确定',
          cancel: '取消'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['一', '二', '三', '四', '五', '六', '日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD HH:mm',
        placeholder: '请点击选择时间',
        inputStyle:{
          'width':'100%',
          'border':'none'
        },
         color: {
          header: 'rgb(0,197,195)',
          headerText: 'rgb(255,255,255)'
        },
        buttons: {
          ok: '确定',
          cancel: '取消'
        }
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: this.timeLimit === 'nolimit' ? []:[
      {
        type: 'fromto',
        from: (new Date()).PreviousDay(),
        to: ''
      }],
     
    }
  },
  components: {
    TimePicker
  },
  watch: {
    startTime: {
      handler (val,oldVal){
        var obj = {
          timeType: this.timeType,
          timeVal: val.time
        }
        this.$emit('timechange',obj)
      },
      deep:true
    }
  },
  props: ['timeType','timeNow','timeLimit']
}
</script>
