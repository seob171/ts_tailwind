import Task from "../components/Task";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Task> = {
  title: "Task",
  component: Task,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Default Task",
      state: "TASK_INBOX",
      updatedAt: new Date(2023),
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: "2",
      title: "Test Pinned Task",
      state: "TASK_PINNED",
      updatedAt: new Date(2023),
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: "3",
      title: "Test Archived Task",
      state: "TASK_ARCHIVED",
      updatedAt: new Date(2023),
    },
  },
};
