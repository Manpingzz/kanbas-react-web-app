import { Link } from 'react-router-dom';
import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
    const buttons = [
        { text: 'Importing Existing Content', icon: 'fas fa-file-import' },
        { text: 'Importing From Commons', icon: 'fas fa-cloud-download-alt' },
        { text: 'Choose Home Page', icon: 'fas fa-bullseye' },
        { text: 'View Course Stream', icon: 'fas fa-chart-bar' },
        { text: 'New Announcement', icon: 'fas fa-bullhorn' },
        { text: 'New Analytics', icon: 'fas fa-chart-bar' },
        { text: 'View Course Notifications', icon: 'fas fa-bell' }
    ];

    return (
        <div>
            <div className="d-flex flex-row">
                <div className="col-md-9">
                    <ModuleList />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 d-none d-lg-block">
                    {/* Right sidebar for Course Status */}
                    <div className="d-none d-lg-block">Course Status</div>
                    <button type="button" className="btn btn-unpublish mr-auto btn-sm">
                        <i className="fas fa-times"></i> Unpublish
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" style={{ backgroundColor: 'green' }}>
                        <i className="fas fa-check"></i> Published
                    </button>
                    <br /><br />
                    {buttons.map((button) => (
                        <Link
                            key={button.text}
                            to="#"
                            style={{ color: 'black', textDecoration: 'none' }}
                            className="gray-button"
                        >
                            <i className={button.icon}></i> {button.text}
                        </Link>
                    ))}
                    <br/>
                    {/* Course Status section, To Do section, Coming Up section ... */}
                    <div className="mb-2">
                        <h6>To Do</h6>
                        <hr style={{ marginTop: '6px' }} />
                        <div className="d-none d-lg-block" style={{ position: 'relative' }}>
                            <i className="fa-solid fa-circle" style={{ color: 'red', marginRight: '10px' }}></i>
                            <span style={{ color: 'red', fontSize: '1rem', fontWeight: 500 }}>Grade A1- ENV + HTML</span>
                            <i className="fas fa-times" style={{ color: 'gray', position: 'absolute', top: '0', right: '0' }}></i><br />
                            <span style={{ color: 'gray', fontSize: '0.8rem', fontWeight: 500, marginLeft: '26px' }}>
                                100 Points
                                <i className="fas fa-circle" style={{ fontSize: '0.5rem', margin: '0 8px' }}></i>
                                Sep 18 at 11:59pm
                            </span>
                        </div>
                        <div className="d-none d-lg-block" style={{ position: 'relative' }}>
                            <i className="fa-solid fa-circle" style={{ color: 'red', marginRight: '10px' }}></i>
                            <span style={{ color: 'red', fontSize: '1rem', fontWeight: 500 }}>Grade A2- CSS + <br /></span>
                            <span style={{ color: 'red', fontSize: '1rem', fontWeight: 500, marginLeft: '26px' }}>BOOTSTRAP</span><br />
                            <span style={{ color: 'gray', fontSize: '0.8rem', fontWeight: 500, marginLeft: '26px' }}>
                                100 Points
                                <i className="fas fa-circle" style={{ fontSize: '0.5rem', margin: '0 8px' }}></i>
                                Oct 2 at 11:59pm
                            </span>
                            <i className="fas fa-times" style={{ color: 'gray', position: 'absolute', top: '0', right: '0' }}></i>
                        </div>
                    </div><br/>

                    <div className="mb-2">
                        <div className="coming-up sidebar_comingUpContainer">
                            <div className="coming-up-header-container d-none d-lg-flex justify-content-between align-items-center">
                                <h6 className="coming-up-header" style={{ whiteSpace: 'nowrap' }}>
                                    <span tabIndex="-1">Coming Up</span>
                                </h6>
                               
                                <a className="view-calendar-link" href="#" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', textDecoration: 'none' }}>
                                    <i className="fa fa-calendar" style={{ color: 'black', fontSize: 'inherit', paddingRight: '6px'  }}></i>
                                    <span style={{ color: 'red' }}>View Calendar</span>
                                </a>
                            </div>
                            <hr style={{ marginTop: '6px' }} />
                            <div className="d-none d-lg-block">
                                <i className="fa fa-calendar" style={{ color: 'black', paddingRight: '6px' }}></i>
                                <a href="#" style={{ color: 'red', textDecoration: 'none' }}>Lecture</a><br />
                                <span style={{ textDecoration: 'none', fontSize:'0.8rem' }}>CS4550.12631.202410<br /></span>
                                <span style={{ textDecoration: 'none', fontSize:'0.8rem' }}>Sep 7 at 11:45am</span><br />
                                <i className="fa fa-calendar" style={{ color: 'black', paddingRight: '6px'  }}></i>
                                <a href="#" style={{ color: 'red', textDecoration: 'none' }}>CS4550.12361.202410 Lecture</a><br />
                                <span style={{ textDecoration: 'none', fontSize:'0.8rem' }}>Sep 11 at 11:45am</span><br />
                                <i className="fa fa-calendar" style={{ color: 'black', paddingRight: '6px'  }}></i>
                                <a href="#" style={{ color: 'red', textDecoration: 'none' }}>CS5610 Web Development Summer Lecture</a><br />
                                <span style={{ textDecoration: 'none', fontSize:'0.8rem' }}>Sep 11 at 6pm</span><br />
                            </div>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}
export default Home;