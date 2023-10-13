import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import JobPositionService from "../services/jobPositionService";
import { Link } from "react-router-dom";
import JobWorkingTypeService from "../services/jobWorkingTypeService";
import { Select } from "@chakra-ui/react";

export default function JobAdvertisementList() {
  const divStyle = {
    border: "1px solid #dafcef",
  };

  const [jobadvertisements, setJobAdvertisements] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [jobWorkingTypes, setJobWorkingTypes] = useState([]);
  // const options = jobPositions.map((jobPosition) => ({
  //   key: jobPosition.id,
  //   text: jobPosition.title,
  //   value: jobPosition.title,
  // }));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
    setLoading(false);

    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));

    let jobWorkingTypesService = new JobWorkingTypeService();
    jobWorkingTypesService
      .getJobWorkingTypes()
      .then((result) => setJobWorkingTypes(result.data.data));
  }, []);

  return (
    <div>
      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="small-section-tittle2 mb-45">
                    <div className="ion">
                      <svg width="40px" height="12px">
                        <path
                          fillRule="evenodd"
                          fill="rgb(27, 207, 107)"
                          d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                        />
                      </svg>
                    </div>
                    <h4>Filtreleme</h4>
                  </div>
                </div>
              </div>
              <div className="job-category-listing mb-50">
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4 style={{ marginBottom: "1em" }}>Pozisyon</h4>
                  </div>
                  <div className="select-job-items2">
                    <Select placeholder="Pozisyon Seçiniz">
                      {jobPositions.map((jobPosition) => (
                        <option key={jobPosition.id}>{jobPosition.title}</option>
                      ))}
                    </Select>
                  </div>
                  <div className="select-Categories pt-50 pb-50">
                    <div className="small-section-tittle2">
                      <h4 style={{ marginBottom: "1em" }}>Job Type</h4>
                    </div>
                    {jobWorkingTypes.map((jobWorkingType) => (
                      <label className="container" key={jobWorkingType.id}>
                        {jobWorkingType.workingTypeName}
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="single-listing">
                  <div className="small-section-tittle2">
                    <h4>Job Location</h4>
                  </div>
                  <div className="select-job-items2">
                    <select name="select">
                      <option value="">Anywhere</option>
                      <option value="">Category 1</option>
                      <option value="">Category 2</option>
                      <option value="">Category 3</option>
                      <option value="">Category 4</option>
                    </select>
                  </div>
                  <div className="select-Categories pt-80 pb-50">
                    <div className="small-section-tittle2">
                      <h4>Experience</h4>
                    </div>
                    <label className="container">
                      1-2 Years
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      2-3 Years
                      <input type="checkbox" checked="checked active"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      3-6 Years
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      6-more..
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="single-listing">
                  <div className="select-Categories pb-50">
                    <div className="small-section-tittle2">
                      <h4>Posted Within</h4>
                    </div>
                    <label className="container">
                      Any
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Today
                      <input type="checkbox" checked="checked active"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 2 days
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 3 days
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 5 days
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                    <label className="container">
                      Last 10 days
                      <input type="checkbox"></input>
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <section className="featured-job-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>
                          <b>{jobadvertisements.length}</b> İş Bulundu
                        </span>
                        <div className="select-job-items">
                          <span>
                            <b>Sıralama</b>
                          </span>
                          <select name="select">
                            <option value="">None</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {jobadvertisements.map((jobadvertisement) => (
                    <Link
                      to={`/jobList/${jobadvertisement.id}`}
                      target="_blank"
                    >
                      <div
                        style={divStyle}
                        className="single-job-items mb-20"
                        key={jobadvertisement.id}
                      >
                        <div className="job-items">
                          <div className="company-img">
                            <a>
                              <img
                                src={jobadvertisement.imagePath}
                                alt="resim"
                              />
                            </a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a>
                              <h4 style={{ marginBottom: "20px" }}>
                                {jobadvertisement.title}
                              </h4>
                            </a>
                            <ul>
                              <li>{jobadvertisement.companyName}</li>
                              <li>
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  style={{ paddingRight: "5px" }}
                                />
                                {jobadvertisement.name}
                              </li>
                              <li>
                                {jobadvertisement.minSalary} -{" "}
                                {jobadvertisement.maxSalary}TL
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a>{jobadvertisement.workingTypeName}</a>
                          <span>Bitiş Tarihi: {jobadvertisement.endDate}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-area pb-115 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link">01</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">02</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">03</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
