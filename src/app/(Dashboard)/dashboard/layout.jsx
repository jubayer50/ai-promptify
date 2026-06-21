import { DashboardSidebar } from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <DashboardSidebar></DashboardSidebar>

      <div className="md:mt-5 px-2 flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
