<template>
	<div id="edit-panel-container">	
		<div :class="[isEditing?'fadeIn':'fadeOut','edit-panel-mask' ,'animated']"></div>
		
		<div v-if="mode === 'meeting'" :class="[isEditing?'flipInX':'flipOutX','edit-panel', 'edit-panel-meeting', 'animated']">
				<div @click="quitEdit" class="quit pull-right"><span>&times;</span></div>
				<form class="form" novalidate>
					<legend v-if="info && info.title">{{info.title}}</legend>
					<div class="form-group">
						<label for="">会议主题</label>
						<input maxlength="30" type="text" class="form-control" v-model="meetingInEdit.theme" placeholder="请输入会议主题">
					</div>
					<div class="form-group">
						<label for="">会议室</label>	
						<input maxlength="30" readonly type="text" class="form-control" style="background-color:rgb(255,255,255)" v-model="meetingInEdit.meetingRoom">
					</div>
					<div class="form-group">
						<label for="">开始时间</label>
						<input is="datetime-picker" :time-now="info.begintime || ''" time-type='begintime' class="form-control" @timechange="getTimeVal">
					</div>
					<div class="form-group">
						<label for="">结束时间</label>
						<input is="datetime-picker" :time-now="info.endtime || ''" time-type='endtime' class="form-control" @timechange="getTimeVal">
					</div>
					
					<div class="btn-group btn-group-justified">
						<div class="btn-group">
							<button @click.prevent="submit" class="btn btn-primary">确定</button>
						</div>	
					
						<div class="btn-group">
							<button @click.prevent="quitEdit" class="btn btn-default">取消</button>
						</div>
					
					</div>
				</form>
		</div>

		<div v-if="mode === 'meeting-room'" class="edit-panel edit-panel-meeting-room animated" :class="[isEditing?'flipInX':'flipOutX']">
			<div @click="quitEdit" class="quit pull-right"><span>&times;</span></div>
			<form class="form" novalidate>
				<legend v-if="info && info.title">{{info.title}}</legend>
				<div class="form-group">
					<label for="">会议室名称</label>
					<input type="text" class="form-control" v-model="meetingRoomInEdit.name" placeholder="请输入会议室名称">
				</div>
				<div class="form-group">
					<label for="">设备</label>
					<input type="text" class="form-control" v-model="meetingRoomInEdit.device">
				</div>
				<div class="form-group">
					<label for="">规模(可容纳人数)</label>
					<select name="" id="" class="form-control" v-model="meetingRoomInEdit.capacity">
						<option value="" v-for="n in 20" >{{n}}</option>
					</select>
				</div>
				<div class="btn-group btn-group-justified">
					<div class="btn-group">
						<button  @click.prevent="submit" class="btn btn-primary">确定</button>
					</div>	
				
					<div class="btn-group">
						<button @click.prevent="quitEdit" class="btn btn-default">取消</button>
					</div>
				</div>
			</form>
		</div>

		<div v-if="mode === 'user'" class="edit-panel edit-panel-meeting-room animated" :class="[isEditing?'flipInX':'flipOutX']">
			<div @click="quitEdit" class="quit pull-right"><span>&times;</span></div>
			<form class="form" novalidate>
				<legend v-if="info && info.title">{{info.title}}</legend>
				<div class="form-group">
					<label for="">用户名</label>
					<input type="text" class="form-control"  placeholder="请输入用户名" v-model="newUserInfo.name">
				</div>
				<div class="form-group">
					<label for="">系统角色</label>
					<select class="form-control" name="" id="" v-model="newUserInfo.systemRole">
						<option v-for="item in basicInfo.systemRole" value="">{{item}}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="">所属部门</label>
					<select class="form-control" value="" v-model="newUserInfo.department">
						<option v-for="department in basicInfo.departments" value="">{{department}}</option>
					</select>
				</div>
				<div class="btn-group btn-group-justified">
					<div class="btn-group">
						<button  @click.prevent="submit" class="btn btn-primary">确定</button>
					</div>	
				
					<div class="btn-group">
						<button @click.prevent="quitEdit" class="btn btn-default">取消</button>
					</div>
				</div>
			</form>
		</div>

		<div v-if="mode === 'device'" class="edit-panel edit-panel-meeting-room animated" :class="[isEditing?'flipInX':'flipOutX']">
			<div @click="quitEdit" class="quit pull-right"><span>&times;</span></div>
			<form class="form" novalidate>
				<legend v-if="info && info.title">{{info.title}}</legend>
				<div class="form-group">
					<label for="">设备名称</label>
					<input type="text" class="form-control" placeholder="请输入设备名称">
				</div>
				<div class="form-group">
					<label for="">设备类型</label>
					<select name="" id="" class="form-control">
						<option v-for="item in basicInfo.deviceTypes" value="">{{item}}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="">所属会议室</label>
					<select name="" id="" class="form-control">
						<option v-for="item in basicInfo.meetingRooms" value="">{{item}}</option>
					</select>
				</div>
				<div class="btn-group btn-group-justified">
					<div class="btn-group">
						<button  @click.prevent="submit" class="btn btn-primary">确定</button>
					</div>	
				
					<div class="btn-group">
						<button @click.prevent="quitEdit" class="btn btn-default">取消</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

	import DatetimePicker from './DatetimePicker.vue'

	export default{
		name: 'editPanel',
		data () {
			return{	
				mode: this.editMode,
				meetingInEdit: this.info ?
				{
					theme: this.info.theme || '',
					meetingRoom: this.info.meetingRoom || '一号会议室',
					begintime: this.info.begintime || '',
					endtime: this.info.endtime || ''
				}:{
					theme: '',
					meetingRoom: '一号会议室',
					begintime: '',
					endtime: ''
				},
				meetingRoomInEdit: this.info ? 
				{
					name: this.info.name || '',
					device: this.info.device || '',
					capacity: this.info.capacity || ''
				}:{},

				basicInfo: this.info ? {
					systemRole: ['普通用户','管理员'],
					departments: this.info.departments || [],
					meetingRooms: this.info.meetingRooms || [],
					deviceTypes: this.info.deviceTypes || [],
					availableDevices: ['摄像头-1','摄像头-2','投影仪-1']

				}:{
					
					systemRole: ['普通用户','管理员'],
					departments: [],

				},
				
				newUserInfo: 
				{
					name: '',
					systemRole: '',
					department: ''
					
				},

				isEditing: true,
				cancelEdit: false,
				isPickingTime: false,

			}
		},
		methods: {

			getTimeVal (timeObj) {

				console.log(timeObj)	

				this.meetingInEdit[timeObj.timeType] = timeObj.timeVal 
			},
			submit () {
				if(this.mode === 'meeting'){
					var meetInfo = this.meetingInEdit
					if(meetInfo.theme === ''){
						swal('请填写会议主题')
					}else if(meetInfo.begintime === ''){
						swal('请输入选择时间')
					}else if(meetInfo.endtime === ''){
						swal('请输入选择时间')
					}
				}else if(this.mode === 'user'){

				}
			},
			quitEdit () {
				this.isEditing = false
				var that = this
				setTimeout(function(){
						that.$emit('quit-edit')
					}
				,500)
			}
		},
		watch: {
			meetingInEdit: {
				handler (val,oldVal) {
					console.log('new begintime')
					console.log(val.begintime)
					console.log('new endtime')
					console.log(val.endtime)	
				},
				deep: true


			}
		},
		props: ['editMode','info'],
		components: {DatetimePicker}
	}
</script>

<style>
	.edit-panel-container{
		display: none
	}
	.edit-panel-mask{
		position:fixed;
		top:0;left:0;
		width:100%;height:100%;
		background-color:rgba(0,0,0,.3);
		z-index:99;
	}
	.edit-panel{
		position:absolute;
		top:20%;left:38%;
		/*transform: translate(-50%,-50%);*/
		width:450px;height:450px;
		background-color: rgb(255,255,255);
		border-radius: 5px;
		z-index:100;
	}
	.edit-panel-meeting{
		height:510px;
	}
	.edit-panel form{
		margin:45px auto;
		width:70%;
	}
	.edit-panel button{
		margin-top:30px;
	}
	.edit-panel .quit{
		width:32px;height:32px;
		margin:10px;
		cursor: pointer;
	}
</style>