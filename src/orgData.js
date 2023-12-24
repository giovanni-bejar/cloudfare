import React, { useState, useEffect } from 'react';

const OrgData = () => {
    const [orgData, setOrgData] = useState(null);

    useEffect(() => {
        fetch('https://coding-assignment.giovannibejar122.workers.dev/organization-chart')
            .then(response => response.json())
            .then(data => setOrgData(data))
            .catch(error => console.error('Error fetching org info:', error));
    }, []);

    return (
        <div>
            {orgData && (
                <pre>
                    {JSON.stringify(orgData, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default OrgData;
