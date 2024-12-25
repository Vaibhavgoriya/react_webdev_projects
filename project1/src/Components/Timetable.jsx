import React from "react";

export class Timetable extends React.Component {
  render() {
    return (
      <div>
        <table className="table table-light table-hover" border="1" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">8:00 to 8:55 AM</th>
              <td>React (NV)</td>
              <td>AL/ML (CP)</td>
              <td>AL/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <th scope="row">8:55 to 9:45 AM</th>
              <td>TOC (AKK)</td>
              <td>AL/ML (CP)</td>
              <td>AL/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOC (AKK)</td>
            </tr>
            <tr>
              <th scope="row">Lab/Class</th>
              <td>LL1</td>
              <td>LL6</td>
              <td>LL1</td>
              <td>LL1</td>
              <td>201</td>
            </tr>
            <tr>
              <th scope="row">9:45 to 10:00 AM</th>
              <td colSpan="5" style={{ textAlign: "center", fontWeight: "bold" }}>TEA BREAK</td>
            </tr>
            <tr>
              <th scope="row">10:00 to 10:50 AM</th>
              <td>.NET(PJT)/ADV.JAVA(NC)</td>
              <td>.NET(BD)/ADV.JAVA(NC)</td>
              <td>PD(DS)/DM(Lib)/EC(Lib)</td>
              <td>PD(DS)/DM(Lib)/EC(Lib)</td>
              <td>.NET(BD)/ADV.JAVA(NC)</td>
            </tr>
            <tr>
              <th scope="row">10:50 to 11:40 AM</th>
              <td>.NET(PJT)/ADV.JAVA(NC)</td>
              <td>.NET(BD)/ADV.JAVA(NC)</td>
              <td>PD(DS)/DM(Lib)/EC(Lib)</td>
              <td>PD(DS)/DM(Lib)/EC(Lib)</td>
              <td>.NET(BD)/ADV.JAVA(NC)</td>
            </tr>
            <tr>
              <th scope="row">Lab/Class</th>
              <td>LL1/LL5</td>
              <td>LL1/LL5</td>
              <td>118</td>
              <td>118</td>
              <td>LL4</td>
            </tr>
            <tr>
              <th scope="row">11:40 to 12:30 PM</th>
              <td colSpan="5" style={{ textAlign: "center", fontWeight: "bold" }}>LUNCH BREAK</td>
            </tr>
            <tr>
              <th scope="row">12:30 to 1:20 PM</th>
              <td>PD(Lib)/DM(OD)/EC(RKI)</td>
              <td>React(NV)</td>
              <td>PD(Lib)/DM(OD)/EC(RKI)</td>
              <td>AI/ML(CP)</td>
              <td>ADV.JAVA(MV)/.NET(Lib)</td>
            </tr>
            <tr>
              <th scope="row">1:20 to 2:10 PM</th>
              <td>PD(Lib)/DM(OD)/EC(RKI)</td>
              <td>React(NV)</td>
              <td>PD(Lib)/DM(OD)/EC(RKI)</td>
              <td>AI/ML(CP)</td>
              <td>ADV.JAVA(MV)/.NET(Lib)</td>
            </tr>
            <tr>
              <th scope="row">Lab/Class</th>
              <td>214/Elec.Machine Lab</td>
              <td>LL5</td>
              <td>214/Elec.Machine Lab</td>
              <td>LL5</td>
              <td>LL5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Timetable;
