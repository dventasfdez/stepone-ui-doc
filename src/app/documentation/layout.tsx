import Sidebar from "@/components/master/Sidebar";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="g-container flex">
      <Sidebar />
      <main className="drawer-content p4">{children}</main>
    </div>
  );
}
