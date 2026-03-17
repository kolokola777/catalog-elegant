import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
    title: "Компоненты/Кнопка",
    component: Button,
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Button>

export const ButtonDefault: Story = {
    args: {
        variant: "default",
        rounded: "default",
        children: "Кнопка"
    }
}

export const ButtonBlack: Story = {
    args: {
        variant: "black",
        children: "Кнопка",
        rounded: "full"
    }
}