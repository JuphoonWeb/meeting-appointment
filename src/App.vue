<template>
  <div id="app">
    	<headbar :list="navList"  ></headbar>	
  		<div class="container">	
  			<meeting-room v-if="navList[0].isActive"></meeting-room>
  			
  			<my-meeting v-if="navList[1].isActive"></my-meeting>
			
			<meeting-approval v-if="navList[2].isActive && navList[2].items[0].isActive" ></meeting-approval>
			<meeting-query v-if="navList[2].isActive && navList[2].items[1].isActive" ></meeting-query>
			
			<meeting-room-management v-if="navList[3].isActive && navList[3].items[0].isActive"></meeting-room-management>
			<device-management v-if="navList[3].isActive && navList[3].items[1].isActive"></device-management>
			<user-management v-if="navList[3].isActive && navList[3].items[2].isActive"></user-management>
  		</div>
  </div>
</template>

<script>

import Headbar from './components/Headbar.vue'
import MeetingRoom from './components/meetingRoom.vue' 
import MyMeeting from './components/MyMeeting.vue'
import MeetingApproval from './components/MeetingApproval.vue'
import MeetingRoomManagement from './components/MeetingRoomManagement.vue'
import MeetingQuery from './components/MeetingQuery.vue'
import DeviceManagement from './components/DeviceManagement.vue'
import UserManagement from './components/UserManagement.vue'

export default {
  name: 'app',
  data () {
  	return {
  		navList: [
					{
						label:'会议室',
						isActive: true
					},
					{
						label:'我的会议',
						isActive: false
					},
					{
						label:'会议管理',
						isActive: false,
						items:[
							{
								label: '会议审批',
								isActive: false,
							},{
								label: '会议查询',
								isActive: false
							}
						]
					},
					{
						label:'系统管理',
						isActive: false,
						items:[
							{
								label: '会议室管理',
								isActive: false
							},{
								label: '设备管理',
								isActive: false
							},{
								label: '用户管理',
								isActive: false
							}
						]
					}
				],
  	}
  },
  
  methods:{
  	test (num) {
  		console.log(num)
  	},
   },
  components:{
  	Headbar,
  	MeetingRoom,
  	MyMeeting,
  	MeetingApproval,
  	MeetingRoomManagement,
  	MeetingQuery,
  	UserManagement,
  	DeviceManagement
  }
}
</script>

<style>
</style>
