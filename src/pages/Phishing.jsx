import React, { useState } from 'react';
import './Phishing.css';

const PhishingSimulation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [virusSpread, setVirusSpread] = useState(false);
    const [infectedEmployees, setInfectedEmployees] = useState([]);
    const [decisionMade, setDecisionMade] = useState(false);
    const [consequences, setConsequences] = useState('');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('victimEmail', email);
        localStorage.setItem('victimPassword', password);
        alert('You have fallen for a phishing attack!');
        setVirusSpread(true);
        setInfectedEmployees([1]); // Start with Employee 1 infected
    };

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
        if (!infectedEmployees.includes(employee)) {
            setInfectedEmployees([...infectedEmployees, employee]);
        }
    };

    const handleDecision = (decision) => {
        setDecisionMade(true);
        if (decision === 'isolate') {
            setConsequences('You isolated the infected systems. The virus spread is contained.');
        } else if (decision === 'notify') {
            setConsequences('You notified IT. They are working to mitigate the virus spread.');
        } else {
            setConsequences('No action taken. The virus continues to spread.');
            setInfectedEmployees([1, 2, 3, 4]); // Simulate further spread
        }
    };

    return (
        <div className="simulation-container">
            <h1>Login to Your Account</h1>
            <p>Please enter your credentials to continue.</p>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="input-field"
                    /><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="input-field"
                    /><br />
                    <button type="submit" className="submit-button">
                        Login
                    </button>
                </form>
            </div>

            {virusSpread && (
                <div className="virus-spread-container">
                    <h2>Virus Spread Simulation</h2>
                    <p>The virus is spreading through the company...</p>
                    <div className="network-diagram">
                        {[1, 2, 3, 4].map((employee) => (
                            <div
                                key={employee}
                                className={`employee ${infectedEmployees.includes(employee) ? 'infected' : ''}`}
                                onClick={() => handleEmployeeClick(employee)}
                            >
                                {selectedEmployee !== employee && `Employee ${employee}`}
                                {selectedEmployee === employee && (
                                    <p>
                                        {employee === 1 && "Employee 1's computer is infected, leading to loss of sensitive data and potential identity theft."}
                                        {employee === 2 && "Employee 2's computer is infected, causing disruption in their workflow and spreading the virus to other systems."}
                                        {employee === 3 && "Employee 3's computer is infected, leading to unauthorized access to confidential company information."}
                                        {employee === 4 && "Employee 4's computer is infected, resulting in financial loss and damage to the company's reputation."}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    {selectedEmployee && !decisionMade && (
                        <div className="decision-points">
                            <h3>Decision Points</h3>
                            <p>Choose an action to mitigate the virus spread:</p>
                            <button onClick={() => handleDecision('isolate')} className="decision-button">Isolate Infected Systems</button>
                            <button onClick={() => handleDecision('notify')} className="decision-button">Notify IT</button>
                            <button onClick={() => handleDecision('none')} className="decision-button">Do Nothing</button>
                        </div>
                    )}
                    {decisionMade && (
                        <div className="consequences">
                            <h3>Consequences</h3>
                            <p>{consequences}</p>
                        </div>
                    )}
                    <div className="company-impact">
                        <h3>Overall Impact on the Company</h3>
                        <p>
                            The virus can potentially spread to multiple systems within the company, leading to widespread disruption. 
                            Sensitive data may be compromised, resulting in financial loss, legal consequences, and damage to the company's reputation. 
                            The company may need to invest significant resources in recovery and strengthening security measures to prevent future attacks.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhishingSimulation;