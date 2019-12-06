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

export const removeCourseFilter = (name) => {
  return {
    type: courseFilterActions.REMOVE_ELEM,
    id: nextFilterId++,
    name: name
  };
};

export const removeUniFilter = (name) => {
  return {
    type: uniFilterActions.REMOVE_ELEM,
    id: nextFilterId++,
    name: name
  };
};

export const emptyCourseFilters = () => {
  return {
    type: courseFilterActions.EMPTY,
    id: nextFilterId++
  };
};

export const emptyUniFilters = () => {
  return {
    type: uniFilterActions.EMPTY,
    id: nextFilterId++
  };
};

export const addCourseStringFilter = (name, phrase, filter) => {
  return {
    type: courseStringFilterActions.ADD_ELEM,
    elem: filter,
    id: nextFilterId++,
    name: name,
    phrase: phrase
  };
};

export const addUniStringFilter = (name, phrase, filter) => {
  return {
    type: uniStringFilterActions.ADD_ELEM,
    elem: filter,
    id: nextFilterId++,
    name: name,
    phrase: phrase
  };
};

export const emptyCourseStringFilters = () => {
  return {
    type: courseStringFilterActions.EMPTY,
    id: nextFilterId++
  };
};

export const emptyUniStringFilters = () => {
  return {
    type: uniStringFilterActions.EMPTY,
    id: nextFilterId++
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

export const addCourseFilterValue = (name, value) => {
  return {
    type: courseFilterValueActions.ADD_ELEM,
    value: value,
    id: nextFilterId++,
    name: name
  };
};

export const addUniFilterValue = (name, value) => {
  return {
    type: uniFilterValueActions.ADD_ELEM,
    value: value,
    id: nextFilterId++,
    name: name
  };
};

export const removeCourseFilterValue = (name) => {
  return {
    type: courseFilterValueActions.REMOVE_ELEM,
    id: nextFilterId++,
    name: name
  };
};

export const removeUniFilterValue = (name) => {
  return {
    type: uniFilterValueActions.REMOVE_ELEM,
    id: nextFilterId++,
    name: name
  };
};

export const emptyCourseFilterValues = () => {
  return {
    type: courseFilterValueActions.EMPTY,
    id: nextFilterId++
  };
};

export const emptyUniFilterValues = () => {
  return {
    type: uniFilterValueActions.EMPTY,
    id: nextFilterId++
  };
};

/*****  ACTION CONSTANT DECLARATIONS */

export const uniFilterActions = {
  ADD_ELEM: "uni-filter-add",
  REMOVE_ELEM: "uni-filter-remove",
  EMPTY: "uni-filter-empty"
};
export const courseFilterActions = {
  ADD_ELEM: "course-filter-add",
  REMOVE_ELEM: "course-filter-remove",
  EMPTY: "course-filter-empty"
};

export const courseStringFilterActions = {
  ADD_ELEM: "course-string-filter-add",
  EMPTY: "course-string-filter-empty"
};

export const uniStringFilterActions = {
  ADD_ELEM: "uni-string-filter-add",
  EMPTY: "uni-string-filter-empty"
};

export const uniFilterValueActions = {
  ADD_ELEM: "uni-filter-value-add",
  REMOVE_ELEM: "uni-filter-value-remove",
  EMPTY: "uni-filter-value-empty"
};

export const courseFilterValueActions = {
  ADD_ELEM: "course-filter-value-add",
  REMOVE_ELEM: "course-filter-value-remove",
  EMPTY: "course-filter-value-empty"
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
