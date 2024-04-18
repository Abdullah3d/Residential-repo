
const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <p className="text-2xl font-bold">Residential<br />
                        Homes nestled, stories untold,<br/> where laughter dances and dreams unfold.</p>
                </aside>
                <nav className="font-bold text-xl">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="font-bold text-xl">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="font-bold text-xl">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;