import React from "react";
import Student from "./Student";

export default function StudentList() {
  return (
   <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Students List</h3>
        <Student name="Priyanka" grade="A" />
        <Student name="Nivedha" grade="A+" />
        <Student name="Rohit" grade="B" />
    </div>
  );
}
