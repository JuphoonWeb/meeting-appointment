<template>
	<div class="my-meeting-container" id="my-meeting-container">
		<device-management-nav class="device-management-nav" :list='navList'></device-management-nav>                
        <table class="my-meeting-table table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>设备名称</th>
                    <th>设备编号</th>
                    <th>设备类型</th>
                    <th>所属会议室</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="info">空闲</td>
                    <td>
                        <button class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="info">空闲</td>
                    <td>
                        <button class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="info">空闲</td>
                    <td>
                        <button class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="info">空闲</td>
                    <td>
                        <button class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="info">空闲</td>
                    <td>
                        <button class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="warning">使用中</td>
                    <td>
                        <button disabled="" class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button disabled="" class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
                <tr>
                    <td>摄像头-1</td>
                    <td>001</td>
                    <td>摄像头</td>
                    <td>一号会议室</td>
                    <td class="warning">使用中</td>
                    <td>
                        <button disabled="" class="btn btn-info" @click.prevent="setDevice" >设置</button>
                        <button disabled="" class="btn btn-warning" @click.prevent="deleteDevice" >删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-info pull-right" @click="addDevice" >添加设备</button>
        <edit-panel edit-mode="device" v-if="isEditing" @quit-edit="isEditing=false" :info="basicInfo" ></edit-panel>
    </div>
            
</template>

<script>
	import DeviceManagementNav from './ContentNav.vue'
	import EditPanel from './EditPanel.vue'
	
	export default {
		name: 'deviceManagement',
		data () {
			return {
				navList: [
							{
								text: '空闲',
								isActive: true
							},
                            {
                                text: '使用中',
                                isActive: false
                            },
							{
								text: '全部',
								isActive: false
							},
						],
                deviceInfo: {
                    meetRoom: '',

                },
                basicInfo: {
                    title: '设置设备',
                    deviceTypes: ['摄像头','投影仪'],
                    meetingRooms: ['一号会议室','二号会议室','三号会议室'] 
                },	
				isEditing: false		
			}
		},
		methods: {
			deleteDevice () {
                swal({
                    title: '确定删除该设备吗 ？',
                    text: '设备名称： 摄像头-1',
                    type: 'warning',
                    showCancelButton: true
                })
            },
            addDevice () {
                this.isEditing = true
                this.basicInfo.title = "添加新设备"
            },
            setDevice () {
                this.isEditing = true
            }
		},
		components:{DeviceManagementNav, EditPanel}
	}
</script>

