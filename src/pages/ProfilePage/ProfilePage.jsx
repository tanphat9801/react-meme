import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import { AvatarProfile } from "./ProfilePage.style";
import { useSelector } from "react-redux";
import Avatar from "../../shared/Avatar";
import "./profile.css";
import { useState } from "react";

const ProfilePage = () => {
  const data = useSelector((state) => state.Auth.currentUser) || {};
  console.log(data.nickName);
  const [inputValue, setInputValue] = useState({
    username: {
      value: data.nickName,
    },
    textarea: {
      value: "",
    },
  });
  console.log(inputValue);
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleChangeField = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [name]: {
        value,
      },
    });
  };

  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>Profile</p>
            <div className="ass1-login__form">
              <AvatarProfile>
                {userInfo.filepreview !== null ? (
                  <Avatar src={userInfo.filepreview} />
                ) : (
                  <Avatar src={data.avatar} />
                )}
                <label>
                  <i className="fa-solid fa-camera"></i>
                  <Input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleInputChange}
                  />
                </label>
              </AvatarProfile>
              <form action="#">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Tên ..."
                  required
                  name="username"
                  value={inputValue.username.value}
                  onChange={handleChangeField}
                />
                <select className="form-control">
                  <option value>Giới tính</option>
                  <option value={1}>Nam</option>
                  <option value={0}>Nữ</option>
                </select>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={5}
                  placeholder="Mô tả ngắn ..."
                  name="textarea"
                  value={inputValue.textarea.value}
                  onChange={handleChangeField}
                />
                <div className="ass1-login__send justify-content-center">
                  <Button type="submit">Cập nhật</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
