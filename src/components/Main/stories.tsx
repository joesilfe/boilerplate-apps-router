import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
    title: 'Main',
    component: Main,
    parameters: {
        layout: 'fullscreen'
    },
    args: {
        title: 'Title basic',
        description: 'descption basic'
    }
} as Meta

export const Default: StoryObj = {};