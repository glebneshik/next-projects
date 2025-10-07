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

    const handleNavigation = (id: string, href: string) => {
        if (href.startsWith('#') && !href.startsWith('/#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } 
        else if (href.includes('#') && href !== '#') {
            const [path, anchor] = href.split('#');
            if (path === '/' || path === '') {
                const element = document.getElementById(anchor);
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                router.push(href);
            }
        }
        else {
            router.push(href);
        }
        handleClick();
    };

    const isAnchorLink = (href: string) => {
        return href.startsWith('#') || href.includes('#');
    };

    return (
        <ul className={`${elementClass}__list`}>
            {Object.values(navigations).map(({ text, id, href }) => {
                if (id === "dubna") {
                    return (
                        <li
                            className={`${elementClass}__list_item no-click`}
                            key={id}
                        >
                            <span className={`${elementClass}__list_item-text`}>
                                <DubnaIcon />
                                {text}
                            </span>
                        </li>
                    );
                }

                return (
                    <li
                        className={`${elementClass}__list_item`}
                        onClick={() => handleNavigation(id, href)}
                        key={id}
                    >
                        {isAnchorLink(href) ? (
                            <a 
                                href={href}
                                onClick={(e) => e.preventDefault()}
                                className={`${elementClass}__link`}
                            >
                                {text}
                            </a>
                        ) : (
                            <Link href={href} className={`${elementClass}__link`}>
                                {text}
                            </Link>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}