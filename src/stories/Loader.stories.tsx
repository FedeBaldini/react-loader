import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "../components";
import { Variant, VARIANTS } from "../components/Loader/types";

const meta = {
  title: "Loader",
  component: Loader,
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: "radio" }
    }
  },
  args: {
    variant: Variant.Dots,
    inline: false,
    loaderStyle: {
      width: "60px",
      height: "60px"
    },
    containerStyle: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      opacity: 1
    }
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
