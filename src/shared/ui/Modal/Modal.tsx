import React from 'react';

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-container">{children}</div>
    </div>
  );
};
