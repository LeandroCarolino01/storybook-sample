import { action } from '@storybook/addon-actions/dist/preview/action';


import Button from '@storybook/angular/dist/demo/button.component';
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => ({
  component: Button,
  props: {
    text: 'Hello dog Button',
  },
});

export const Emoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Emoji.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

export const WithSomeEmojiAndAction = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
  name: 'with some emoji and action',
  parameters: { notes: 'My notes on a button with emojis' },
};


