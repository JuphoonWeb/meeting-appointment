<template>
	<nav class="navbar navbar-default navbar-inverse">
          <div class="container">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <a class="navbar-brand active" href="#">{{title}}</a>
              <ul class="nav navbar-nav">
				<template v-for="item in items" >
					<template v-if="item.items" >
		                <li :class="{active: item.isActive}">
		                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{item.label}}<span class="caret"></span></a>
		                  <ul class="dropdown-menu">
							<template v-for="option in item.items">	
		                    	<li :class="{active:option.isActive}" @click="select(item,option)"><a href="#">{{option.label}}</a></li>
		                    </template>
		                  </ul>
		                </li>
	            	</template>

					<template v-else>	
						<li :class="{active: item.isActive}"  @click.prevent="select(item)">
							<a href="">{{item.label}}</a>
						</li>
					</template>
				</template>
              </ul>
              
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  {{user.name}} <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <template v-for="item in user.options">
                    	<li @click.prevent="quit"><a href="">退出</a></li>
                    </template>                    
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>

</template>

<script>
	export default {
		data (){
			return {
				title:'会议预约系统',
				items: this.list,
				user: {
					name: 'username',
					charactor: 'administritor',
					options:[
						{
							label: '退出',
						}
					]
				}
			}
		},
		props:['list'],
		methods: {
			select (selectedItem,selectedOption) {
				for(let item of this.items){
					item.isActive = false
				}
				selectedItem.isActive = true				
				
				if(selectedOption){
					for(let option of selectedItem.items){
						option.isActive = false
					}
					selectedOption.isActive = true
				}
			},
			quit () {
				swal('退出登录')
			}
		}
	}
</script>