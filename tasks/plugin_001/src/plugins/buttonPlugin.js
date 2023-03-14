import CustomButton from "@/components/CustomButton.vue"

export default{
    install:(app,options)=>{
        app.component('custom-button',CustomButton)

        app.directive('font-size',(el,binding,vnode)=>{
            var size=16;
            switch(binding.arg){
                case 'small':
                     // with hard coding
                     size=12;
                    // with options
                    // size=options.fontSize.small;
                    break;
                case 'medium':
                    // with hard coding
                    size=16;
                    break;
                case 'large':
                    size=36;
                    break;
                default:
                    size;
                    break;
            }

            el.style.fontSize=size+'px';
        })

        app.mixin({
            data(){
                return{
                    portfolioLink:'https://kirankumarportfolio.vercel.app'
                }
            },
            created(){
                console.log("printing created hook in console from global mixin")
            }
        })

        const logout=()=>{
            console.log("logged out called")
        }

        app.provide('logout',logout)
    }
}