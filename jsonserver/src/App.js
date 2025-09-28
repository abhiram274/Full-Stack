import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", course: "" });

  // GET - Fetch students
  const fetchStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  // POST - Add student
  const addStudent = async () => {
    if (!newStudent.name || !newStudent.course) return;
    await api.post("/students", newStudent);
    setNewStudent({ name: "", course: "" });
    fetchStudents();
  };

  // PUT - Update student
  const updateStudent = async (id) => {
    await api.put(`/students/${id}`, { name: "Updated Name", course: "Updated Course" });
    fetchStudents();
  };

  // DELETE - Remove student
  const deleteStudent = async (id) => {
    await api.delete(`/students/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lab 8 - HTTP Methods with JSON Server</h1>

      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Course"
        value={newStudent.course}
        onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
      />
      <button onClick={addStudent}>Add</button>

      <h2>Students List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((s) => (
          <li key={s.id} style={{ margin: "10px", border: "1px solid #ccc", padding: "10px" }}>
            {s.name} - {s.course}
            <br />
            <button onClick={() => updateStudent(s.id)}>Update</button>
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
