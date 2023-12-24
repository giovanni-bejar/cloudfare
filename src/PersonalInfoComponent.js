import React, { useState, useEffect } from 'react';

const PersonalInfoComponent = () => {
    const [personalInfo, setPersonalInfo] = useState(null);

    useEffect(() => {
        fetch('https://coding-assignment.giovannibejar122.workers.dev/me')
            .then(response => response.json())
            .then(data => setPersonalInfo(data))
            .catch(error => console.error('Error fetching personal info:', error));
    }, []);

    return (
        <div>
            {personalInfo && (
                <pre>
                    {JSON.stringify(personalInfo, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default PersonalInfoComponent;
