"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { DubnaIcon } from "@/shared/DubnaIcon/DubnaIcon";
import { Navigations } from "@/types/Navigations.types";

export function Menu({
    navigations,
    elementClass,
    handleClick = () => { },
}: {
    navigations: Navigations;
    elementClass: string;
    handleClick?: () => void;
}) {
    const router = useRouter();

    return (
        <ul className={`${elementClass}__list`}>
            {Object.values(navigations).map(({ text, id, href }) => {
                return (
                    <li
                        className={`${elementClass}__list_item`}
                        onClick={() => {
                            router.push(href);
                            handleClick();
                        }}
                        key={id}
                    >
                        <Link href={href}>
                            {id === "dubna" && <DubnaIcon />}
                            {text}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}