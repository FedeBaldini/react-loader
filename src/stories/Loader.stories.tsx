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
    },
    containerClassName: {
      table: {
        disable: true
      }
    },
    loaderClassName: {
      table: {
        disable: true
      }
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

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          colorScheme: "dark",
          backgroundColor: "#000",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Story />
      </div>
    )
  ]
};
