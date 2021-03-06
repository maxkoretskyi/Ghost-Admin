import $ from 'jquery';
import Mixin from '@ember/object/mixin';
import {run} from '@ember/runloop';

// mixin used for routes that need to set a css className on the body tag
export default Mixin.create({
    activate() {
        let cssClasses = this.classNames;

        this._super(...arguments);

        if (cssClasses) {
            run.schedule('afterRender', null, function () {
                cssClasses.forEach((curClass) => {
                    $('body').addClass(curClass);
                });
            });
        }
    },

    deactivate() {
        let cssClasses = this.classNames;

        this._super(...arguments);

        run.schedule('afterRender', null, function () {
            cssClasses.forEach((curClass) => {
                $('body').removeClass(curClass);
            });
        });
    }
});
