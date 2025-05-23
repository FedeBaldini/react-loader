import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "../components";
import { VARIANTS } from "../types";

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
    variant: "dots",
    inline: false
  }
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
