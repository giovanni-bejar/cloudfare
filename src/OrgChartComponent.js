import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import './OrgChartComponent.css';

const OrgChartComponent = () => {
    const [orgData, setOrgData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeData, setEmployeeData] = useState({});

    useEffect(() => {
        fetch('https://coding-assignment.giovannibejar122.workers.dev/organization-chart')
            .then(response => response.json())
            .then(data => {
                setOrgData(transformToOrgChartData(data));
                setEmployeeData(flattenEmployeeData(data.departments));
            })
            .catch(error => console.error('Error fetching org data:', error));
    }, []);

    const transformToOrgChartData = (data) => {
        return data.departments.map(dept => {
            let chartData = [['Name', 'Manager', 'Tooltip']];
            dept.employees.forEach(emp => {
                let managerName = emp.isManager ? '' : dept.managerName;
                
                chartData.push([emp.name, managerName, emp.title]);
            });
            return chartData;
        });
    };

    const flattenEmployeeData = (departments) => {
        let allEmployees = {};
        departments.forEach(dept => {
            dept.employees.forEach(emp => {
                allEmployees[emp.name] = emp;
            });
        });
        return allEmployees;
    };

    const handleChartSelect = (chartWrapper) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 0) return;
        const selectedItem = selection[0];
        if (selectedItem.row == null) return;
    
        const employeeName = chartWrapper.getDataTable().getValue(selectedItem.row, 0);
        setSelectedEmployee(employeeData[employeeName]);
    };
    

    const EmployeeDetail = ({ employee }) => {
        if (!employee) return null;
    
        const isManager = employee.isManager ? "Manager" : "Employee";
    
        return (
            <div className="employee-detail">
                <h3>{employee.name}</h3>
                <p>Department: {employee.department}</p>
                <p>Role: {isManager}</p>
                <p>Salary: {employee.salary}</p>
                <p>Skills: {employee.skills.join(', ')}</p>
            </div>
        );
    };
    

    return (
        <div className="org-chart-container">
            Backend API : https://coding-assignment.giovannibejar122.workers.dev/
            <div> By Clicking on a name, information about the employee will be displayed </div>
            {orgData.length > 0 ? (
                orgData.map((chartData, index) => (
                    <div key={index} className="chart-wrapper">
                        <Chart
                            chartType="OrgChart"
                            loader={<div>Loading Chart</div>}
                            data={chartData}
                            options={{ allowHtml: true, allowCollapse: true }}
                            chartEvents={[
                                {
                                    eventName: 'select',
                                    callback: ({ chartWrapper }) => handleChartSelect(chartWrapper),
                                },
                            ]}
                        />
                    </div>
                ))
            ) : (
                <p>Loading organization charts...</p>
            )}
            <EmployeeDetail employee={selectedEmployee} />
        </div>
    );
};

export default OrgChartComponent;
