import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
`;

const EmailBox = styled.div`
  padding: 1rem;
  background-color: #000;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #fff;
`;

const AlertBox = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props => (props.type === 'error' ? '#00000' : '000000')};
  border: 1px solid ${props => (props.type === 'error' ? '#ff9999' : '#99ff99')};
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
`;

const Modal = ({ onClose, title, children }) => (
  <Overlay>
    <ModalContent>
      <h2>{title}</h2>
      <div>{children}</div>
      <Button onClick={onClose}>Close</Button>
    </ModalContent>
  </Overlay>
);

const PhishingEmailSimulator = () => {
  const [clicked, setClicked] = useState(false);
  const [reported, setReported] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const email = {
    from: 'no-reply@secure-update.com',
    subject: 'Important: Update Your Account Information Immediately!',
    body: `
      Dear User,
      
      We have detected suspicious activity on your account. To ensure uninterrupted access,
      please verify your account information by clicking on the link below immediately:
      
      http://fake-update-link.com/verify
      
      Thank you,
      Security Team
    `,
  };

  const sendAnalytics = async (actionType) => {
    try {
      await fetch('/api/record-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: actionType, timestamp: new Date().toISOString() })
      });
    } catch (error) {
      console.error('Error sending analytics data:', error);
    }
  };

  const handleClickLink = async (e) => {
    e.preventDefault();
    setClicked(true);
    await sendAnalytics('click');
    setShowModal(true);
  };

  const handleReport = async () => {
    setReported(true);
    await sendAnalytics('report');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <h2>Inbox Simulation</h2>
      <EmailBox>
        <p><strong>From:</strong> {email.from}</p>
        <p><strong>Subject:</strong> {email.subject}</p>
        <hr />
        <pre style={{ whiteSpace: 'pre-wrap' }}>{email.body}</pre>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" onClick={handleClickLink}>Click here to update now</a>
        </div>
      </EmailBox>

      {clicked && (
        <AlertBox type="error">
          <p>You have clicked on the link. In a real phishing scenario, this could compromise your security.</p>
        </AlertBox>
      )}

      {!reported && (
        <div>
          <Button onClick={handleReport}>Report Phishing</Button>
          <Button onClick={() => alert('This is a suspicious link!')}>Check Link</Button>
          <Button onClick={() => alert('This email looks suspicious!')}>Mark as Suspicious</Button>
        </div>
      )}

      {reported && (
        <AlertBox type="success">
          <p>Thank you for reporting. Your action helps improve cybersecurity awareness!</p>
        </AlertBox>
      )}

      {showModal && (
        <Modal title="Cybersecurity Training Feedback" onClose={handleCloseModal}>
          <p>
            The email you encountered exhibited several red flags commonly found in phishing attempts:
          </p>
          <ul>
            <li>Urgent language that prompts immediate action.</li>
            <li>Suspicious sender address that does not match the organization.</li>
            <li>Embedded links that may lead to fake websites.</li>
          </ul>
          <p>
            To learn more about identifying phishing emails and protecting your information, please visit our&nbsp;
            <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams#:~:text=Phishing%20emails%20and%20text%20messages,credit%20card%20or%20utility%20company." target="_blank" rel="noopener noreferrer">
              educational resources page
            </a>.
          </p>
        </Modal>
      )}

      <Button onClick={handleBack}>Back</Button>
    </Container>
  );
};

export default PhishingEmailSimulator;