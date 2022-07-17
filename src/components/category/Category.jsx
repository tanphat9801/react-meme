import Modal from "react-bootstrap/Modal";
import { Box, BoxItem, Item } from "./Body.style";
import { useState } from "react";
import Button from "../../shared/Button/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Box>
          <BoxItem>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
          </BoxItem>
          <BoxItem>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
          </BoxItem>
          <BoxItem>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
          </BoxItem>
          <BoxItem>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
            <Item>hiihi</Item>
          </BoxItem>
        </Box>
      </Modal.Body>
    </Modal>
  );
}

export default function ModalBtn() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button name="header" onClick={() => setModalShow(true)}>Category</Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
