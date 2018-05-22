<template>
<div id="app" :style="$route.name==='contentEdit'?soleStyle:null">
    <vue-header v-if="$route.name!=='Error'&& $route.name!=='contentEdit' && $route.name !== 'solicit'"></vue-header>
    <router-view></router-view>
    <vue-footer v-if="$route.name !== 'solicit'"></vue-footer>
</div>
</template>

<script type="text/ecmascript-6">
export default {

    components: {
        'vue-header': () => import('./components/header/header.vue'),
        'vue-footer': () => import('./components/footer/footer.vue')
    },

    data() {
        return {
            soleStyle: { minHeight:'600px' },
        }
    },

    created() {
        this.$store.dispatch("FETCH_FRESHEN_INFO")
    },

    mounted() {
        this.$router.beforeEach((to,from,next)=>{
            let uid = Number(this.$cookie('user_id'))
            if(to.name==='Login' && uid){
                next({ path: '/index' })
                return false
            }
            if(uid && Number(to.params.uid)===uid){
                if(to.name==='Reader'){
                    next({ path:'/user/index' })
                }else if(to.name==='bookShelf'){
                    next({ path:'/user/shelf' })
                }else if(to.name==='bookReview'){
                    next({ path:'/user/comment/book/1' })
                }else if(to.name==='spitSlot'){
                    next({ path:'/user/comment/chapter' })
                }else if(to.name==='Attention'){
                    next({ path:'/user/attention' })
                }else if(to.name==='Fans'){
                    next({ path:'/user/fans' })
                }
            }
            // 判断该路由是否需要登录权限
            if (to.meta.requireAuth) {
                if(uid){
                    this.$store.dispatch('FetchCheckLoginState').then(res=>{
                        if(res.returnCode===200){
                            if(to.path.indexOf('/author')>-1){
                                if(res.data===1 && to.name!=='authorApply'){
                                    next({ path:"/author/apply" })
                                }else {
                                    if(res.data===2 &&!from.name&&to.name==='authorApply'){
                                        next({ path:'/author/writing/index' })
                                    }else {
                                        next()
                                    }
                                }
                            }else {
                                next()
                            }
                        }else{
                            this.$store.state.userInfo = {}
                            next({ path: '/login', query: {redirect: to.fullPath} })
                        }
                    })
                }else {
                    this.$store.state.userInfo = {}
                    next({ path: '/login', query: { redirect: to.fullPath } })
                }
            }else {
                next()
            }
        })
    },

    watch:{
        // $route:function (val) {
        //     if(typeof window!=='undefined'){
        //         setTimeout(()=>{
        //             var _hmt = _hmt || []
        //             (function() {
        //                 //每次执行前，先移除上次插入的代码
        //                 document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
        //                 var hm = document.createElement("script")
        //                 hm.src = "https://hm.baidu.com/hm.js?ae2f46c8c11aad77feae3035de5c127e"
        //                 hm.id = "baidu_tj"
        //                 var s = document.getElementsByTagName("script")[0]
        //                 s.parentNode.insertBefore(hm, s)
        //             })()
        //         },0)
        //     }
        // }
    }
}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
@import './assets/css/reset'
@import "./assets/css/common"
</style>
