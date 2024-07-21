let dataBlog =[];
function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let blog = {
        title,
        content : content,
    };
    dataBlog.push(blog);
    renderBlog()

}

function renderBlog() {
    let name = "asuu"
    document.getElementById("contents").innerHTML= "";

    for(let i=0; i < dataBlog.length; i++){
        document.getElementById("contents").innerHTML+=`
        <div class="blog-list-item" style="display: flex;">
            <div class="blog-image">
                <img src="./MOdel AI.png" alt="profil.image" style="width: 300px;">
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">edit post</button>
                    <button class="btn-post">delate post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">
                    ${dataBlog[i].title}</a>
                </h1>
                <div class="detail-blog-content">
                    12 jul 2021 22:30 wib | rifki yudha
                </div>
                <p>${dataBlog[i].content}</p>
            </div>
        </div>
        `
    }

    
}