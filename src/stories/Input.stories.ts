import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    label: 'Common',
  },
};

export const Clearable: Story = {
  args: {
        label: 'Clearable',
      clearable:true
  },
};

export const Search: Story = {
  args: {
        label: 'Search',
        clearable: true,
      search:true
  },
};


