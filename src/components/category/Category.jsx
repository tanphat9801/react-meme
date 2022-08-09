import { useState } from "react";
import Button from "../../shared/Button/Button";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { BoxItem, Item } from "./Body.style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ModalBtn() {
  const categories = useSelector((state) => state.Category.categories);
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>
      <Button onClick={toggleShow}>Category</Button>

      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <BoxItem>
                {categories.map((category) => {
                  const categorySlugLink = "/category" + category.id;
                  return (
                    <Item key={category.id}>
                      <Link to={categorySlugLink}>{category.text}</Link>
                    </Item>
                  );
                })}
              </BoxItem>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
