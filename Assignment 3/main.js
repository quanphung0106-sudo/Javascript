function Subjects(namesj, marksj){
    this.namesj = namesj;
    this.marksj = marksj;
}

function Student(name, mark, gender, subjects){
    this.name = name;
    this.mark= mark;
    this.gender = gender;
    this.subjects = subjects;
}

/*------------------------------------1-------------------------------------------------------- */
var studentA = new Student("Quan", 7, 0,[new Subjects("Toan", 6), new Subjects("Ly", 7)] )
var studentB = new Student("Huy", 6, 0,[new Subjects("Toan", 9), new Subjects("Ly", 8)] )
var studentC = new Student("Hoang", 2, 0,[new Subjects("Toan", 8.5), new Subjects("Ly", 5)] )
var studentD = new Student("Linh", 10, 1,[new Subjects("Toan", 10), new Subjects("Ly", 10)] )
var studentE = new Student("Long", 2, 0,[new Subjects("Toan", 10), new Subjects("Ly", 9)] )
var studentF = new Student("Ngoc",3, 1,[new Subjects("Toan", 7.5), new Subjects("Ly", 8)] )
var studentG = new Student("Lanh", 8, 1,[new Subjects("Toan", 8), new Subjects("Ly", 5.5)] )
var studentH = new Student("Bao", 5, 0,[new Subjects("Toan", 8), new Subjects("Ly", 6)] )
var studentI = new Student("Nhi", 6, 1,[new Subjects("Toan", 8), new Subjects("Ly", 6)] )
var studentK = new Student("Huy", 0, 0,[new Subjects("Toan", 8), new Subjects("Ly", 6)] )

console.log("Câu 1:Tạo danh sách sinh viên của một lớp có 10 sinh viên")

var listofStudent = [
    studentA,
    studentB,
    studentC,
    studentD,
    studentE,
    studentF,
    studentG,
    studentH,
    studentI,
    studentK,
]
console.log(listofStudent)
/*------------------------------------2-------------------------------------------------------- */
console.log("Câu 2: Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé")

var question2 = [
    studentA,
    studentB,
    studentC,
    studentD,
    studentE,
    studentF,
    studentG,
    studentH,
    studentI,
    studentK,
]

var sortMark = question2.sort((a, b) => {
    return b.mark - a.mark;
})
console.log(sortMark)

/*------------------------------------3-------------------------------------------------------- */
console.log("Câu 3: Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn")

var question3 = [
    studentA,
    studentB,
    studentC,
    studentD,
    studentE,
    studentF,
    studentG,
    studentH,
    studentI,
    studentK,
]

var sortMark2 = question3.sort((a, b) => {
    return a.mark - b.mark;
})
console.log(sortMark2)

/*------------------------------------4-------------------------------------------------------- */
console.log("Câu 4: Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0")

var question4 = listofStudent.filter(function (student) {
    return student.gender == 1 && student.mark > 5;
})

console.log(question4)

/*------------------------------------5-------------------------------------------------------- */
console.log("Câu 5: Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0")

var question5 = listofStudent.filter((student) => {
    return student.subjects[0].marksj > 8 || student.subjects[1].marksj > 8
})
console.log(question5)

/*------------------------------------6-------------------------------------------------------- */
console.log("Câu 6: Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất")

var question6 = listofStudent.reduce( (accumulator ,currentValue) => {
    var start = currentValue.subjects[0].marksj
    var result =  accumulator.concat(start)
    return result
}, [])

     console.log(question6)

    var maxNumber = Math.max(...question6)
    var minNumber = Math.min(...question6)

    console.log(`
    Sinh viên có điểm môn Toán cao nhất: ${maxNumber}
    Sinh viên có điểm môn Toán thấp nhất: ${minNumber}`)

/*------------------------------------7-------------------------------------------------------- */
console.log("Câu 7: Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0")

var question7 = listofStudent.filter( (student) => { 
    var a = student.mark
    delete a == 0
    return a
})

console.log(question7)
/*------------------------------------8-------------------------------------------------------- */

console.log("Câu 8: Thêm 03 sinh viên mới vào danh sách")

var studentL = new Student("Hoang", 9, 0,[new Subjects("Toan", 8), new Subjects("English", 6)] )
var studentM = new Student("Huy", 9, 1,[new Subjects("Toan", 8), new Subjects("English", 6)] )
var studentN = new Student("Huy", 9, 0,[new Subjects("Toan", 8), new Subjects("English", 6)] )
listofStudent.push(studentL, studentM, studentN)
console.log(listofStudent)