let nextCourseId = 0;
let nextUniId = 0;
let nextFilterId = 0;

/*****  ACTION BUILDERS */

export const addCourse = course => ({
  type: courseActions.ADD_ELEM,
  elem: course,
  id: nextCourseId++
});

export const addUniversity = uni => ({
  type: uniActions.ADD_ELEM,
  elem: uni,
  id: nextUniId++
});

export const addCourseFilter = (name, filter) => ({
  type: courseFilterActions.ADD_ELEM,
  elem: filter,
  id: nextFilterId++,
  name: name
});

export const addUniFilter = (name, filter) => {
  return {
    type: uniFilterActions.ADD_ELEM,
    elem: filter,
    id: nextFilterId++,
    name: name
  };
};

//view is "uni" or "crs"
export const toggleViewFocus = view => {
  return {
    type: headerActions.TOGGLE_VIEW,
    elem: view,
    id: nextFilterId++
  };
};

/*****  ACTION CONSTANT DECLARATIONS */

export const uniFilterActions = {
  ADD_ELEM: "uni-filter-add",
  EMPTY: "uni-filter-empty"
};
export const courseFilterActions = {
  ADD_ELEM: "course-filter-add",
  EMPTY: "course-filter-empty"
};

export const uniActions = {
  ADD_ELEM: "uni-add",
  EMPTY: "uni-empty"
};

export const courseActions = {
  ADD_ELEM: "course-add",
  EMPTY: "course-empty"
};

export const headerActions = {
  TOGGLE_VIEW: "toggle-view-focus"
};
