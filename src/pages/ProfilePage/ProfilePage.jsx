import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import { AvatarProfile } from "./ProfilePage.style";
import { useSelector } from "react-redux";
import Avatar from "../../shared/Avatar";
import "./profile.css";
import { useEffect, useState } from "react";
import { ACCES_TOKEN } from "../../constants";
import { api } from "../../services/api";

const ProfilePage = () => {
  const data = useSelector((state) => state.Auth.currentUser);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");
  const [inputValue, setInputValue] = useState({
    username: {
      value: "",
    },
    textarea: {
      value: "",
    },
  });

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  useEffect(() => {
    if (data) {
      setInputValue({
        username: {
          value: data.nickName,
        },
        textarea: {
          value: data.description,
        },
      });
      setuserInfo({
        filepreview: data.avatar,
      });
    }
  }, [data]);

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
    const value = e.target.value.trim();

    setInputValue({
      ...inputValue,
      [name]: {
        value,
      },
    });
  };

  const handleSeclect = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (userInfo.file) {
        formData.append("avatar", userInfo.file);
      }
      formData.append("name", inputValue.username.value);
      formData.append("gender", gender);
      formData.append("description", inputValue.textarea.value);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer" + localStorage.getItem(ACCES_TOKEN),
        },
      };

      setLoading(true);

      const response = await api
        .call()
        .post("/member/update.php", formData, config);
      console.log(response);
    } catch (error) {}
  };

  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>Profile</p>
            <div className="ass1-login__form">
              <form onSubmit={handleSubmit}>
                <AvatarProfile>
                  {userInfo.filepreview !== null && (
                    <Avatar src={userInfo.filepreview} />
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
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Tên ..."
                  required
                  name="username"
                  value={inputValue.username.value}
                  onChange={handleChangeField}
                />
                <select className="form-control" onChange={handleSeclect}>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
                {gender}
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
                  <Button type="submit" loading={loading}>
                    Cập nhật
                  </Button>
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
