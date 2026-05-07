import { RootState } from "@/app/store/store";

export const selectSearchQuery = (state: RootState) => state.search.query;
