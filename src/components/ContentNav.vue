<template>
	<div class="content-nav row">
	    <ul>
	    	<li v-for='item in items' :class="{active:item.isActive}" @click="select(item)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'ContentNav',
		data () {
			return {
				items:this.list
			}
		},
		props: ['list'],
		methods: {
			select(currentItem){
				for(let item of this.items){
					item.isActive = false
				}
				currentItem.isActive = true
			}
		}
	}
</script>

<style>

	.content-nav{
        font-size: 16px;
        margin-bottom: 30px;   
    }
    .content-nav ul{
    	padding:0;
        border-bottom: 1px solid rgb(210,210,210);
    }
    .content-nav li{
        display: inline-block;
        width:100px;height:50px;
        line-height: 50px;
        text-align: center;
        cursor:pointer;
    }
    .content-nav li.active{
        color:rgb(0,197,195);
        border-bottom:2px solid rgb(0,197,195);
    }
    .content-nav li:hover{
        color:rgb(0,197,195);
    }
</style>