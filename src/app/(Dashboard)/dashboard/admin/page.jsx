import { redirect } from "next/navigation";

const AdminDashboardHome = () => {
  return redirect("/dashboard/admin/all-users");
};

export default AdminDashboardHome;
