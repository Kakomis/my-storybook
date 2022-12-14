var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { NLabel } from "../../components/NLabel";
export default {
    title: 'UI/NLabel',
    component: NLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' }
    }
};
var Template = function (args) { return _jsx(NLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
