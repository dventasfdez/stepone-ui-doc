import FormGuideline from "@/components/content/documentantion/forms/Forms";
import Sidebar from "@/components/master/Sidebar";
import NotificationsContainer from "@/components/shared/notifications/notifications-container";

export default function Home() {
  return (
    <>
      <NotificationsContainer />

      <div className="g-container flex">
        <Sidebar />
        <main className="g-item_16 p4">
          <FormGuideline />
        </main>
      </div>
    </>
  );
}
