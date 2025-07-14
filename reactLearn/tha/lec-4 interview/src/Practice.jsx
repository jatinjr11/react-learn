export const Practices = () => {
    const students = [1,2,3];
    return (
        <>
        {/* <p>{students.length && "No students found"}</p> */}
        {/* 1st solu */}
        {/* <p>{students.length === 0 && "No students found"}</p> */}
        {/* 2nd solu */}
        <p>{!students.length === 0 && "No students found"}</p>

        <p> Number of students: {students.length}</p>
        <p>{NaN}</p>
        </>
    )
}