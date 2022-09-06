import { portfolios } from "../data/portfolioData";

export const initialState = {
  projects: portfolios,
  selectedProject: null,
  loading: true,
  loading2: true,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SELECT_PROJECT":
      const project = state.projects.filter((item) => item.id === action.id);
      console.log(project);
      return {
        ...state,
        selectedProject: project ? project[0] : "",
      };

    case "STOP_LOADER":
      return {
        ...state,
        loading: false,
      };

    case "STOP_LOADER2":
      console.log(state.loading2);
      return {
        ...state,
        loading2: false,
      };
    default:
      return state;
  }
};

export default reducer;
