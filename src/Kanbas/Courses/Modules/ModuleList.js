
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

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
                    {
                        modules
                            .filter((module) => module.course === courseId)
                            .map((module) => (
                                <li key={module._id} className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" style={{ marginBottom: '26px' }}>
                                    <div>
                                        <span className="d-flex align-items-center">
                                            <i className="fas fa-grip-vertical" style={{ marginRight: '6px' }}></i>
                                            <i className="fa fa-caret-right" style={{ marginRight: '12px' }}></i>
                                            {module.name}
                                        </span>
                                    </div>
                                    <div className="align-items-center">
                                        <div className="d-flex flex-row align-items-center me-3">
                                            <i className="fas fa-check-circle" style={{ color: 'green', marginRight: '6px' }}></i>
                                            <i className="fas fa-caret-down" style={{ paddingRight: '16px' }}></i>
                                            <i className="fas fa-plus" style={{ marginRight: '11px', color: 'gray' }}></i>
                                            <i className="fas fa-ellipsis-v" style={{ color: 'black', paddingTop: '3px' }}></i>
                                        </div>
                                    </div>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div>
    // </div>
    // </div>
    );
}

export default ModuleList;
