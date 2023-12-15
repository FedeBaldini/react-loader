import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "../components";
import { Props  } from "../components/Loader";
import { Variant } from "../components/Loader/types";

export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    variant: {
      options: Variant,
      control: { type: "radio" },
    },
    loaderStyle: {
      width: "60px",
      height: "60px",
    },
    containerStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      opacity: 1,
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: Props) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: Variant.Dots,
  loaderStyle: {
    width: "60px",
    height: "60px",
  },
  containerStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 1,
  },
};
