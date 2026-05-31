const books = [
    {
        title: "HTML5 从入门到实践",
        author: "王小明",
        desc: "适合零基础，系统讲解网页结构与常用标签，含20个实战案例。",
        img: "images/book1.jpg"
    },
    {
        title: "CSS3 视觉设计基础",
        author: "李 清",
        desc: "深入讲解颜色、阴影、圆角、渐变、动画等页面美化方法。",
        img: "images/book2.jpg"
    },
    {
        title: "Flex & Grid 布局实战",
        author: "周 林",
        desc: "聚焦现代布局方式与响应式页面设计，告别浮动时代。",
        img: "images/book3.jpg"
    },
    {
        title: "JavaScript ES6+ 核心语法",
        author: "陈 文",
        desc: "全面覆盖ES6+新特性：箭头函数、解构、Promise、模块化。",
        img: "images/book4.jpg"
    },
    {
        title: "DOM 编程艺术",
        author: "赵 芸",
        desc: "从零掌握DOM查找、修改、增删节点，理解事件驱动编程思维。",
        img: "images/book5.jpg"
    },
    {
        title: "Vue 3 入门与实战",
        author: "孙 晨",
        desc: "循序渐进学习Vue3核心概念，完成三个完整前端项目。",
        img: "images/book6.jpg"
    }
];

function renderBooks() {
    const cardContainer = document.getElementById("card-container");

    books.forEach(function (book) {
        const article = document.createElement("article");
        article.className = "card";

        const img = document.createElement("img");
        img.src = book.img;
        img.alt = book.title + "封面";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const desc = document.createElement("p");
        desc.textContent = "作者：" + book.author + "｜" + book.desc;

        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(desc);

        cardContainer.appendChild(article);
    });
}

function bindFormValidation() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const interestSelect = document.getElementById("interest");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        successMessage.textContent = "";
        interestSelect.classList.remove("select-error");

        if (nameInput.value.trim() === "") {
            nameError.textContent = "姓名不能为空";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "邮箱不能为空";
            isValid = false;
        } else if (!emailInput.value.includes("@")) {
            emailError.textContent = "邮箱必须包含@符号";
            isValid = false;
        }

        if (interestSelect.value === "") {
            interestSelect.classList.add("select-error");
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "提交成功！感谢您的订阅";
        }
    });
}

function addDeleteButtons() {
    const tbody = document.getElementById("event-body");
    const rows = tbody.querySelectorAll("tr");

    rows.forEach(function (row) {
        const td = document.createElement("td");
        const btn = document.createElement("button");

        btn.textContent = "取消";
        btn.className = "delete-btn";

        btn.addEventListener("click", function () {
            tbody.removeChild(row);
        });

        td.appendChild(btn);
        row.appendChild(td);
    });
}

renderBooks();
bindFormValidation();
addDeleteButtons();