import Sidebar from "@/components/master/Sidebar";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="g-container flex">
      <Sidebar />
      <main className="g-item_16 p4">{children}</main>
    </div>
  );
}
