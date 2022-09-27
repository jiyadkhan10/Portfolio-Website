//index.html

function validateForm() {

    let x = document.forms["myForm"]["project_name"].value;
    if (x == "") {
      alert("Please! Enter your Name");
      return false;
    }

    let y = document.forms["myForm"]["project_year"].value;
    if (y < 2019 || y > 2023) {
        alert("Please! Enter the  Year between 2019 to 2023");
        return false;
      }

    
      var selected_data = 0;
 
      var chks = document.getElementsByTagName("input");

    
      for (var i = 0; i < chks.length; i++) {
          if (chks[i].checked) {
              selected_data++;
          }
      }

      if (selected_data < 0) {
        alert("Please! Select CheckBoxe(s).");
        return false;
      } 

      var z = document.getElementById("project_description").value;
      if (z == ""){
        alert("Please! Enter your Project Description");
    }
  

}


// add function
function add(){

    var list = document.getElementById("list")
    var project_name = document.getElementById("project_name")
    var project_year = document.getElementById("project_year")
    var project_technologies = document.getElementById("checkbox")
    var project_description = document.getElementById("project_description")
  
    newdiv = document.createElement("div");
    newdivhead = document.createElement("h9");
   
    newdivhead.innerHTML = project_name + "(" + project_year + ")" + "<BR>" + "<BR>"
    newdiv.appendChild(newdivhead)

    newdivli =  document.createElement("div");
    newdiv.appendChild(newdivli)

    
    
}

//mytimetable

function edit_row(no) {

    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
	
    var col1 = document.getElementById("col1_row"+no);
    var col2 = document.getElementById("col2_row"+no);
    var col3 = document.getElementById("col3_row"+no);
    var col4 = document.getElementById("col4_row"+no);
    var col5 = document.getElementById("col5_row"+no);
    var col6 = document.getElementById("col6_row"+no);
    var col7 = document.getElementById("col7_row"+no);
        
    var col1_data = col1.innerHTML;
    var col2_data = col2.innerHTML;
    var col3_data = col3.innerHTML;
    var col4_data = col4.innerHTML;
    var col5_data = col5.innerHTML;
    var col6_data = col6.innerHTML;
    var col7_data = col7.innerHTML;

        
    col1.innerHTML="<input type = 'text' id = 'col1_text"+no+"' value='"+col1_data+"'>";
    col2.innerHTML="<input type = 'text' id = 'col2_text"+no+"' value='"+col2_data+"'>";
    col3.innerHTML="<input type = 'text' id = 'col3_text"+no+"' value='"+col3_data+"'>";
    col4.innerHTML="<input type = 'text' id = 'col4_text"+no+"' value='"+col4_data+"'>";
    col5.innerHTML="<input type = 'text' id = 'col5_text"+no+"' value='"+col5_data+"'>";
    col6.innerHTML="<input type = 'text' id = 'col6_text"+no+"' value='"+col6_data+"'>";
    col7.innerHTML="<input type = 'text' id = 'col7_text"+no+"' value='"+col7_data+"'>";

}

function save_row(no) {

    var col1_val = document.getElementById("col1_text"+no).value;
    var col2_val = document.getElementById("col2_text"+no).value;
    var col3_val = document.getElementById("col3_text"+no).value;
    var col4_val = document.getElementById("col4_text"+no).value;
    var col5_val = document.getElementById("col5_text"+no).value;
    var col6_val = document.getElementById("col6_text"+no).value;
    var col7_val = document.getElementById("col7_text"+no).value;

    document.getElementById("col1_row"+no).innerHTML=col1_val;
    document.getElementById("col2_row"+no).innerHTML=col2_val;
    document.getElementById("col3_row"+no).innerHTML=col3_val;
    document.getElementById("col4_row"+no).innerHTML=col4_val;
    document.getElementById("col5_row"+no).innerHTML=col5_val;
    document.getElementById("col6_row"+no).innerHTML=col6_val;
    document.getElementById("col7_row"+no).innerHTML=col7_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no) {

    document.getElementById("row"+no+"").outerHTML="";
}

function add_row(){

    var new_col1_row = document.getElementById("new_col1_row").value;
    var new_col2_row = document.getElementById("new_col2_row").value;
    var new_col3_row = document.getElementById("new_col3_row").value;
    var new_col4_row = document.getElementById("new_col4_row").value;
    var new_col5_row = document.getElementById("new_col5_row").value;
    var new_col6_row = document.getElementById("new_col6_row").value;
    var new_col7_row = document.getElementById("new_col7_row").value;
	
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><th id='col1_row"+table_len+"'>"+new_col1_row+"</th><td id='col2_row"+table_len+"'>"+new_col2_row+"</td><td id='col3_row"+table_len+"'>"+new_col3_row+"</td><td id='col4_row"+table_len+"'>"+new_col4_row+"</td><td id='col5_row"+table_len+"'>"+new_col5_row+"</td><td id='col6_row"+table_len+"'>"+new_col6_row+"</td><td id='col7_row"+table_len+"'>"+new_col7_row+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_col1_row").value = "";
    document.getElementById("new_col2_row").value = "";
    document.getElementById("new_col3_row").value = "";
    document.getElementById("new_col4_row").value = "";
    document.getElementById("new_col5_row").value = "";
    document.getElementById("new_col6_row").value = "";
    document.getElementById("new_col7_row").value = "";

}


// Course.html

function play(id) {
    var videoplay = document.getElementById(id);
    videoplay.play();
  }
  
  function pause(id) {
    var videodown = document.getElementById(id);
    videodown.pause();
  }
  
  function increaseVolume(id) {
    var videoincreaseVolume = document.getElementById(id);
    videoincreaseVolume.volume = video.volume + 0.1;
  }
  
  function decreaseVolume(id) {
    var videodecreaseVolume = document.getElementById(id);
    videodecreaseVolume.volume = video.volume - 0.1;
  }
  
  function increaseSpeed(id) {
    var videoincreaseSpeed = document.getElementById(id);
    videoincreaseSpeed.playbackRate = video.playbackRate + 0.1;
  }
  
  function decreaseSpeed(id) {
    var videodecreaseSpeed = document.getElementById(id);
    videodecreaseSpeed.playbackRate= video.playbackRate - 0.1;
  }
  
  