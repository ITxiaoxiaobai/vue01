import Dialog from "@/components/common/dialog/index.vue";
import Vue from 'vue';

export default function () {
    let DialogTpl = Vue.extend(Dialog);
    let dialogInstance;
    if (dialogInstance){
        return ;
    }
    Vue.prototype.$commonDialog = {
        alert(options) {
            return new Promise((resolve, reject) => {
                options.show=true;
                options.resolve = resolve;
                options.reject = reject;
                options.showCancelButton = false;
                dialogInstance = new DialogTpl({
                    data: options
                });
                document.body.appendChild(dialogInstance.$mount().$el);
            })
        },
        confirm(options) {
            return new Promise((resolve, reject) => {
                options.show=true;
                options.resolve = resolve;
                options.reject = reject;
                options.showCancelButton = true;
                dialogInstance = new DialogTpl({
                    data: options
                });
                document.body.appendChild(dialogInstance.$mount().$el);
            })

        }
    }
}
