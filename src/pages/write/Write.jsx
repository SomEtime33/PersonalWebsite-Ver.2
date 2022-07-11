import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
            src="img/skyImage.jpeg" 
            alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">

                {/* fileInput라는 변수값을 원하는 아이콘 모양의 레이블 씌워서 input으로 보냄 */}
                <label htmlFor="fileInput">
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>

                {/* [파일 첨부 버튼 / 텍스트 검색 창] 기능 import */}
                <input type="file" id = "fileInput" 
                        // 파일 첨부의 기본값 버튼은 삭제
                       style={{display: "none"}}/>

                {/* placeholder = 검색창란에 기본값으로 나타나는 텍스트 */}
                {/* autoFocus = 검색창에 커서 표시 */}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={ true }/>
            </div>
            <div className="writeFormGroup">

                {/* textarea = 글씨 작성 공간 생성 */}
                <textarea 
                  placeholder="Tell your story..." 
                  typeof="text"
                  className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
