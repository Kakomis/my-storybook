import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NLabel } from "../../components/NLabel";

export default {
    title: 'UI/NLabel',
    component: NLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'}
    }
} as ComponentMeta<typeof NLabel>

const Template: ComponentStory<typeof NLabel> = (args) => <NLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}
