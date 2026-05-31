function Student(name, html_score, css_score, js_score) {
    this.name = name;
    this.html_score = html_score;
    this.css_score = css_score;
    this.js_score = js_score;
}

let students = [
    new Student("张三", 85.00, 90.00, 98.00),
    new Student("李四", 75.00, 78.00, 80.00),
    new Student("王五", 12.00, 3.00, 54.00)
];

function getTotal(student) {
    return Number(student.html_score) + Number(student.css_score) + Number(student.js_score);
}

function getAvg(student) {
    return (Number(getTotal(student)) / 3.00).toFixed(2);
}

function getLevel(avg) {
    if (avg >= 90.00) return "优秀";
    else if (avg >= 75.00) return "良好";
    else if (avg >= 60.00) return "合格";
    else return "不及格";
}

function showAllStudents() {
    let result = "===== 所有学生信息 =====\n";
    students.forEach(student => {
        let total = getTotal(student);
        let avg = getAvg(student);
        let level = getLevel(avg);
        result += `姓名：${student.name}\nHTML成绩：${student.html_score}\nCSS成绩：${student.css_score}\nJS成绩：${student.js_score}\n总分：${total}\n平均分：${avg}\n等级：${level}\n\n`;
    });
    document.getElementById("result").innerText = result;
    console.log(result);
}

function findStudent() {
    let name = document.getElementById("name").value.trim();
    let result = "";
    if (!name) {
        result = "请输入要查找的姓名！";
        document.getElementById("result").innerText = result;
        console.log(result);
        return;
    }

    let find = students.find(s => s.name === name);
    if (find) {
        let total = getTotal(find);
        let avg = getAvg(find);
        let level = getLevel(avg);
        result = `===== 查找成功 =====\n姓名：${find.name}\nHTML成绩：${find.html_score}\nCSS成绩：${find.css_score}\nJS成绩：${find.js_score}\n总分：${total}\n平均分：${avg}\n等级：${level}\n\n`;
    } else {
        result = `未找到姓名为【${name}】的学生`;
    }
    document.getElementById("result").innerText = result;
    console.log(result);
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let html_score = Number(document.getElementById("htmlScore").value).toFixed(2);
    let css_score = Number(document.getElementById("cssScore").value).toFixed(2);
    let js_score = Number(document.getElementById("jsScore").value).toFixed(2);
    let result = "";

    if (!name || isNaN(html_score) || isNaN(css_score) || isNaN(js_score) || html_score < 0 || css_score < 0 || js_score < 0) {
        result = "请完整输入姓名和正确的成绩！\n";
        document.getElementById("result").innerText = result;
        console.log(result);
        return;
    }

    let newStu = new Student(name, html_score, css_score, js_score);
    students.push(newStu);
    result = `成功添加学生：${name}\n`;
    document.getElementById("result").innerText = result;
    console.log(result);
}

function deleteStudent() {
    let name = document.getElementById("name").value.trim();
    let result = "";
    if (!name) {
        result = "请输入要删除的姓名！\n";
        document.getElementById("result").innerText = result;
        console.log(result);
        return;
    }

    let index = students.findIndex(s => s.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        result = `成功删除学生：${name}\n`;
    } else {
        result = `未找到姓名为【${name}】的学生，无法删除\n`;
    }
    document.getElementById("result").innerText = result;
    console.log(result);
}