export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === '/login'){
        return
    }
    console.log(to, from, "I am logging from global")
})
