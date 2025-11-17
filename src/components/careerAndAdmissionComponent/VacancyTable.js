import React from 'react'
import { ArrowUpRight } from "lucide-react";

const VacancyTable = ({ tableData }) => {

  return (
    <div className='container mb-80'>
     <div className="job-table-container ">
      <table className="table table-borderless job-table">
        <thead>
          <tr>
            <th>Positions</th>
            <th>Institute</th>
            <th>Organization</th>
            <th>Application Deadline</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td data-label= "Positions:"><span>{item.position}</span></td>
              <td data-label= "Institute:">{item.institute}</td>
              <td data-label= "Organization:">{item.organization}</td>
              <td data-label= "Application Deadline:">{item.deadline}</td>

              <td data-label= "Status:" className={item.status === "Close" ? "status-close" : "status-open"}>
                {item.status}
              </td>

              <td>
                <button className="apply-btn">
                  Apply Now <ArrowUpRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default VacancyTable
