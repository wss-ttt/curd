
const state={
	users:[
		{
			id:1,
			name:'乔峰',
			tel:'111'
		},
		{
			id:2,
			name:'小龙女',
			tel:'222'
		},		
		{
			id:3,
			name:'杨过',
			tel:'333'
		}
	]
};


const actions={
	// 添加
	addUser({commit},params){
		commit('addUser',params);
	},
	// 删除操作
	removeUser({commit},params){
		commit('removeUser',params);
	},
	// 更新操作
	updateUser({commit},params){
		commit('updateUser',params);
	}
};


const mutations={
	// 添加
	addUser(state,params){
		let user={
			id:state.users.length+1,
			...params
		};
		state.users.push(user);
	},
	// 删除
	removeUser(state,params){
		state.users = state.users.filter((item,index)=>{
			return item.id!=params.id;
		});
	},
	// 更新操作
	updateUser(state,params){
		for(let i=0;i<state.users.length;i++){
			if(state.users[i].id==params.id){
				state.users[i].name=params.name;  // 修改姓名
				state.users[i].tel=params.tel;  // 修改电话号码
			}
		}
	}
};

export default{
	state,
	actions,
	mutations
}