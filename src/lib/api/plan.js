import { base_url } from "../core/server";

export const getUserPlan = async (userRole) => {
  const res = await fetch(`${base_url}/api/plan?plan_id=${userRole}`);
  return res.json();
};
