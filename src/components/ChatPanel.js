import React from 'react';
import './DesktopView.css'
export default function ChatPanel(props) {
  return (
    <div id="container" className="chat-panel" style={{overflow: 'hidden',overflowY:'scroll'}}>
    <div className="row no-gutters">
        <div className="col-md-3">
            <div className="chat-bubble chatbubble--left">
                Hi bro!
            </div>
        </div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-3 offset-md-9">
            <div className="chat-bubble chat-bubble--blue chatbubble--right">
                Hi mate!
            </div>
        </div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-3">
            <div className="chat-bubble chatbubble--left">
                Hi bro!
            </div>
        </div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-3">
            <div className="chat-bubble chatbubble--left">
                Hi bro!
            </div>
        </div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-3">
            <div className="chat-bubble chatbubble--left">
                Hi bro!
            </div>
        </div>
    </div>
    <div className="row no-gutters">
        <div className="col-md-3 offset-md-9">
            <div className="chat-bubble chat-bubble--blue chatbubble--right">
                Hi mate!
            </div>
        </div>
    </div><div  className="row no-gutters">
        <div className="col-md-3 offset-md-9">
            <div className="chat-bubble chat-bubble--blue chatbubble--right">
                Hi mate!
            </div>
        </div>
    </div>
    <div id='mainsection' className="row no-gutters">
        <div className="col-md-3 offset-md-9">
            <div className="chat-bubble chat-bubble--blue chatbubble--right">
                {props.text}
            </div>
        </div>
    </div>
</div>
  );
}
