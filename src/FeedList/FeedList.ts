interface FeedItem {
    id: number;
    title: string;
    image: string;
    tags: string[];
    createdAt: Date;
    href: string;
}

export const FeedList: FeedItem[] = [
    {
        id: 1,
        title: "Cheat Sheet For Pentest",
        image: "/feeds/cheat.png",
        tags: ["Cybersecurity", "Pentest", "Cheat Sheet"],
        createdAt: new Date("2025-10-26"),
        href: "/feeds/cheat-sheet-pentest"
    },
];
