<template>
		<div class="meeting-room-container" id="meeting-room-container">
            <meeting-room-nav class="meeting-room-nav" :list="navList"></meeting-room-nav>	
            <div class="row meeting-room-list">
                <div class="meeting-room col-md-4 col-xs-4">
                    <h3>一号会议室</h3>
                    <p>规模：5人</p>
                    <p>设备：
                        <span class="text-info">摄像头 投影仪</span>
                    </p>
                    <p>状态：
                        <span class="text-danger">使用中</span>
                    </p>
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="orderMeeting">预约会议</button>
                </div>
                <div class="meeting-room col-md-4 col-xs-4">
                    <h3>一号会议室</h3>
                    <p>规模：5人</p>
                    <p>设备：
                        <span class="text-info">摄像头 投影仪</span>
                    </p>
                    <p>状态：
                        <span class="text-danger">使用中</span>
                    </p>
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="orderMeeting">预约会议</button>
                </div>
                <div class="meeting-room col-md-4 col-xs-4">
                    <h3>一号会议室</h3>
                    <p>规模：5人</p>
                    <p>设备：
                        <span class="text-info">摄像头 投影仪</span>
                    </p>
                    <p>状态：
                        <span class="text-danger">使用中</span>
                    </p>
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="orderMeeting">预约会议</button>
                </div>
                <div class="meeting-room col-md-4 col-xs-4">
                    <h3>一号会议室</h3>
                    <p>规模：5人</p>
                    <p>设备：
                        <span class="text-info">摄像头 投影仪</span>
                    </p>
                    <p>状态：
                        <span class="text-danger">使用中</span>
                    </p>
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="orderMeeting">预约会议</button>
                </div>
                <div class="meeting-room col-md-4 col-xs-4">
                    <h3>一号会议室</h3>
                    <p>规模：5人</p>
                    <p>设备：
                        <span class="text-info">摄像头 投影仪</span>
                    </p>
                    <p>状态：
                        <span class="text-info">空闲</span>
                    </p>
                    <button class="btn btn-info pull-right" @click.prevent="orderMeeting">预约会议</button>
                </div>
            </div>
            <edit-panel v-if="isEditing" edit-mode="meeting" :info="meetingRoomInfo"  @quit-edit="isEditing=false" ></edit-panel>
	    </div>
</template>

<script>
	import MeetingRoomNav from './ContentNav.vue'
	import EditPanel from './EditPanel.vue'

   
	
	export default {
		name: 'meetingRoom',
		data () {
			return {
				navList: [
					{
						text: ' 可预约',
						isActive: true,
					},
					{
						text: '全部',
						isActive: false
					}

				],
                meetingRoomInfo: {
                    meetingRoom: ['一号会议室']
                },
				isEditing: false
			}
		},
		methods: {
			orderMeeting () {
				this.isEditing = true
			}
		},
		components: {MeetingRoomNav, EditPanel}
	}
</script>

<style>
	.meeting-room-nav{
		width:1090px;
	}
    .meeting-room{
        position:relative;
        box-sizing: border-box;
        border:rgb(210,210,210) 1px solid;
        width:350px;
        height:160px;
        margin-right: 20px;
        margin-bottom: 30px;
    }
    .meeting-room h3{
        margin-bottom: 20px;
    }
    .meeting-room p{
        color:rgb(133,133,133);
    }
    .meeting-room button{
        position:absolute;
        bottom:10px;right:10px;
    }
</style>