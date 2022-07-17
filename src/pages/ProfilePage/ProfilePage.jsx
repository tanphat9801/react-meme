import Button from "../../shared/Button/Button";

const ProfilePage = () => {
  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <p>Profile</p>
            <div className="ass1-login__form">
              <div className="avatar">
                <img
                  src="https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png"
                  alt=""
                />
              </div>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên ..."
                  required
                />
                <select className="form-control">
                  <option value>Giới tính</option>
                  <option value={1}>Nam</option>
                  <option value={0}>Nữ</option>
                </select>
                <input
                  type="file"
                  name="avatar"
                  placeholder="Ảnh đại diện"
                  className="form-control"
                />
                <textarea
                  className="form-control"
                  cols={30}
                  rows={5}
                  placeholder="Mô tả ngắn ..."
                  defaultValue={""}
                />
                <div className="ass1-login__send justify-content-center">
                  <Button loading type="submit">
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
