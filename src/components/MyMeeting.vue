<template>
	<div class="my-meeting-container" id="my-meeting-container">
		<my-meeting-nav class="my-meeting-nav" :list='navList'></my-meeting-nav>                
        <table class="my-meeting-table table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>会议主题</th>
                    <th>开始时间</th>
                    <th>会议室</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td >预约中</td>
                    <td>
                        <button @click="edit" class="btn btn-info">修改</button>
                        <button  class="btn btn-warning" @click.prevent="cancel" >取消预约</button>
                    </td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td >预约中</td>
                    <td>
                        <button @click="edit" class="btn btn-info">修改</button>
                        <button class="btn btn-warning" @click.prevent="cancel" >取消预约</button>
                    </td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td >预约中</td>
                    <td>
                        <button @click="edit" class="btn btn-info">修改</button>
                        <button class="btn btn-warning" @click.prevent="cancel" >取消预约</button>
                    </td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td >预约中</td>
                    <td>
                        <button @click="edit" class="btn btn-info">修改</button>
                        <button class="btn btn-warning" @click.prevent="cancel" >取消预约</button>
                    </td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="info">待审批</td>
                    <td>
                    	<button disabled @click="edit" class="btn btn-info">修改</button>
                        <button class="btn btn-warning" @click.prevent="cancel" >取消预约</button>
                    </td>
                </tr>
                <tr>
                    <td>一个主题</td>
                    <td>2017-08-14 11:00</td>
                    <td>一号会议室</td>
                    <td class="success">审批通过</td>
                    <td>
                        <button disabled @click="edit" class="btn btn-info">修改</button>
                        <button disabled class="btn btn-warning" @click.prevent="cancel" >取消预约</button>                         
                    </td>
                </tr>
            </tbody>
        </table>
        <edit-panel edit-mode="meeting" v-if="isEditing" @quit-edit="isEditing=false" :info="currentMeeting"></edit-panel>
    </div>
            
</template>

<script>
	import MyMeetingNav from './ContentNav.vue'
	import EditPanel from './EditPanel.vue'
	
	export default {
		name: 'myMeeting',
		data () {
			return {
				navList: [
							{
								text: '预约中',
								isActive: true
							},
							{
								text: '审批通过',
								isActive: false
							},
							{
								text: '待审批',
								isActive: false
							},
							{
								text: '全部',
								isActive: false
							},
						],
				currentMeeting: {
                    title: '会议修改',
					theme: '一个主题',
					begintime: '2017-08-14 11:00',
					endtime: '2017-08-14 11:30',
					meetingRoom: ['一号会议室'],
					status: '预约中'

				},		
				isEditing: false		
			}
		},
		methods: {
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
		components:{MyMeetingNav, EditPanel}
	}
</script>

