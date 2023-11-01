import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";



function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });


    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };
    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         (module) => module._id !== moduleId));
    // };

    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // } 


    return (
        <div>
            <div className="wd-flex-grow-1 d-flex align-items-center justify-content-end">
                <button className="btn btn-light btn-sm">
                    Collapse All
                </button>
                <button className="btn btn-light btn-sm ms-2">
                    View Progress
                </button>
                <button className="btn btn-light btn-sm dropdown-toggle ms-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-check-circle" style={{ color: 'green' }}></i> Publish All
                </button>
                <div className="dropdown-menu float-end ms-2" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-check"></i> Publish all items and modules</a>
                    <a className="dropdown-item" href="#">UnPublish</a>
                </div>
                <button className="btn btn-danger btn-sm ms-2">
                    <i className="fas fa-plus"></i> Module
                </button>
                <button className="btn btn-light btn-sm ms-2">
                    <i className="fa fa-ellipsis-v" style={{ color: 'black' }}></i>
                </button>

            </div>
            <hr />

            <div className="list-group">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="d-flex justify-content-start align-items-center">
                            <input 
                                className="form-control w-50" 
                                style={{ marginRight: "8px" }} 
                                value={module.name} 
                                onChange={(e) => 
                                    dispatch(setModule({ ...module, name: e.target.value }))
                                }
                            />
                        </div>

                        <div className="mt-2">
                            <textarea
                                className="form-control w-50"
                                value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                            />
                        </div>

                        <div className="mt-2 d-flex justify-content-start align-items-center">
                            <button className="btn btn-success"
                                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                Add
                            </button>
                            <button className="btn btn-primary ms-2"
                                onClick={() => dispatch(updateModule(module))}>
                                Update
                            </button>
                        </div>

                            {/* <button className="btn btn-success"
                                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                                Add
                            </button>
                            
                            <button className="btn btn-primary" style={{ marginRight: "8px" }}
                                onClick={() => dispatch(updateModule(module))}>
                                Update
                            </button>

                            <input className="form-control w-50"
                                style={{ marginRight: "8px" }}
                                value={module.name}
                                onChange={(e) => 
                                    dispatch(setModule({ ...module, name: e.target.value }))
                    
                            }/>

                        </div>
                        <div className="mt-2">
                            <textarea
                                className="form-control w-50"
                                value={module.description}
                                onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
                                }
                            />
                        </div> */}

                    </li>
                </ul>


                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module) => (
                            <li key={module._id} className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" style={{ marginBottom: '26px' }}>

                                <div className="d-flex align-items-center">
                                    <i className="fas fa-grip-vertical" style={{ marginRight: '6px' }}></i>
                                    <i className="fa fa-caret-right" style={{ marginRight: '12px' }}></i>
                                    {module.name}
                                </div>
                                <div className="align-items-center">
                                    <div className="d-flex flex-row align-items-center me-3">
                                        <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '6px' }}></i>
                                        <i className="fas fa-caret-down" style={{ paddingRight: '16px' }}></i>
                                        <i className="fas fa-plus" style={{ marginRight: '11px', color: 'gray' }}></i>
                                        <i className="fas fa-ellipsis-v" style={{ color: 'black', paddingTop: '10px', marginRight: '6px' }}></i>

                                        <button className="btn btn-warning" style={{ marginRight: "8px" }}
                                            onClick={() => dispatch(setModule(module))}>
                                            Edit
                                        </button>

                                        <button className="btn btn-danger" style={{ marginRight: "8px" }}
                                            onClick={() => dispatch(deleteModule(module._id))}>
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            </li>
                        ))
                }
            </div>
        </div>
    );
}

export default ModuleList;