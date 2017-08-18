<template>
	<div class="my-meeting-container" id="my-meeting-container">
        <user-management-nav class="user-management-nav" :list='navList'></user-management-nav>
        <div class="user-query pull-right">
            <form action="" class="form-inline">
                <div class="form-group">
                    <label for="">姓名</label>
                    <input type="text" class="form-control" value="全部">
                </div>
                <div class="form-group">
                    <label for="">所属部门</label>
                    <select name="" id="" class="form-control">
                        <option v-for="department in basicInfo.departments"  value="" >{{department}}</option>
                    </select>
                </div>
                <div class="btn btn-default" >查询 <span class="glyphicon  glyphicon-query"></span></div>
            </form>
        </div>
	    <table class="user-table table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>用户名</th>
                    <th>系统角色</th>
                    <th>所属部门</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Young Jack</td>
                    <td class="info" >普通用户</td>
                    <td>不知道什么部</td>
                    <td>
                        <button class="btn btn-warning" @click="deleteUser">删除用户</button>
                    </td>
                </tr>
                <tr>
                    <td>Young Jack</td>
                    <td class="info" >普通用户</td>
                    <td>不知道什么部</td>
                    <td>
                        <button class="btn btn-warning" @click="deleteUser">删除用户</button>
                    </td>
                </tr>
                <tr>
                    <td>Young Jack</td>
                    <td class="info" >普通用户</td>
                    <td>不知道什么部</td>
                    <td>
                        <button class="btn btn-warning" @click="deleteUser">删除用户</button>
                    </td>
                </tr>
                <tr>
                    <td>Young Lo</td>
                    <td class="success">管理员</td>
                    <td>不知道什么部</td>
                    <td>
                        <button disabled="" class="btn btn-warning" @click="deleteUser">删除用户</button>
                    </td>
                </tr>
                <tr>
                    <td>Young Lo</td>
                    <td class="success">管理员</td>
                    <td>不知道什么部</td>
                    <td>
                        <button disabled="" class="btn btn-warning" @click="deleteUser">删除用户</button>
                    </td>
                </tr>
            </tbody>

        </table>
        <button @click.prevent="addUser" class="btn btn-info pull-right">新增用户</button>
        <edit-panel edit-mode="user" v-if="isEditing" :info="basicInfo" @quit-edit="isEditing=false" ></edit-panel>
    </div>
            
</template>

<script>
	
    import UserManagementNav from './ContentNav.vue'
	import EditPanel from './EditPanel.vue'
	
	export default {
		name: 'UserManagement',
		data () {
			return {
				navList: [
							{
								text: '普通用户',
								isActive: true
							},
							{
								text: '管理员',
								isActive: false
							},
							{
								text: '全部',
								isActive: false
							},
						],
                basicInfo: {
                    title: '新增用户',
                    systemRoles: ['普通用户','管理员'],
                    departments: ['不知道什么部','就是那个部','第三个部']
                },
						
				isEditing: false		
			}
		},
		methods: {
			addUser () {
                this.isEditing = true
            },
            deleteUser () {
                swal({
                    title: '确定删除该用户吗?',
                    text: '用户名：Young Jack',
                    type: 'warning',
                    showCancelButton: true
                })
            }
		},
		components:{ EditPanel,UserManagementNav}
	}
</script>

<style>
    .user-query{
        margin-top: -20px;
        margin-bottom: 20px;
    }
</style>


