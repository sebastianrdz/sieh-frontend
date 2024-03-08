interface LayoutProps {
  children: React.ReactNode;
  params: { projectId: string };
}

interface ProjectTab {
  name: string;
  href: string;
}