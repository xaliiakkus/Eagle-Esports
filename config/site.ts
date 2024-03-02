export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Eagle Sports",
	description: "	Eagle Sports, Yakında...",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		discord: "https://discord.gg/UGvBKFxC",
     sponsor: "https://www.tiktok.com/@qusay.pm"
	},
};
