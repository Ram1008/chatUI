import React, { useState } from 'react';
import ram from './ram.jpg'
import './DesktopView.css'
import Upload from './Upload.js';
import ChatPanel from './ChatPanel';
export default function DesktopView() {
    const [text, setText] = useState("");
    const [count, set] = useState(0);
    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    const handleOnClick = (event) => {
        // console.log("on change")
        var container = document.getElementById("container");
        var section = document.getElementById("mainsection");
        container.appendChild(section.cloneNode(true));
        setText("");
        

    }
    return (
        <div style={{ padding: '5%', backgroundColor: '#dddad9;', height: '100%' }}>
            <div style={{ borderRadius: '3%', paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%', paddingBottom: '2%', backgroundColor: '#e8e8ed', height: '100vh' }}>
                <div className="container" style={{ borderRadius: '3%', backgroundColor: '#fef9fb', height: '92vh' }}>
                    <div className="row no-gutters">
                        <div className="col-md-3 " style={{ borderRight: '2px solid #b6b6b6' }}>
                            <div className="setting-tab ">
                                <img className="profile-image" src={ram} alt="ram" />
                                <div className="search-box">
                                    <div className="input-wrapper">
                                        <input type="text" className="" placeholder="Search Here" />
                                    </div>
                                </div>
                                <div className="friend-list friend-list--onhover">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p className="">Hi, How are u?</p>
                                    </div>
                                    <span className="time samll text-muted">13:21</span>
                                </div>
                                <hr></hr>
                                <div className="friend-list friend-list--onhover">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p className="">Hi, How are u?</p>
                                    </div>
                                    <span className="time samll text-muted">13:21</span>
                                </div>
                                <hr></hr>
                                <div className="friend-list friend-list--onhover">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p className="">Hi, How are u?</p>
                                    </div>
                                    <span className="time samll text-muted">13:21</span>
                                </div>
                                <hr></hr>
                                <div className="friend-list friend-list--onhover">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p className="">Hi, How are u?</p>
                                    </div>
                                    <span className="time samll text-muted">13:21</span>
                                </div>
                                <hr></hr>
                                <div className="friend-list friend-list--onhover">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p className="">Hi, How are u?</p>
                                    </div>
                                    <span className="time samll text-muted">13:21</span>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="col-md-6 myclass " style={{ borderRight: '2px solid #b6b6b6' }}>
                            <div className="settings-tab" style={{ border: 'none' }}>
                                <div className="friend-list no-gutters friends-list--grey">
                                    <img src={ram} alt="" className="profile-image" />
                                    <div className="text">
                                        <h6>Vinit Kumar</h6>
                                        <p>Whatever you may do, do the...</p>

                                    </div>

                                </div>
                            </div>
                            
                            <ChatPanel text={text} setText={setText} />
                            
                            <div className="row">
                                <div className="col-12" >
                                    <div className="chat-box-tray" style={{ backgroundColor: 'fafafa' }}>
                                        {/* <i className="material-icon">sentiment_very_satisfied</i> */}
                                        {/* <i className="material-icon">mic</i> */}
                                        {/* <i className="material-icon">send</i> */}
                                        <Upload />
                                        <textarea style={{ width: '90%', resize: ' none', overflow: 'auto' }} className="form-control" value={text} id="exampleFormControlTextarea1" rows="1" onChange={handleOnChange}> </textarea>
                                        <button style={{ margin: '2px', border: 'none' }}> <img src="https://cdn-icons.flaticon.com/png/512/2161/premium/2161491.png?token=exp=1642685207~hmac=6dfb6a53f837b93d0982f659e3c39ce1" alt="" style={{ height: '40px' }} /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 sideImage">

                            <img src={ram} alt="" />
                            <div className="info-btn " >
                                <div class="accordion accordion-flush info-btn" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <strong>Information</strong>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
