// 이모지 넣는법
// 윈도우 : 윈도우 + 점
// 맥 : 컨트롤 + 커멘드 + 스페이스

const Header = () =>{
    return (
    <div>
        <h3> 오늘은 📅</h3>
        <h1> {new Date().toDateString()}</h1>
    </div>
    )
}

export default Header;