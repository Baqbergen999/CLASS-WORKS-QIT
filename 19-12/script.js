// const addTask = document.getElementById("addTask");
// const taskList = document.getElementById("taskList");

// addTask.addEventListener("click", (event) => {
//   event.preventDefault();
//   const taskInput = document.getElementById("taskInput"); 

//   if (taskInput.value.trim() !== "") { // trim() = (" " => "")
//     const task = document.createElement("li");
//     const taskName = document.createElement("span");
//     const deleteButton = document.createElement("button");

//     taskName.textContent = taskInput.value;
//     deleteButton.textContent = "Өшіру";

//     task.appendChild(taskName);
//     task.appendChild(deleteButton);
//     taskList.appendChild(task);
//     taskInput.value = "";

//     task.addEventListener('dblclick', () => {
//         const changeName = document.createElement('input');
//         changeName.placeholder = 'Тапсырма тауын өзгерт';

//         task.replaceChild(changeName, taskName);

//         changeName.addEventListener('blur', () => {
//             taskName.textContent = changeName.value;

//             task.replaceChild(taskName, changeName);
//         });
//     });

//     deleteButton.addEventListener("click", () => {
//       task.remove();
//     });

//     // task.style.display = "flex";
//     // task.style.gap = "20px";
//     // task.style.padding = "20px";
//     // task.style.background = "gray";

//     //          ||
//     //          \/

//     task.classList.add('task');


//     const searchButton = document.getElementById('searchButton');

//     searchButton.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         const search = document.getElementById('search');
//         const tasks = document.querySelectorAll('.task');

//         tasks.forEach((task) => {
//             if (!task.textContent.includes(search.value)) {
//                 task.style.display = 'none';
//             }
//             else {
//                 task.style.display = "flex"
//             }
//         });
//         search.value = '';
//     })
//   }
// });








let posts = [];

function addPost() {
    const titleInput = document.getElementById('titleInput');
    const contenInput = document.getElementById('contentInput');

    if (titleInput.value && contenInput.value) {
        const post = {
            id: Date.now(),
            title: titleInput.value,
            content: contenInput.value,
            date: new Date().toLocaleDateString('kk-KZ')
        }
        posts.push(post);

        renderPosts();

        titleInput.value = '';
        contenInput.value = '';
    }
}





function renderPosts() {

    const blogPostsDiv = document.getElementById('blogPosts');
    blogPostsDiv.innerHTML = ''; 

    posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML =`
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>${post.date}</small>`
    ;
    blogPostsDiv.appendChild(postDiv);
    });
}

document.getElementById('addPostBtn').addEventListener('click', addPost);

function removePost(id) {
    posts = posts.filter(post => post.id !== id);
    renderPosts();
};


function editPost(id) {
    const post = posts.find(post => post.id === id);
    
}