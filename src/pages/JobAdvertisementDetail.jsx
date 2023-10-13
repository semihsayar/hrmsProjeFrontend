import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import JobAdvertisementService from '../services/jobAdvertisementService';
import { useLocation, useParams } from 'react-router-dom';

export default function JobAdvertisementDetail() {

    let {id} = useParams();
    const [jobAdvertisement, setJobAdvertisement] = useState({});
    
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getById(id).then(result => setJobAdvertisement(result.data.data))
    },[id])


  return (
    <div>
        <div className="job-post-company pt-50 pb-50">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-7 col-lg-8">
                        <div className="single-job-items mb-50">
                            <div className="job-items">
                                <div className="company-img company-img-details">
                                    <a><img src={jobAdvertisement.imagePath} alt="Şirket Resmi"/></a>
                                </div>
                                <div className="job-tittle">
                                    <a>
                                        <h4>{jobAdvertisement.title}</h4>
                                    </a>
                                    <ul>
                                        <li>{jobAdvertisement.companyName}</li>
                                        <li><FontAwesomeIcon icon={faLocationDot} style={{paddingRight:"7px"}}/>{jobAdvertisement.name}</li>
                                        <li>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div className="job-post-details">
                            <div className="post-details1 mb-50">
                               
                                <div className="small-section-tittle">
                                    <h4>GENEL NİTELİKLER VE İŞ TANIMI</h4>
                                </div>
                                <p style={{paddingTop:"1em"}}>{jobAdvertisement.description}</p>
                            </div>
                        </div>

                    </div>
                   
                    <div className="col-xl-4 col-lg-4">
                        <div className="post-details3  mb-50">
                           
                           <div className="small-section-tittle">
                               <h4 style={{marginBottom:"1em"}}>İş Hakkında Bilgiler</h4>
                           </div>
                          <ul>
                              <li>Başvuru Tarihi : <span>{jobAdvertisement.startDate}</span></li>
                              <li>Şehir : <span>{jobAdvertisement.name}</span></li>
                              <li>Açık Pozisyon : <span>{jobAdvertisement.freePositionAmount}</span></li>
                              <li>Çalışma Şekli : <span>Tam Zamanlı</span></li>
                              <li>Maaş :  <span>{jobAdvertisement.minSalary} TL - {jobAdvertisement.maxSalary} TL</span></li>
                              <li>Son Başvuru Tarihi : <span>{jobAdvertisement.endDate}</span></li>
                          </ul>
                         <div className="apply-btn2">
                            <a className="btn">Başvur</a>
                         </div>
                       </div>
                        <div className="post-details4  mb-50">
                           
                           <div className="small-section-tittle">
                               <h4 style={{paddingBottom:"15px"}}>Şirket Hakkında Bilgiler</h4>
                           </div>
                              <span style={{paddingBottom:"15px"}}>{jobAdvertisement.companyName}</span>
                            <ul>
                                <li>Şirket İsmi: <span>{jobAdvertisement.companyName}</span></li>
                                <li>Web : <span> colorlib.com</span></li>
                                <li>Email: <span>carrier.colorlib@gmail.com</span></li>
                            </ul>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
