import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "../components";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    style: {
      border: "16px solid #f3f3f3",
      borderRadius: "50%",
      borderTop: "16px solid #3498db",
      width: "120px",
      height: "120px",
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: {
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    height: "120px",
  },
};
