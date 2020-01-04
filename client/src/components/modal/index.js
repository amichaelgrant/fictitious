import React from 'react';


function Modal({open, title, subtitle, children, footer, onClose}) {

  return (
    <div className={`modal ${open? 'is-active' : ''}`}>
      <div className="modal-background"/>
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">
            {title}
            <div className="subtitle">
              {subtitle}
            </div>
          </div>
          <button className="delete" aria-label="close"
            onClick={()=>{
              onClose && onClose();
            }}/>
        </header>
        <section className="modal-card-body">
          {children}
        </section>
        {footer && (
          <footer className="modal-card-foot">
            {footer && React.Children.map(footer, (f) => f)}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
