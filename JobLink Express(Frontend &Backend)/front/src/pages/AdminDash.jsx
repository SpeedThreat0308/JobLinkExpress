import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Doughnut, Line } from 'react-chartjs-2';
import { Puff } from "react-loader-spinner";
import { Link } from "react-router-dom";

function AdminDash() {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	  }, []);
	const chartData2 = {
        labels: ['Filled', 'Remaining'],
        datasets: [
          {
            data: [50, 50], 
            backgroundColor: ['#6259ca', '#eaedf7'], 
            borderWidth: 0, 
          },
        ],
      };
	const chartData = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'AmountUsed',
            data: [20, 38, 38, 72, 55, 63, 43,76,85,80,40],
            borderColor: '#d0cdef', 
            borderWidth: 2,
            borderDash: [5, 5], 
          },
          {
            label: 'TotalBudget',
            data: [85, 65, 75, 38, 85, 35, 62,40,40,64,50,89],
           
            borderColor: '#6259ca',
            borderWidth: 2,
          },
          
        ],
      };
    return (
        <>
		{loading ? (
		<div  style={{display : "flex" , alignItems : "center" , justifyContent : "center" ,backgroundColor : "black" ,padding:"25%" }}>
        <Puff
          visible={true}
          height="80"
          width="80"
          color="green"
          ariaLabel="puff-loading"
                 /></div>
	 ):( 
        <div class="dashboard-wrap bg-light">
			<a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
				<i class="fas fa-bars me-2"></i>Dashboard Navigation
			</a>
				 <div class="collapse" id="MobNav">
					<div class="dashboard-nav">
						<div class="dashboard-inner">
							<ul data-submenu-title="Main Navigation">
								<li class="active"><Link to="/Dash">Dashboard</Link></li>
								<li><Link to="/BookMarkedResume">BookMarked Resumes</Link></li>
								<li><Link to="/JobApplicants">Job Applicants</Link></li>
							</ul>
							<ul data-submenu-title="Jobs Section">
								<li class="inactive"><Link to="/Admin_job_add">Add Free Jobs</Link></li>
								<li class="inactive"><Link to="/Add_Premium_Jobs">Add Premium Jobs</Link></li>
								<li><Link to="/View_Added_Jobs">View Free Jobs</Link></li>
								<li><Link to="/View_Added_Jobs">Edit Jobs</Link></li>
								<li><Link to="/View_Premium_Jobs">View Premium Jobs</Link></li>
								
							</ul>
							<ul data-submenu-title="My Accounts">
								<li><a href="dashboard-change-password.html">Change Password</a></li>
								<li><a href="javascript:void(0);">Delete Account</a></li>
								<li><a href="login.html">Log Out</a></li>
							</ul>
							<ul data-submenu-title="Site Settings">
								<li><Link to="/Premium_Edit">Premium Feature</Link></li>
								
							</ul>
						</div>					
					</div>
				</div>
				<div className="dashboard-content">
					<div className="dashboard-tlbar d-block mb-5">
						<div className="row">
							<div className="colxl-12 col-lg-12 col-md-12">
								<h1 className="ft-medium">Hello, Mr.Vinoth M </h1>
								
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item text-muted"><a href="#">Home</a></li>
										<li className="breadcrumb-item"><a href="#" className="theme-cl">Dashboard</a></li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					
					
					<div className="dashboard-widg-bar d-block">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div className="dash-widgets py-5 px-4 bg-info rounded">
									<h2 className="ft-medium mb-1 fs-xl text-light">26</h2>
									<p className="p-0 m-0 text-light fs-md">Added Jobs</p>
									<i className="lni lni-empty-file"></i>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div className="dash-widgets py-5 px-4 bg-dark rounded">
									<h2 className="ft-medium mb-1 fs-xl text-light">87</h2>
									<p className="p-0 m-0 text-light fs-md">Notifications</p>
									<i className="lni lni-users"></i>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div className="dash-widgets py-5 px-4 bg-warning rounded">
									<h2 className="ft-medium mb-1 fs-xl text-light">312</h2>
									<p className="p-0 m-0 text-light fs-md">New Employes</p>
									<i className="lni lni-bar-chart"></i>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
								<div className="dash-widgets py-5 px-4 bg-purple rounded">
									<h2 className="ft-medium mb-1 fs-xl text-light">32</h2>
									<p className="p-0 m-0 text-light fs-md">BookMarked Employes</p>
									<i className="lni lni-heart"></i>
								</div>
							</div>
						</div>
						<div style={{display:'flex'}}>
						<Box sx={{ width: '60%', mx: 'auto',height:'90%' }}>
						<Line data={chartData} />
						</Box>
						<Box sx={{ width: '28%', mx: 'auto',height:'0%' }}>
						<Doughnut data={chartData2} />
						</Box>
						</div>

						<br/>	
						
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="dashboard-gravity-list with-icons">
									<h4 className="mb-0 ft-medium">Recent Activities</h4>
									<ul>
										<li>
											<i className="dash-icon-box ti-layers text-purple bg-light-purple"></i> Your job for <strong className="ft-medium text-dark"><a href="#">IOS Developer</a></strong> has been approved!
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-star text-success bg-light-success"></i> Jodie Farrell left a review <div className="numerical-rating high" data-rating="5.0"></div> for<strong className="ft-medium text-dark"><a href="#"> Real Estate Logo</a></strong>
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-heart text-warning bg-light-warning"></i> Someone bookmarked your <strong className="ft-medium text-dark"><a href="#">SEO Expert Job</a></strong> listing!
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-star text-info bg-light-info"></i> Gracie Mahmood left a review <div className="numerical-rating mid" data-rating="3.8"></div> on <strong className="ft-medium text-dark"><a href="#">Product Design</a></strong>
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-heart text-danger bg-light-danger"></i> Your Magento Developer job expire<strong className="ft-medium text-dark"><a href="#">Renew</a></strong> now it!
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-star text-success bg-light-success"></i> Ethan Barrett left a review <div className="numerical-rating high" data-rating="4.7"></div> on <strong className="ft-medium text-dark"><a href="#">New Logo</a></strong>
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>

										<li>
											<i className="dash-icon-box ti-star text-purple bg-light-purple"></i> Your Magento Developer job expire <strong className="ft-medium text-dark"><a href="#">Renew</a></strong> now it.
											<a href="#" className="close-list-item"><i className="fas fa-times"></i></a>
										</li>
									</ul>
								</div>
							</div>
							
							<div className="col-lg-6 col-md-12">
								<div className="dashboard-gravity-list invoices with-icons">
									<h4 className="mb-0 ft-medium">Invoices</h4>
									<ul>
										
										<li><i className="dash-icon-box ti-files text-warning bg-light-warning"></i>
											<strong className="ft-medium text-dark">Starter Plan</strong>
											<ul>
												<li className="unpaid">Unpaid</li>
												<li>Order: #20551</li>
												<li>Date: 01/08/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>
										
										<li><i className="dash-icon-box ti-files text-success bg-light-success"></i>
											<strong className="ft-medium text-dark">Basic Plan</strong>
											<ul>
												<li className="paid">Paid</li>
												<li>Order: #20550</li>
												<li>Date: 01/07/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>

										<li><i className="dash-icon-box ti-files text-danger bg-light-danger"></i>
											<strong className="ft-medium text-dark">Extended Plan</strong>
											<ul>
												<li className="paid">Paid</li>
												<li>Order: #20549</li>
												<li>Date: 01/06/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>
										
										<li><i className="dash-icon-box ti-files text-success bg-light-success"></i>
											<strong className="ft-medium text-dark">Platinum Plan</strong>
											<ul>
												<li className="paid">Paid</li>
												<li>Order: #20548</li>
												<li>Date: 01/05/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>
										
										<li><i className="dash-icon-box ti-files text-warning bg-light-warning"></i>
											<strong className="ft-medium text-dark">Extended Plan</strong>
											<ul>
												<li className="paid">Paid</li>
												<li>Order: #20547</li>
												<li>Date: 01/04/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>
										
										<li><i className="dash-icon-box ti-files text-info bg-light-info"></i>
											<strong className="ft-medium text-dark">Platinum Plan</strong>
											<ul>
												<li className="paid">Paid</li>
												<li>Order: #20546</li>
												<li>Date: 01/03/2019</li>
											</ul>
											<div className="buttons-to-right">
												<a href="" className="button text-light bg-warning">View Invoice</a>
											</div>
										</li>

									</ul>
								</div>
							</div>	
						</div>	
							
					</div>
					
                </div>
            </div>
	 )}
        </>
     );
}

export default AdminDash;