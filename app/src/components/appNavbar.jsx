import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">
          <div className="fusion_image_gen_parent">
            <img
              src="assets/logo-2.png"
              alt="Fusion Image Generator Logo"
              className="fusion_image_gen_logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Generate Image</Nav.Link>
            <Nav.Link
              href="https://github.com/Munya-Marinda/fusion-image-generator"
              target="_blank"
            >
              Github Repo
            </Nav.Link>
            <Nav.Link href="https://munya-dev.vercel.app/" target="_blank">
              The Developer
            </Nav.Link>
            <NavDropdown title="Share" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://www.facebook.com/sharer/sharer.php?u=https://fusion-image-generator.vercel.app/"
                target="_blank"
              >
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://api.whatsapp.com/send?text=Hey.%0ACheck%20out%20this%20cool%20website%20called%20*Fusion%20Image%20Generator*.%20It%20uses%20AI%20to%20generate%20images%20from%20words.%0A%0Ahttps%3A%2F%2Ffusion-image-generator.vercel.app%2F"
                target="_blank"
              >
                WhatsApp
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
