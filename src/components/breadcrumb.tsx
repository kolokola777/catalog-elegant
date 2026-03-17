import Link from "next/link"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
    label: string
    href?: string
}

type BreadcrumbProps = {
    items: BreadcrumbItem[]
} & ComponentProps<"nav">

export const Breadcrumb = ({
    items,
    className,
    ...props
}: BreadcrumbProps) => {
    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("flex items-center text-sm", className)}
            {...props}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1
                const key = item.href ?? item.label

                return (
                    <span key={key} className="flex items-center">
                        {isLast || !item.href ? (
                            <span className="font-semibold">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-gray-500 hover:text-black"
                            >
                                {item.label}
                            </Link>
                        )}

                        {!isLast && (
                            <span className="mx-2 text-gray-400">
                                &gt;
                            </span>
                        )}
                    </span>
                )
            })}
        </nav>
    )
}