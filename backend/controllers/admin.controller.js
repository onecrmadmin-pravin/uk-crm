import { asyncHandler } from "../middleware/async.middleware.js";//catches error automatically and send this to the error handler
import { sendSuccess } from "../utils/response.js";//send standard responce
import {
  getAdminStatsService,
  updateUserRoleService,
} from "../services/admin.service.js";

/**
 * @desc Get Admin Dashboard Stats
 * @route GET /api/admin/stats
 */
export const fetchAdminStats = asyncHandler(async (req, res) => {
  const stats = await getAdminStatsService();

  return sendSuccess(res, "Admin stats fetched successfully", stats);
});
//this give you the stats of the admin
/**
 * @desc Update User Role
 * @route PATCH /api/admin/user/:id
 */
// export const updateUserRole = asyncHandler(async (req, res) => {
//   const { role } = req.body;

//   if (!role) {
//     throw new Error("Role is required");
//   }

//   const user = await updateUserRoleService(req.params.id, role);

//   return sendSuccess(res, "User role updated successfully", user);
// });