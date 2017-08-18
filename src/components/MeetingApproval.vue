<template>
	<div class="meet-approval">
		<approval-nav :list="navList"></approval-nav>
		<table class="table table-striped table-hover table-bordered">
			<thead>
				<tr>
					<th>申请人</th>
					<th>会议室</th>
					<th>会议主题</th>
					<th>开始时间</th>
					<th>结束时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Masiwei</td>
					<td>一号会议室</td>
					<td>打游戏</td>
					<td>2017-08-16 14:30</td>
					<td>2017-08-16 15:30</td>
					<td class="success" >已通过</td>
					<td>
						<button disabled="" class="btn btn-primary" @click.prevent="pass" >通过申请</button>
						<button disabled="" class="btn btn-warning" @click.prevent="refuse" >拒绝申请</button>
					</td>
				</tr>
				<tr>
					<td>Masiwei</td>
					<td>一号会议室</td>
					<td>打游戏</td>
					<td>2017-08-16 14:30</td>
					<td>2017-08-16 15:30</td>
					<td class="danger" >未通过</td>
					<td>
						<button disabled="" class="btn btn-primary" @click.prevent="pass" >通过申请</button>
						<button disabled="" class="btn btn-warning" @click.prevent="refuse" >拒绝申请</button>
					</td>
				</tr>
				<tr>
					<td>Masiwei</td>
					<td>一号会议室</td>
					<td>打游戏</td>
					<td>2017-08-16 14:30</td>
					<td>2017-08-16 15:30</td>
					<td class="info">待审批</td>
					<td>
						<button class="btn btn-primary" @click.prevent="pass" >通过申请</button>
						<button class="btn btn-warning" @click.prevent="refuse" >拒绝申请</button>
					</td>
				</tr>
				<tr>
					<td>Masiwei</td>
					<td>一号会议室</td>
					<td>打游戏</td>
					<td>2017-08-16 14:30</td>
					<td>2017-08-16 15:30</td>
					<td class="info">待审批</td>
					<td>
						<button class="btn btn-primary" @click.prevent="pass" >通过申请</button>
						<button class="btn btn-warning" @click.prevent="refuse" >拒绝申请</button>
					</td>
				</tr>
				<tr>
					<td>Masiwei</td>
					<td>一号会议室</td>
					<td>打游戏</td>
					<td>2017-08-16 14:30</td>
					<td>2017-08-16 15:30</td>
					<td class="info" >待审批</td>
					<td>
						<button class="btn btn-primary" @click.prevent="pass" >通过申请</button>
						<button class="btn btn-warning" @click.prevent="refuse" >拒绝申请</button>
					</td>
				</tr>
			</tbody>	
		</table>
	</div>	
</template>

<script>
	import ApprovalNav from './ContentNav.vue'

	export default {
		name: 'MeetingManagement',
		data () {
			return {
				navList: [
						{
							text: '待审批',
							isActive: true
						},
						{
							text: '已审批',
							isActive: false
						}

				]
			}
		},
		methods: {
			pass () {
				swal({
					title: '确定要通过该条会议申请吗？',
					text: '会议主题：打游戏',
					showCancelButton: true
				})
			},
			refuse () {
				swal({
					title: '确定要拒绝该条会议申请吗？',
					type: 'warning',
					text: '会议主题：打游戏',
					showCancelButton: true
				})	
			}

		},
		components: {ApprovalNav}
	}
</script>