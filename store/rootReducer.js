import layout from "./layoutReducer";
import auth from "@/components/partials/auth/store";
import kanban from "@/components/partials/app/kanban/store";
const rootReducer = {
  layout,
  auth,
  kanban,
};
export default rootReducer;
