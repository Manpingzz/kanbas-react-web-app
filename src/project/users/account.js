// import * as client from "./client";
// import { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// function Account() {
//   const { id } = useParams();

//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const findUserById = async (id) => {
//     const user = await client.findUserById(id);
//     setUser(user);
//   };

//   const fetchUser = async () => {
//     try {
//       const user = await client.account();
//       setUser(user);
//       console.log("User33:", user);
//     } catch (error) {
//       navigate("/project/signin");
//     }
//   };
//   const updateUser = async () => {
//     console.log("Current user object:", user);
//     if (!user || !user._id) {
//       console.error("Cannot update: user object or user._id is undefined");
//       return;
//     }

//     try {
//       console.log("user._id", user._id);
//       console.log("user888:", user);
//       const status = await client.updateUser(user);
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   const signout = async () => {
//     const status = await client.signout();
//     navigate("/project/signin");
//   };
//   useEffect(() => {
//     if (id) {
//       findUserById(id);
//     } else {
//       fetchUser();
//     }
//   }, [id]);
//   if (!user) {
//     // Render a loading indicator or return null
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-50">
//       <h1>Account</h1>
//       <form className="account-form">
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//           />
//         </div>

//         <div className="form-group mt-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={user.password || ""}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </div>

//         <div className="form-group mt-3 mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First Name"
//             value={user.firstName}
//             onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//           />
//         </div>
//         <div className="form-group mt-3 mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Last Name"
//             value={user.lastName}
//             onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//           />
//         </div>

//         <div className="form-group mt-3 mb-3">
//           <input
//             type="date"
//             className="form-control"
//             value={user && user.dob ? user.dob.split("T")[0] : ""}
//             onChange={(e) => setUser({ ...user, dob: e.target.value })}
//           />
//         </div>

//         <div className="form-group mt-3 mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </div>
//         <div className="form-group mt-3 mb-3">
//           <select
//             className="form-control"
//             value={user.role}
//             onChange={(e) => setUser({ ...user, role: e.target.value })}
//           >
//             <option value="USER">User</option>
//             <option value="ADMIN">Admin</option>
//             <option value="FACULTY">Faculty</option>
//             <option value="STUDENT">Student</option>
//           </select>
//         </div>

//         <button onClick={updateUser} className="btn btn-primary">
//           Update
//         </button>
//         <Link to="/project/admin/users" className="btn btn-warning">
//           Users
//         </Link>

//         <button onClick={signout} className="btn btn-danger">
//           Sign Out
//         </button>
//         {user.role === "ADMIN" && (
//           <Link to="/project/users" className="btn btn-warning">
//             Users
//           </Link>
//         )}
//       </form>
//     </div>
//   );
// }
// export default Account;
import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  // const updateUser = async () => {
  //   const status = await client.updateUser(user._id, user);
  // };

  const updateUser = async () => {
    if (!user) {
      console.error("No user data available");
      return;
    }
    const status = await client.updateUser(user._id, user);
  };

  const save = async () => {
    await client.updateUser(user._id, user);
  };

  const signout = async () => {
    const status = await client.signout();
    navigate("/project/signin");
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {user && (
        <div>
          {/* <p>Username: {user.username}</p> */}
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <div className="form-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="date"
              className="form-control"
              value={user && user.dob ? user.dob.split("T")[0] : ""}
              onChange={(e) => setUser({ ...user, dob: e.target.value })}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="form-group mt-3 mb-3">
            <select
              className="form-control"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>

          {/* <button onClick={updateUser} className="btn btn-primary">
            Update
          </button> */}

          <button onClick={save} className="btn btn-primary">
            Save
          </button>

          <button onClick={signout} className="btn btn-danger">
            Sign Out
          </button>
          {user.role === "ADMIN" && (
            <Link to="/project/users" className="btn btn-warning">
              Users
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
