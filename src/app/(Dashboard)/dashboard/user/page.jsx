import { redirect } from "next/navigation";

const UserDashboardHome = () => {
  return redirect("/dashboard/user/profile");
};

export default UserDashboardHome;
