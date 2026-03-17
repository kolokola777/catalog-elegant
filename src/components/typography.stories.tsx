import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./typography"

const meta: Meta<typeof Typography> = {
    title: "Компоненты/Заголовок",
    component: Typography,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
}

export default meta;

type Story = StoryObj<typeof Typography>;

export const HeadingHero: Story = {
    args: {
        heading: "hero",
        children: "Title Hero"
    }
}

export const Heading1: Story = {
    args: {
        heading: "h1",
        children: "Заголовок 1",
    },
    render: (args) => (
        <Typography
            {...args}
            onClick={() => alert("Clicked")}
        />
    ),
}

export const HeadingSize: Story = {
    args: {
        heading: "h2",
        children: "Заголовок 2",
        size: "26"
    }
}