const Clock = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    console.log(now);
    return (
        <>
        <h1 className="year">년 : {year}</h1>
        <h1 className="month">월/일 : {month} / {date}</h1>
        <h1 className="time">시간 : {hour}시 {minute}분 {second}초</h1>
        </>
    )
}

export default Clock;