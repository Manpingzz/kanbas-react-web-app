import { createSlice } from "@reduxjs/toolkit";
// import db from "../../Database";

const initialState = {
    assignments: [],
    assignment: { name: "New Assignment 123", title: "New Assignment title" },
    newAssignment: false,
  };

  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          action.payload, ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      selectAssignment: (state, action) => {
        state.assignment = action.payload;
      },
      setNewAssignment: (state, action) => {
        state.newAssignment = action.payload;
      },

    },
  });
  
  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignments, selectAssignment, setNewAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;