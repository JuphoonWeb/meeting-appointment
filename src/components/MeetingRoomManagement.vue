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
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="editMeetingRoom">编辑</button>
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
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="editMeetingRoom">编辑</button>
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
                    <button class="btn btn-info pull-right" @click.prevent="editMeetingRoom">编辑</button>
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
                    <button class="btn btn-info pull-right" disabled="" @click.prevent="editMeetingRoom">编辑</button>
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
                    <button class="btn btn-info pull-right" @click.prevent="editMeetingRoom">编辑</button>
                </div>
                <div class="add-meeting-room meeting-room col-md-4 col-xs-4">
                    <img @click="createMeetingRoom" src="../assets/add.svg" alt="" title="创建新会议室">                    
                </div>
            </div>
            <edit-panel edit-mode="meeting-room" v-if="isEditing" :info="meetingRoomInfo" meeting-room="一号会议室"  @quit-edit="isEditing=false"></edit-panel>
        </div>
</template>

<script>
    import MeetingRoomNav from './ContentNav.vue'
    import EditPanel from './EditPanel.vue'
    
    export default {
        name: 'MeetingRoomManagement',
        data () {
            return {
                navList: [
                    {
                        text: '可编辑',
                        isActive: true,
                    },
                    {
                        text: '使用中',
                        isActive: false
                    },
                    {
                        text: '全部',
                        isActive: false
                    }

                ],
                meetingRoomInfo: {
                    title: '',
                    name: '一号会议室',
                    device: '摄像头',
                    capacity: '5'
                },
                isEditing: false
            }
        },
        methods: {
            editMeetingRoom () {
                this.meetingRoomInfo.editTitle = '会议室设置'
                this.isEditing = true
            },
            createMeetingRoom () {
                this.meetingRoomInfo = {}
                this.meetingRoomInfo.editTitle = '创建新会议室'
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
    .add-meeting-room{
        
    }
    .add-meeting-room img{
        display: block;
        width:72px;height:72px;
        margin :40px auto;
        cursor: pointer;
    }
    .add-meeting-room img:hover{
        animation :rotate .5s linear 1;
    }
    @keyframes rotate{
        from{
            transform: rotateZ(0deg);
        }
        to{
            transform: rotateZ(90deg);
        }
    }
</style>