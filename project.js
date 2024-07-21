let dataBlog=[];
function addBlog(event) {
    event.preventDefault();

    let name = document.getElementById("projectName").value;
    let tanggalMulai = document.getElementById("startDate").value;
    let tanggalAkhir = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;





    let blog={
        name : name,
        tanggalMulai : tanggalMulai,
        tanggalAkhir: tanggalAkhir,
        description : description,
    };

    dataBlog.push(blog);
    
    renderBlog();

}

function renderBlog() {
    document.getElementById("projectsContainer").innerHTML = ``;

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById("projectsContainer").innerHTML +=`<div style="width: 270px;margin: 5px 10px; box-shadow: 0px 0px 5px; border-radius: 10px;">
                <img src="./day4/asset/repository-open-graph-template (1).png" alt="" style="width: 230px; border-radius: 10px; margin: 10px 20px ;">
                <h1 style="margin: 10px 20px;"> ${dataBlog[i].name} - ${dataBlog[i].tanggalMulai} </h1>
                <p style="margin: 10px 20px;"> ${dataBlog[i].tanggalAkhir} </p>
                <p style="margin: 10px 20px;">  ${dataBlog[i].description}.</p>
                <div style="margin: 10px 20px;">
                    <i class="fa-brands fa-node-js"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-solid fa-angles-right"></i>
                    <i class="fa-solid fa-t"></i>
                </div>
                <div style="display: flex;">
                    <a href="#" style="background-color: black; color: #ffffff; padding:2px 47px; margin: 0px 12px; text-decoration: none; border-radius: 5px;">edit</a>
                    <a href="#" style="background-color: black; color: #ffffff;padding: 1px 35px; text-decoration: none; border-radius: 5px;">delete</a>
                </div>
            </div>`
    }
}

