<template>
	<div class="my-meeting-container" id="my-meeting-container">
		<meeting-query-nav class="my-meeting-nav" :list='navList'></meeting-query-nav>         
        
        <div class="query-box pull-right">
            <form action="" class="form-inline">
                <div class="form-group">
                    <label for="">从</label>
                    <input is="datetime-picker" :time-now="queryTime.begintime" time-limit="nolimit"  time-type='begintime' class="form-control" @timechange="getTimeVal">
                </div>
                <div class="form-group">
                    <label for="">到</label>
                    <input is="datetime-picker" :time-now="queryTime.endtime" time-limit="nolimit"  time-type='endtime' class="form-control" @timechange="getTimeVal">
                </div>
                 <div class="btn btn-default" >查询 <span class="glyphicon  glyphicon-query"></span></div>
            </form>
        </div>

        <table class="my-meeting-table table table-striped table-hovered table-hover table-bordered">
            <thead>
                <tr>
                    <th>会议主题</th>
                    <th>发起人</th>
                    <th>开始时间</th>
                    <th>会议室</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="warning">审批未通过</td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>Jony J</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="warning">审批未通过</td>
                </tr>
            </tbody>
        </table>
    </div>
            
</template>

<script>
	import MeetingQueryNav from './ContentNav.vue'
    import DatetimePicker from './DatetimePicker.vue'
	
	export default {
		name: 'meetingQuery',
		data () {
			return {
				navList: [
							{
								text: '审批通过',
								isActive: true
							},
							{
								text: '审批未通过',
								isActive: false
							},
							{
								text: '全部',
								isActive: false
							},
						],
                queryTime: {
                    begintime: '2017-01-01 00:00',
                    endtime: (new Date()).Format()
                }	
			}
		},
		methods: {
            getTimeVal (timeObj) {
                this.queryTime[timeObj.timeType] = timeObj.timeVal
            },
			cancel () {
				swal({
					title: '确定取消该条预约吗？',
					type: 'warning',
					text:'会议主题：一个主题',
					showCancelButton: true
				})
			},
			edit () {
				this.isEditing = true
				this.$emit('edit-meeting')
			}
		},
        watch: {
            queryTime:{ 
                handler (val,oldVal) {
                    console.log('begintime:',val.begintime)
                    console.log('endtime:',val.endtime)
                },
                deep: true
            }
        },
		components:{MeetingQueryNav, DatetimePicker }
	}
</script>

<style>
    .query-box{
        margin-top: -20px;
        margin-bottom:20px;
    }
</style>

