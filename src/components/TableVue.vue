<template>
    <table border="1">
        <tr>
            <th>勾选</th>
            <th>微信</th>
            <th>权限</th>
            <th>修改</th>
            <th>删除</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="index">
            <th><input type="checkbox" v-model="checkval" :value="item[0]">{{index+1}}</th>
            <th>{{ item[0] }}</th>
            <th contenteditable="true" ><input type="text" v-model="item[1]"></th>
            <th><input type="button" value="删除" @click="del_user(item[0])"></th>
            <th><input type="button" value="修改" @click="update_user(item[0],item[1])"></th>
        </tr>
    </table>
</template>

<script>
export default {
    name: "TableVue",
    props: {

    },
    data() {
        return {
            arr:[],
            checkval:[],
        }
    },
    methods: {
        get_user_list: function () {
            var _this = this
            this.axios({
                url: "http://localhost:5000/getall_user",
                method: "get"
            }).then(function (response) {
                _this.arr = response.data
            })
        },
        del_user: function (_user) {
            var _this = this
            this.axios({
                url: "http://localhost:5000/del_user",
                methond: "get",
                params: { "user": JSON.stringify(_user)}
            }).then(function (response) {
                console.log(response.data)
            })
            setTimeout(() => {
                this.get_user_list()
            }, 200)
        },
        update_user: function (_user,_auth) {
            var _this = this
            this.axios({
                url: "http://localhost:5000/update_user",
                methond: "get",
                params: { "user": _user, "auth": _auth }
            }).then(function (response) {
                console.log(response.data)
            })
            setTimeout(()=>{
                this.get_user_list()
            },200)
        },
        add_user: function (_user,_auth) {
            var _this = this
            this.axios({
                url: "http://localhost:5000/add_user",
                methond: "get",
                params: { "user": _user, "auth": _auth }
            }).then(function (response) {
                console.log(response.data)
                
            })
            setTimeout(() => {
                this.get_user_list()
            }, 200)

        },
        del_user_checked:function(){
            this.del_user(this.checkval)
            setTimeout(() => {
                this.get_user_list()
            }, 200)
            
        }

    },
    mounted() {
        this.get_user_list()
    },
}
</script>

<style>
table{
    margin: 0 auto;
}
</style>