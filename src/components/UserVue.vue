<template>
    <TableVue ref="ttbale"></TableVue>
    
    <div class="resgist" v-if="isshow">
    <p><label>账号</label><input type="text" placeholder="请输入要加入成员的微信" v-model="user"></p>
    <p><label>权限</label><input type="text" placeholder="请输入要加入成员的权限" v-model="auth"></p>
    <button :onclick='adduserfunc'>确认</button>
    </div>
    <button :onclick='resgist_show'>加入</button>
    <button :onclick="del_user_checked">删除</button>
    


</template>

<script>
import TableVue from './TableVue.vue'

export default {
    name: "UserVue",
    components: {
        TableVue
    },
    data() {
        return {
            user: '',
            auth: '',
            arr: [],
            dialogVisible: false,
            secureCode: "",
            isshow:false,
        }
    },
    mounted() {
        this.$refs.ttbale.get_user_list()
    },
    methods: {
      //弹窗输入对话框
        showConfirmCodeDialog() {
            this.dialogVisible = true;//显示弹窗
        },
        confirmDelete() {
            console.log("调用了确定删除按钮")
        },
        resgist_show:function(){
            this.isshow=true
        },
        adduserfunc:function(){
            this.isshow=false
            var _user=this.user
            var _auth=this.auth
            this.$refs.ttbale.add_user(_user,_auth)
        },
        del_user_checked:function(){
            this.$refs.ttbale.del_user_checked()
        }

    },

}


</script>

<style>
.resgist {
    width: 400px;
    height: auto;
    border:solid;
    text-align: center;
    margin: 0 auto;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color: white;
    position:absolute;
}


</style>