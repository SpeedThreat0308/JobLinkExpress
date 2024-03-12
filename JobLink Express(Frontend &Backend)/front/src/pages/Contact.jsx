import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Contact() {

	return ( <>
		<NavBar/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<div>
    <section className="middle">
				<div className="container">
					<div className="row justify-content-center mb-5">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="sec_title position-relative text-center">
								<h2 className="off_title">Contact Us</h2>
							</div>
						</div>
					</div>
					<div className="row align-items-start justify-content-between">
					
						<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
							<div className="card-wrap-body mb-4 gray rounded p-3">
								<h4 className="ft-medium mb-3 theme-cl">Make a Call</h4>
								<p className="lh-1"><span className="text-dark ft-medium">Email:</span> Admin@gmail.com</p>
							</div>
							
							<div className="card-wrap-body mb-3 gray rounded p-3">
								<h4 className="ft-medium mb-3 theme-cl">Make a Call</h4>
								<h6 className="ft-medium mb-1">Customer Care:</h6>
								<p className="mb-2">+91 9638527444</p>
								<h6 className="ft-medium mb-1">Careers::</h6>
								<p>+91 968423658</p>
							</div>
							
							<div className="card-wrap-body mb-3 gray rounded p-3">
								<h4 className="ft-medium mb-3 theme-cl">Drop A Mail</h4>
								<p>Fill out our form and we will contact you within 24 hours.</p>
								<p className="lh-1 text-dark">srihari@gmail.com</p>
								<p className="lh-1 text-dark">v3riderhari@gmail.com</p>
							</div>
						</div>
						
						<div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
							<form className="row">
									
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="small text-dark ft-medium">Your Name *</label>
										<input type="text" className="form-control" value="Your Name"/>
									</div>
								</div>
								
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="small text-dark ft-medium">Your Email *</label>
										<input type="text" className="form-control" value="Your Email"/>
									</div>
								</div>
								
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="small text-dark ft-medium">Subject</label>
										<input type="text" className="form-control" value="Type Your Subject"/>
									</div>
								</div>
								
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="small text-dark ft-medium">Message</label>
										<textarea className="form-control ht-80">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</textarea>
									</div>
								</div>
								
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<button type="button" className="btn btn-dark">Send Message</button>
									</div>
								</div>
								
							</form>
						</div>
						
					</div>
				</div>
			</section>
    </div>
	<Footer/>
	</>
     );
}
export default Contact;