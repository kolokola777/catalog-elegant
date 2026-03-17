import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ElementType } from "react"
import { cn } from "@/lib/utils"

export const typography = cva("font-medium leading-[110%]", {
    variants: {
        heading: {
            hero: "text-[96px] leading-[100%] font-bold",
            h1: "text-[80px] tracking-[-3%]",
            h2: "text-[72px]",
            h3: "text-[54px]",
            h4: "text-[40px]",
            h5: "text-[34px]",
            h6: "text-[28px]",
            p: "text-lg"
        },
        size: {
            "12": "text-[12px]",
            "14": "text-[14px]",
            "16": "text-[16px]",
            "18": "text-[18px]",
            "20": "text-[20px]",
            "22": "text-[22px]",
            "26": "text-[26px]",
        },
        weight: {
            normal: "font-normal",
            semibold: "font-semibold",
            bold: "font-bold"
        },
        defaultsVariants: {
            heading: "h1",
            weight: "bold"
        }
    },
})

export const Typography = ({
    heading,
    size,
    className,
    children,
    ...props
}: ComponentProps<"h1" | "p"> & VariantProps<typeof typography>) => {
    const Comp = (heading === "hero" ? "h1" : heading === "p" ? "p" : heading) as ElementType

    return (
        <Comp
            className={cn(typography({ heading, size }), className)}
            {...props}
        >
            {children}
        </Comp>
    )
}