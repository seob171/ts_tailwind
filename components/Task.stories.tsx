import Task, { TaskProps } from "@/components/Task";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Task",
  component: Task,
} as Meta<typeof Task>;

const Template: StoryFn<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2023),
  },
};

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_PINNED",
//   },
// };
//
// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_ARCHIVED",
//   },
// };
