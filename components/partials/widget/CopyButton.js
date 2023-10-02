import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Clipboard from 'clipboard';

const CopyButton = ({ text }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    const clipboard = new Clipboard('.copy-button', {
      text: () => text,
    });

    clipboard.on('success', () => {
      setShowModal(true);
      clipboard.destroy();
      setTimeout(() => setShowModal(false), 3000);
    });

    clipboard.on('error', () => {
      // Handle error if copy fails
    });

    clipboard.onClick({ target: { className: 'copy-button' } });
  };

  return (
    <>
      <Button className="copy-button" onClick={handleCopy}>
        Copy
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <p>Content copied!</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CopyButton;
