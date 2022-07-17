import SectionItem from "../../components/SectionItem";
import getQueryStr from "../../helper";
import Button from "../../shared/Button/Button";
import MainTitle from "../../shared/MainTitle/MainTitle";

const SearchPage = () => {
  const queryStr = getQueryStr("q");

  return (
    <>
      <main>
        <div className="container">
          {/*sections*/}
          <MainTitle type="center">
            10 kết quả tìm kiếm với từ khóa "{queryStr}"
          </MainTitle>
          <div className="row">
            <div className="col-lg-8">
              <div className="ass1-section__list">
                <div className="ass1-section__item">
                  <div className="ass1-section">
                    <SectionItem
                      isShowHead
                      isShowTitle
                      isShowImage
                      isShowFooter
                    />
                  </div>
                </div>
                <div className="ass1-section__item">
                  <div className="ass1-section">
                    <SectionItem
                      isShowHead
                      isShowTitle
                      isShowImage
                      isShowFooter
                    />
                  </div>
                </div>
                <Button name="loadmore" loading>
                  Xem thêm
                </Button>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="ass1-aside">
                <div className="ass1-section__item">
                  <div className="ass1-section">
                    <SectionItem isShowHead isShowTitle isShowFooter />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchPage;
