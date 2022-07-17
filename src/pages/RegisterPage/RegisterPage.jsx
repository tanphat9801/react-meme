import Input from "../../shared/Input/Input";

const RegisterPage = () => {
  return (
    <>
      <main>
        <div className="ass1-login">
          <div className="ass1-login__content">
            <h2>Đăng ký một tài khoản</h2>
            <div className="ass1-login__form">
              <form action="#">
                <Input type="text" placeholder="Tên hiển thị" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Mật khẩu" required />
                <Input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
                <div className="ass1-login__send">
                  <a href="dang-nhap.html">Đăng nhập</a>
                  <button type="submit" className="ass1-btn">
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
