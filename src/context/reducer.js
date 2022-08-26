import { portfolios } from "../data/portfolioData";

export const initialState = {
  projects: portfolios,
  selectedProject: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SELECT_PROJECT":
      const project = state.projects.filter((item) => item.id == action.id);
      console.log(project);
      return {
        ...state,
        selectedProject: project ? project[0] : "",
      };
    default:
      return state;
  }
};

export default reducer;
